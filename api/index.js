"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _axios = _interopRequireDefault(require("axios"));

var _maria_db = require("./maria_db");

var _middleware = require("./middleware");

var _models = require("./models");

var _settings = _interopRequireDefault(require("./modules/settings"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _catalogue = _interopRequireDefault(require("./modules/catalogue"));

var _quotation = _interopRequireDefault(require("./modules/quotation"));

var _models2 = require("./database/models");

var _report = _interopRequireDefault(require("./modules/report"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_Router = _express.default.Router();

API_Router.use('/settings', _settings.default);
API_Router.use('/catalogue', _catalogue.default);
API_Router.use('/quotation', _quotation.default);
API_Router.use('/reports', _report.default); //API_Router.use(jsonErrorHandler)

API_Router.get('/', (req, res) => {
  res.send("API");
});
API_Router.get('/sync', (req, res) => {
  _maria_db.infox_db.sync().then(data => {
    res.send('Synced');
  }, err => {
    res.send("".concat(err));
  });
});
API_Router.get('/demo-user', (req, res) => {
  _bcryptjs.default.hash('yasim', 10, (error, hash) => {
    if (error) {
      res.status(500).send("".concat(error));
    } else {
      _models.Users.create({
        username: 'yasim',
        password: hash,
        u_type: 'root',
        u_name: 'Mohammed Yasim',
        u_email: 'yasim@test.com',
        u_contact: '9746830098'
      }).then(user => {
        res.status(200).json(user);
      }).catch(err => {
        res.status(401).json(err);
      });
    }
  });
});
API_Router.post('/login', (req, res) => {
  _models2.User.findOne({
    where: {
      username: req.body.username,
      active: 1,
      suspended: 0
    }
  }).then(user => {
    if (user) {
      _bcryptjs.default.compare(req.body.password, user.password, (error, match) => {
        if (error) {
          res.status(406).send('invalid credentials');
        } else if (match) {
          var data = {
            u_id: user.u_id,
            u_type: user.u_type,
            u_name: user.u_name
          };
          res.status(200).json({
            token: (0, _middleware.generateToken)(data)
          });
        } else {
          res.status(406).send('invalid credentials');
        }
      });
    } else {
      res.status(406).send('inactive/invalid credentials/suspended');
    }
  }).catch(err => {
    res.status(401).send("".concat(err));
  });
});
API_Router.get('/sync_user', _middleware.Middleware, (req, res) => {
  _models2.User.findOne({
    attributes: ['u_id', 'u_type'],
    where: {
      u_id: req.user.u_id
    },
    include: {
      model: _models2.Profile,
      as: 'profile',
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'id']
      }
    }
  }).then(user => {
    /*
    let data = {
        u_id : user.u_id,
        u_type : user.u_type,
        profile:{u_name:"Root"}
    }
    res.status(200).json(data)
    */
    res.status(200).json(user);
  }).catch(err => {
    res.status(401).json(err);
  });
});

var Scheduler = (request, response, next) => {
  _models2.User.findOne({
    attributes: ['schedule_'],
    where: {
      u_id: request.user.u_id
    }
  }).then(user => {
    _models2.Schedule.findOne({
      attributes: ['clock_in', 'clock_out'],
      where: {
        id: user.schedule_
      }
    }).then(schedule => {
      request.user.schedule = schedule;
      next();
    }).catch(err => {
      console.log(err);
      next();
    });
  }).catch(err => {
    console.log(err);
    next();
  });
};

API_Router.get('/clock_', _middleware.Middleware, Scheduler, (req, res) => {
  _models2.Attendance.findOne({
    attributes: ['id', 'clock_out_server', 'clock_in_position', 'clock_in_server'],
    where: {
      u_id: req.user.u_id,
      date: new Date()
    }
  }).then(user => {
    if (user) {
      //if (user.clock_out === null) {
      if (user.clock_out_server === null) {
        res.status(200).json({
          clock_status: 2,
          color: 'red',
          text: "You are in from ,".concat(user.clock_in_position, " at ").concat(user.clock_in_server)
        });
      } else {
        res.status(200).json({
          clock_status: 3,
          color: '#00bfff',
          text: "Already done for the day"
        });
      }
    } else {
      res.status(200).json({
        clock_status: 1,
        color: '#00bfff',
        text: 'Welcome Login'
      });
    }
  });
});
API_Router.post('/clock_', _middleware.Middleware, Scheduler, (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  var timecal = 1000 * 60;
  var a = new Date();
  var b = new Date();
  var av = "".concat(req.user.schedule.clock_in).split(':');
  var bv = "".concat(req.user.schedule.clock_out).split(':');
  a.setHours(av[0], av[1], av[2], 0);
  b.setHours(bv[0], bv[1], bv[2], 0);

  _axios.default.get("https://us1.locationiq.com/v1/reverse.php?key=78a0e5fd31043f&lat=".concat(req.body.latitude, "&lon=").concat(req.body.longitude, "&format=json")).then(response => {
    _models2.Attendance.findOne({
      where: {
        u_id: req.user.u_id,
        date: new Date()
      }
    }).then(user => {
      if (user) {
        var c = new Date();
        var cv = "".concat(user.clock_in_server).split(':');
        c.setHours(cv[0], cv[1], cv[2], 0);
        var hours = ((new Date() - c) / timecal).toFixed(2);

        if (user.clock_out_server === null) {
          user.clock_out_server = new Date();
          user.clock_out_local = new Date(req.body.clock);
          user.clock_out_lat = req.body.latitude;
          user.clock_out_lng = req.body.longitude;
          user.clock_out_position = response.data.display_name;
          user.clock_out_status = ((new Date() - b) / timecal).toFixed(2);
          user.clock_out_hours = hours;
          user.clock_out_ip = ip;
          user.clock_out_agent = req.body.agent;
          user.save();
          res.status(200).json({
            clock_status: 3,
            color: '#00bfff',
            text: "You are Out from ,".concat(user.clock_out_position, " at ").concat(user.clock_out_server)
          });
        } else {
          res.status(200).json({
            clock_status: 3,
            color: '#00bfff',
            text: "Already done for the day"
          });
        }
      } else {
        _models2.Attendance.create({
          u_id: req.user.u_id,
          date: new Date(),
          clock_in_server: new Date(),
          clock_in_local: new Date(req.body.clock),
          clock_in_lat: req.body.latitude,
          clock_in_lng: req.body.longitude,
          clock_in_position: response.data.display_name,
          clock_in_status: ((new Date() - a) / timecal).toFixed(2),
          clock_in_ip: ip,
          clock_in_agent: req.body.agent
        }).then(user => {
          res.status(200).json({
            clock_status: 2,
            color: 'red',
            text: "You are in from ".concat(user.clock_in_position, " at ").concat(user.clock_in_server)
          });
        }).catch(err => {
          res.status(403).send("".concat(err));
          console.log(2, err);
        });
      }
    }).catch(err => {
      res.status(404).send("".concat(err));
      console.log(1, err);
    });
  }).catch(err => {
    console.log(0, err);
  });
});
API_Router.post('/activity_status', _middleware.Middleware, (req, res) => {
  _models2.ActivityStatus.create({
    u_id: req.user.u_id,
    txt: req.body.txt
  }).then(activity => {
    res.status(200).json(activity);
  }).catch(err => {
    res.status(404).send("".concat(err));
  });
});
API_Router.get('/activity_status', _middleware.Middleware, (req, res) => {
  _models2.ActivityStatus.findOne({
    attributes: ['txt', 'updatedAt'],
    where: {
      u_id: req.user.u_id
    },
    order: [['createdAt', 'DESC']]
  }).then(activity => {
    res.status(200).json({
      activity: activity
    });
  }).catch(err => {
    res.status(404).send("".concat(err));
  });
});
API_Router.get('/map', (req, res) => {
  var users = new Promise((resolve, reject) => {
    _models2.User.findAll({
      attributes: {
        exclude: ['password']
      },
      include: 'profile'
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    });
  });
  var attendances = new Promise((resolve, reject) => {
    _models2.Attendance.findAll({
      where: {
        date: new Date()
      }
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    });
  });
  Promise.all([users, attendances]).then(values => {
    var data = {
      users: values[0],
      attendances: values[1]
    };
    res.status(200).json(data);
  });
});
var _default = API_Router;
exports.default = _default;