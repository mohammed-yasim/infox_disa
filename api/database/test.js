"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("./models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = _express.default.Router();

Demo.get('/', (req, res) => {
  _models.Users.findAll({}).then(users => {
    res.json(users);
  }).catch(err => {
    res.json(err);
  });
});
Demo.get('/', (req, res) => {
  _models.Schedules.create({}).then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  });
});
var _default = Demo;
exports.default = _default;