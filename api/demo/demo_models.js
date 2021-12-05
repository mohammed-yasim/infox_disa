"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visits = exports.Users = exports.Schedules = exports.Profile = exports.Location = exports.Designations = exports.Clocks = void 0;

var _maria_db = require("../maria_db");

//Master
class Users extends _maria_db.infox_model {}

exports.Users = Users;

class Profile extends _maria_db.infox_model {} //Configuration


exports.Profile = Profile;

class Designations extends _maria_db.infox_model {}

exports.Designations = Designations;

class Schedules extends _maria_db.infox_model {} //Data


exports.Schedules = Schedules;

class Clocks extends _maria_db.infox_model {}

exports.Clocks = Clocks;

class Visits extends _maria_db.infox_model {}

exports.Visits = Visits;

class Location extends _maria_db.infox_model {} //Connections


exports.Location = Location;
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
  } //

}, {
  sequelize: _maria_db.demo_db
});
Profile.init({
  u_name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  },
  u_address: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: true
  },
  u_contact: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true,
    validate: {
      isNumeric: true,
      len: [10]
    }
  },
  u_email: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    }
  },
  u_dob: {
    type: _maria_db.infox_datatype.DATEONLY,
    allowNull: true
  }
}, {
  sequelize: _maria_db.demo_db
});
Designations.init({
  name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize: _maria_db.demo_db
});
Schedules.init({
  clock_in: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: false
  },
  clock_out: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: false
  }
}, {
  sequelize: _maria_db.demo_db
});
Clocks.init({
  clock_in: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: false
  },
  clock_out: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: false
  },
  clock_in_lat: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_in_lng: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_in_position: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_out_lat: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_out_lng: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_out_position: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_in_status: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_out_status: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  clock_out_hours: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  }
}, {
  sequelize: _maria_db.demo_db
});
Location.init({
  name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize: _maria_db.demo_db
});
Visits.init({
  lat: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  lng: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  position: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  }
}, {
  sequelize: _maria_db.demo_db
}); //Relations

Users.belongsTo(Profile, {
  foreignKey: {
    name: 'profile_',
    allowNull: false
  },
  as: 'profile'
});
Users.belongsTo(Designations, {
  foreignKey: {
    name: 'designation_',
    allowNull: false
  },
  as: 'designation'
});
Users.belongsTo(Schedules, {
  foreignKey: {
    name: 'schedule_',
    allowNull: false
  },
  as: 'schedule'
});
Users.belongsTo(Location, {
  foreignKey: {
    name: 'location_',
    allowNull: false
  },
  as: 'location'
});
Users.hasMany(Clocks, {
  foreignKey: {
    name: 'u_id',
    allowNull: false
  },
  as: 'clocks'
});
Users.hasMany(Visits, {
  foreignKey: {
    name: 'u_id',
    allowNull: false
  },
  as: 'visits'
});