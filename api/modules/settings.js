"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _models = require("../models");

var _middleware = require("../middleware");

var _maria_db = require("../maria_db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingAPI = _express.default.Router();

SettingAPI.get('/users', _middleware.rootMiddleware, (req, res) => {
  _models.Users.findAll({
    attributes: {
      exclude: ['password']
    },
    where: {
      suspended: 0,
      u_id: {
        [_maria_db.infox_op.not]: req.user.u_id
      }
    }
  }).then(user => {
    user.password = '';
    res.json(user);
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
SettingAPI.post('/users', _middleware.rootMiddleware, (req, res) => {
  var action = req.query.action;

  switch (action) {
    case 'add':
      _bcryptjs.default.hash(req.body.password, 10, (error, hash) => {
        if (error) {
          res.status(500).send("".concat(error));
        } else {
          _models.Users.create({
            u_type: req.body.u_type,
            username: req.body.username,
            password: hash,
            u_name: req.body.u_name,
            u_email: req.body.u_email,
            u_contact: req.body.u_contact
          }).then(user => {
            user.password = '';
            res.json(user);
          }).catch(err => {
            res.status(406).send("".concat(err));
          });
        }
      });

      break;

    default:
      res.status(500).send('No Actions');
  }
});
var _default = SettingAPI;
exports.default = _default;