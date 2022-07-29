"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("../database/models");

var _maria_db = require("../maria_db");

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportAPI = _express.default.Router();

ReportAPI.post('/attendance', _middleware.adminMiddleware, (req, res) => {
  var users = new Promise((resolve, reject) => {
    _models.User.findAll({
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
    var PublishDate = new Date(req.body.from);
    var endDate = new Date(req.body.to);

    _models.Attendance.findAll({
      where: {
        'date': {
          [_maria_db.infox_op.between]: [PublishDate, endDate]
        }
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
  }).catch(err => {
    res.send(404);
  });
});
ReportAPI.post('/activity_status', _middleware.adminMiddleware, (req, res) => {
  var users = new Promise((resolve, reject) => {
    _models.User.findAll({
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
  var activity_status = new Promise((resolve, reject) => {
    var PublishDate = new Date(req.body.from);
    var endDate = new Date(req.body.to);

    _models.ActivityStatus.findAll({
      where: {
        'updatedAt': {
          [_maria_db.infox_op.between]: [PublishDate, endDate]
        }
      }
    }).then(data => {
      resolve(data);
    }).catch(err => {
      reject(err);
    });
  });
  Promise.all([users, activity_status]).then(values => {
    var data = {
      users: values[0],
      activity_status: values[1]
    };
    res.status(200).json(data);
  }).catch(err => {
    res.send(404);
  });
});
var _default = ReportAPI;
exports.default = _default;