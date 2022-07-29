"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visit = exports.User = exports.Schedule = exports.Profile = exports.Notification = exports.Message = exports.Location = exports.Designation = exports.Configuration = exports.Attendance = exports.ActivityStatus = void 0;

var _maria_db = require("../maria_db");

//configuration
class Configuration extends _maria_db.infox_model {}

exports.Configuration = Configuration;
Configuration.init({
  name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  type: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  key: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true
  },
  value: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: true
  }
}, {
  sequelize: _maria_db.demo_db
}); //Master

class User extends _maria_db.infox_model {}

exports.User = User;

class Profile extends _maria_db.infox_model {} //Configuration


exports.Profile = Profile;

class Designation extends _maria_db.infox_model {}

exports.Designation = Designation;

class Schedule extends _maria_db.infox_model {}

exports.Schedule = Schedule;

class Location extends _maria_db.infox_model {} //Master_Data


exports.Location = Location;

class Attendance extends _maria_db.infox_model {}

exports.Attendance = Attendance;

class Visit extends _maria_db.infox_model {} //Messages & Notification


exports.Visit = Visit;

class Message extends _maria_db.infox_model {}

exports.Message = Message;

class Notification extends _maria_db.infox_model {} // Non Linked Data 


exports.Notification = Notification;

class ActivityStatus extends _maria_db.infox_model {} //Connections


exports.ActivityStatus = ActivityStatus;
User.init({
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
  },
  rfid: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true,
    unique: true
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
Designation.init({
  name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  }
}, {
  sequelize: _maria_db.demo_db
});
Schedule.init({
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
Location.init({
  name: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  }
}, {
  sequelize: _maria_db.demo_db
});
Attendance.init({
  date: {
    type: _maria_db.infox_datatype.DATEONLY,
    allowNull: false,
    defaultValue: _maria_db.demo_db.NOW
  },
  clock_in_server: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: false
  },
  clock_in_local: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: true
  },
  clock_out_server: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: true
  },
  clock_out_local: {
    type: _maria_db.infox_datatype.TIME,
    allowNull: true
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
  },
  clock_in_ip: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true,
    defaultValue: '0.0.0.0'
  },
  clock_out_ip: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true,
    default: '0.0.0.0'
  },
  clock_in_agent: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true,
    defaultValue: 'IX'
  },
  clock_out_agent: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: true,
    default: 'OX'
  }
}, {
  sequelize: _maria_db.demo_db
});
Visit.init({
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
}); ///

Message.init({
  status: {
    type: _maria_db.infox_datatype.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  txt: {
    type: _maria_db.infox_datatype.TEXT,
    allowNull: false
  }
}, {
  sequelize: _maria_db.demo_db
});
Notification.init({
  status: {
    type: _maria_db.infox_datatype.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  txt: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  }
}, {
  sequelize: _maria_db.demo_db
});
ActivityStatus.init({
  txt: {
    type: _maria_db.infox_datatype.STRING,
    allowNull: false
  }
}, {
  sequelize: _maria_db.demo_db
}); //Relations

User.belongsTo(Profile, {
  foreignKey: {
    name: 'profile_',
    allowNull: false
  },
  as: 'profile'
});
Designation.hasMany(User, {
  foreignKey: {
    name: 'designation_',
    allowNull: false
  },
  as: 'users'
});
Schedule.hasMany(User, {
  foreignKey: {
    name: 'schedule_',
    allowNull: false
  },
  as: 'users'
});
Location.hasMany(User, {
  foreignKey: {
    name: 'location_',
    allowNull: false
  },
  as: 'users'
});
User.hasMany(Attendance, {
  foreignKey: {
    name: 'u_id',
    allowNull: false
  },
  as: 'Attendances '
});
User.hasMany(Visit, {
  foreignKey: {
    name: 'u_id',
    allowNull: false
  },
  as: 'visits'
});
User.hasMany(Message, {
  foreignKey: {
    name: 'sender',
    allowNull: false
  },
  as: 'from_chats'
});
User.hasMany(Message, {
  foreignKey: {
    name: 'recipient',
    allowNull: false
  },
  as: 'to_chats'
});
User.hasMany(Notification, {
  foreignKey: {
    name: 'recipient',
    allowNull: false
  },
  as: 'notifications'
});
User.hasMany(ActivityStatus, {
  foreignKey: {
    name: 'u_id',
    allowNull: false
  },
  as: 'status'
});