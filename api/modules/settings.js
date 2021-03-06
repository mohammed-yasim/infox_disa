"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _models = require("../database/models");

var _middleware = require("../middleware");

var _maria_db = require("../maria_db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SettingAPI = _express.default.Router();

SettingAPI.get('/', _middleware.rootMiddleware, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var json = {
      locations: 0,
      designations: 0,
      schedules: 0,
      users: 0
    };

    var location = _models.Location.count();

    var designations = _models.Designation.count();

    var schedules = _models.Schedule.count();

    var users = _models.User.count();

    Promise.all([location, designations, schedules, users]).then(data => {
      json['locations'] = data[0];
      json['designations'] = data[1];
      json['schedules'] = data[2];
      json['users'] = data[3];
      res.status(200).json(json);
    }).catch(err => {
      res.status(406).send("".concat(err));
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
SettingAPI.get('/config/:type', _middleware.rootMiddleware, (req, res) => {
  var type = req.params.type;

  switch (type) {
    case 'locations':
      _models.Location.findAll({
        include: {
          model: _models.User,
          as: 'users',
          attributes: ['username'],
          include: {
            model: _models.Profile,
            as: 'profile',
            attributes: ['u_name']
          }
        }
      }).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send("".concat(err)));

      break;

    case 'designations':
      _models.Designation.findAll({
        include: {
          model: _models.User,
          as: 'users',
          attributes: ['username'],
          include: {
            model: _models.Profile,
            as: 'profile',
            attributes: ['u_name']
          }
        }
      }).then(designations => res.status(200).json(designations)).catch(err => res.status(406).send("".concat(err)));

      break;

    case 'schedules':
      _models.Schedule.findAll({
        include: {
          model: _models.User,
          as: 'users',
          attributes: ['username'],
          include: {
            model: _models.Profile,
            as: 'profile',
            attributes: ['u_name']
          }
        }
      }).then(schedules => res.status(200).json(schedules)).catch(err => res.status(406).send("".concat(err)));

      break;

    case 'users':
      var json = {
        users: [],
        locations: [],
        schedules: [],
        designations: []
      }; //data for forms

      var location = _models.Location.findAll();

      var designations = _models.Designation.findAll();

      var schedules = _models.Schedule.findAll(); /// master


      var users = _models.User.findAll({
        attributes: {
          exclude: ['password']
        },
        where: {
          suspended: 0,
          u_id: {
            [_maria_db.infox_op.not]: req.user.u_id
          }
        },
        include: {
          model: _models.Profile,
          as: 'profile'
        }
      });

      Promise.all([location, designations, schedules, users]).then(data => {
        json['locations'] = data[0];
        json['designations'] = data[1];
        json['schedules'] = data[2];
        json['users'] = data[3];
        res.status(200).json(json);
      }).catch(err => {
        res.status(406).send("".concat(err));
      });
      break;

    default:
      res.status(406).send("Type Required");
  }
});
SettingAPI.post('/config/:type/:action', _middleware.rootMiddleware, (req, res) => {
  var type = "".concat(req.params.type, "_").concat(req.params.action);

  switch (type) {
    case 'locations_add':
      _models.Location.create(req.body).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send("".concat(err)));

      break;

    case 'designations_add':
      _models.Designation.create(req.body).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send("".concat(err)));

      break;

    case 'schedules_add':
      _models.Schedule.create(req.body).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send("".concat(err)));

      break;

    case 'users_add':
      _bcryptjs.default.hash(req.body.password, 10, (error, hash) => {
        if (error) {
          res.status(500).send("? ".concat(error));
        } else {
          _models.Profile.create({
            u_name: req.body.u_name,
            u_email: req.body.u_email,
            u_contact: req.body.u_contact
          }).then(profile => {
            _models.User.create({
              u_type: req.body.u_type,
              username: req.body.username,
              password: hash,
              profile_: profile.id,
              designation_: req.body.designation_,
              location_: req.body.location_,
              schedule_: req.body.schedule_
            }).then(user => {
              user.password = '';
              res.status(200).json(user);
            }).catch(err => {
              res.status(406).send("B ".concat(err));
            });
          }).catch(err => {
            res.status(406).send("A ".concat(err));
          });
        }
      });

      break;

    case 'users_deactivate':
      _models.User.update({
        active: 0
      }, {
        attributes: ['username'],
        where: {
          u_id: req.body.u_id,
          active: 1
        }
      }).then(user => {
        res.status(200).json(user);
      }).catch(err => {
        res.status(406).send("user_deactivate ".concat(err));
      });

      break;

    case 'users_activate':
      _models.User.update({
        active: 1
      }, {
        attributes: ['username'],
        where: {
          u_id: req.body.u_id,
          active: 0
        }
      }).then(user => {
        res.status(200).json(user);
      }).catch(err => {
        res.status(406).send("user_deactivate ".concat(err));
      });

      break;

    default:
      res.status(406).send("Type Required");
  }
});
var _default = SettingAPI;
exports.default = _default;