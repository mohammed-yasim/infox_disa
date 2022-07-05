import { demo_db, infox_datatype, infox_model, infox_sequlize } from "../maria_db";
//configuration
class Configuration extends infox_model { }
Configuration.init({
    name: { type: infox_datatype.STRING, allowNull: true },
    type: { type: infox_datatype.STRING, allowNull: true },
    key: { type: infox_datatype.STRING, allowNull: true },
    value: { type: infox_datatype.TEXT, allowNull: true },
}, { sequelize: demo_db });
//Master
class User extends infox_model { }
class Profile extends infox_model { }
//Configuration
class Designation extends infox_model { }
class Schedule extends infox_model { }
class Location extends infox_model { }
//Master_Data
class Attendance extends infox_model { }
class Visit extends infox_model { }
//Messages & Notification
class Message extends infox_model { }
class Notification extends infox_model { }

//Connections
User.init({
    u_id: { primaryKey: true, type: infox_sequlize.UUID, defaultValue: infox_datatype.UUIDV4, allowNull: false },
    active: { type: infox_datatype.INTEGER, defaultValue: 1, allowNull: false },
    suspended: { type: infox_datatype.INTEGER, defaultValue: 0, allowNull: false },
    u_type: { type: infox_datatype.STRING, allowNull: false },
    username: { type: infox_datatype.STRING, allowNull: false, unique: true, },
    password: { type: infox_datatype.STRING, allowNull: false, },
    rfid: { type: infox_datatype.STRING, allowNull: true, unique: true, },
    //
}, { sequelize: demo_db });
Profile.init({
    u_name: { type: infox_datatype.STRING, allowNull: false },
    u_address: { type: infox_datatype.TEXT, allowNull: true },
    u_contact: { type: infox_datatype.STRING, allowNull: true, validate: { isNumeric: true, len: [10] } },
    u_email: { type: infox_datatype.STRING, allowNull: true, validate: { isEmail: true } },
    u_dob: { type: infox_datatype.DATEONLY, allowNull: true },
}, { sequelize: demo_db });
Designation.init({
    name: { type: infox_datatype.STRING, allowNull: false },
}, { sequelize: demo_db });
Schedule.init({
    clock_in: { type: infox_datatype.TIME, allowNull: false },
    clock_out: { type: infox_datatype.TIME, allowNull: false },
}, { sequelize: demo_db });
Location.init({
    name: { type: infox_datatype.STRING, allowNull: false },
}, { sequelize: demo_db });

Attendance.init({
    date: { type: infox_datatype.DATEONLY, allowNull: false, defaultValue: demo_db.NOW },

    clock_in_server: { type: infox_datatype.TIME, allowNull: false },
    clock_in_local: { type: infox_datatype.TIME, allowNull: true },
    clock_out_server: { type: infox_datatype.TIME, allowNull: true },
    clock_out_local: { type: infox_datatype.TIME, allowNull: true },

    clock_in_lat: { type: infox_datatype.STRING, allowNull: true },
    clock_in_lng: { type: infox_datatype.STRING, allowNull: true },
    clock_in_position: { type: infox_datatype.STRING, allowNull: true },

    clock_out_lat: { type: infox_datatype.STRING, allowNull: true },
    clock_out_lng: { type: infox_datatype.STRING, allowNull: true },
    clock_out_position: { type: infox_datatype.STRING, allowNull: true },

    clock_in_status: { type: infox_datatype.STRING, allowNull: true },
    clock_out_status: { type: infox_datatype.STRING, allowNull: true },

    clock_out_hours: { type: infox_datatype.STRING, allowNull: true },

}, { sequelize: demo_db });
Visit.init({
    lat: { type: infox_datatype.STRING, allowNull: true },
    lng: { type: infox_datatype.STRING, allowNull: true },
    position: { type: infox_datatype.STRING, allowNull: true },

}, { sequelize: demo_db });
///
Message.init({
    status: { type: infox_datatype.INTEGER, defaultValue: 0, allowNull: false },
    txt: { type: infox_datatype.TEXT, allowNull: false },
}, { sequelize: demo_db });

Notification.init({
    status: { type: infox_datatype.INTEGER, defaultValue: 0, allowNull: false },
    txt: { type: infox_datatype.STRING, allowNull: false },
}, { sequelize: demo_db });


//Relations
User.belongsTo(Profile, { foreignKey: { name: 'profile_', allowNull: false }, as: 'profile' });
Designation.hasMany(User, { foreignKey: { name: 'designation_', allowNull: false }, as: 'users' })
Schedule.hasMany(User, { foreignKey: { name: 'schedule_', allowNull: false }, as: 'users' });
Location.hasMany(User, { foreignKey: { name: 'location_', allowNull: false }, as: 'users' });
User.hasMany(Attendance, { foreignKey: { name: 'u_id', allowNull: false }, as: 'Attendances ' });
User.hasMany(Visit, { foreignKey: { name: 'u_id', allowNull: false }, as: 'visits' });
User.hasMany(Message, { foreignKey: { name: 'sender', allowNull: false }, as: 'from_chats' });
User.hasMany(Message, { foreignKey: { name: 'recipient', allowNull: false }, as: 'to_chats' });
User.hasMany(Notification, { foreignKey: { name: 'recipient', allowNull: false }, as: 'notifications' });
export {
    Configuration,
    User, Profile,
    Designation, Schedule, Location,
    Attendance, Visit,
    Message, Notification
}