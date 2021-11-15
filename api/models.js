"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;

var _maria_db = require("./maria_db");

class Users extends _maria_db.infox_model {}

exports.Users = Users;

class Products extends _maria_db.infox_model {}

Users.init({
  u_id: {
    primaryKey: true,
    type: _maria_db.infox_sequlize.UUID,
    defaultValue: _maria_db.infox_datatype.UUIDV4,
    allowNull: false
  },
  active: {
    type: _maria_db.infox_datatype.INTEGER,
    defaultValue: 1,
    allowNull: false
  },
  suspended: {
    type: _maria_db.infox_datatype.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  //-PRIMARY
  u_type: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  username: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  //DATA
  u_name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  u_email: {
    type: _maria_db.infox_datatype.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  u_contact: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isNumeric: true,
      len: [10]
    }
  }
}, {
  sequelize: _maria_db.infox_db,
  modelName: 'Users',
  tableName: 'tb_infox_users'
});
Products;