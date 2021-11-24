"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _maria_db = require("./maria_db");

var _middleware = require("./middleware");

var _models = require("./models");

var _settings = _interopRequireDefault(require("./modules/settings"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _catalogue = _interopRequireDefault(require("./modules/catalogue"));

var _quotation = _interopRequireDefault(require("./modules/quotation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_Router = _express.default.Router();

API_Router.use('/settings', _settings.default);
API_Router.use('/catalogue', _catalogue.default);
API_Router.use('/quotation', _quotation.default); //API_Router.use(jsonErrorHandler)

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
        res.json(user);
      }).catch(err => {
        res.status(401).json(err);
      });
    }
  });
});
API_Router.post('/login', (req, res) => {
  console.log(req.body);

  _models.Users.findOne({
    where: {
      username: req.body.username,
      active: 1,
      suspended: 0
    }
  }).then(user => {
    if (user) {
      _bcryptjs.default.compare(req.body.password, user.password, (error, match) => {
        if (error) {
          response.status(406).send('invalid credentials');
        } else if (match) {
          var data = {
            u_id: user.u_id,
            u_type: user.u_type
          };
          res.json({
            token: (0, _middleware.generateToken)(data)
          });
        } else {
          res.status(406).send('invalid credentials');
        }
      });
    } else {
      response.status(406).send('inactive/invalid credentials/suspended');
    }
  }).catch(err => {
    res.status(401).send("".concat(err));
  });
});
API_Router.get('/sync_user', _middleware.Middleware, (req, res) => {
  _models.Users.findOne({
    where: {
      u_id: req.user.u_id
    }
  }).then(user => {
    res.json(user);
  }).catch(err => {
    res.status(401).json(err);
  });
});
var _default = API_Router;
exports.default = _default;