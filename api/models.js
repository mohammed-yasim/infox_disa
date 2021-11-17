"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Variables = exports.Users = exports.Products = void 0;

var _maria_db = require("./maria_db");

class Users extends _maria_db.infox_model {}

exports.Users = Users;

class Variables extends _maria_db.infox_model {}

exports.Variables = Variables;

class Products extends _maria_db.infox_model {}

exports.Products = Products;
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
Variables.init({
  var_i: {
    primaryKey: true,
    type: _maria_db.infox_sequlize.UUID,
    defaultValue: _maria_db.infox_datatype.UUIDV4,
    allowNull: false
  },
  var_n: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  var_v: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  var_t: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  var_c: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  }
}, {
  sequelize: _maria_db.infox_db,
  modelName: 'Variables',
  tableName: 'tb_infox_variables'
});
Products.init({
  p_id: {
    primaryKey: true,
    type: _maria_db.infox_sequlize.UUID,
    defaultValue: _maria_db.infox_datatype.UUIDV4,
    allowNull: false
  },
  p_name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  p_code: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false,
    unique: true
  },
  p_master: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  p_sub: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  p_group: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  //000,
  p_image: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: false
  },
  p_description: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: true
  },
  p_options: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: true
  },
  p_unit: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  p_alias: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  p_reference: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  p_remarks: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: true
  },
  p_images: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: true
  },
  p_tags: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: true
  },
  p_price: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  verified: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  }
}, {
  sequelize: _maria_db.infox_db,
  modelName: 'Products',
  tableName: 'tb_infox_products'
});