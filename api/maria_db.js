"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "infox_datatype", {
  enumerable: true,
  get: function get() {
    return _sequelize.DataTypes;
  }
});
exports.infox_db = void 0;
Object.defineProperty(exports, "infox_model", {
  enumerable: true,
  get: function get() {
    return _sequelize.Model;
  }
});
Object.defineProperty(exports, "infox_op", {
  enumerable: true,
  get: function get() {
    return _sequelize.Op;
  }
});
Object.defineProperty(exports, "infox_sequlize", {
  enumerable: true,
  get: function get() {
    return _sequelize.Sequelize;
  }
});

var _sequelize = require("sequelize");

//45.84.204.52    9hHQKOTx3gKH
//173.249.36.84   5g&9Zq9auxKsGrwn
var infox_db = new _sequelize.Sequelize('u947217984_infox', 'u947217984_infox', '9hHQKOTx3gKH', {
  host: '45.84.204.52',
  dialect: 'mariadb',
  pool: {
    max: 150,
    min: 0,
    idle: 10000,
    acquire: 60000,
    evict: 1000
  }
});
exports.infox_db = infox_db;