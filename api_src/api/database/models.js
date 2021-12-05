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
class Users extends infox_model { }
class Profile extends infox_model { }
//Configuration
class Designations extends infox_model { }
class Schedules extends infox_model { }
//Data
class Clocks extends infox_model { }
class Visits extends infox_model { }
class Location extends infox_model { }
//Connections
Users.init({
    u_id: { primaryKey: true, type: infox_sequlize.UUID, defaultValue: infox_datatype.UUIDV4, allowNull: false },
    active: { type: infox_datatype.INTEGER, defaultValue: 1, allowNull: false },
    suspended: { type: infox_datatype.INTEGER, defaultValue: 0, allowNull: false },
    u_type: { type: infox_datatype.STRING, allowNull: false },
    username: { type: infox_datatype.STRING, allowNull: false, unique: true, },
    password: { type: infox_datatype.STRING, allowNull: false, },
    //
}, { sequelize: demo_db });
Profile.init({
    u_name: { type: infox_datatype.STRING, allowNull: false },
    u_address: { type: infox_datatype.TEXT, allowNull: true },
    u_contact: { type: infox_datatype.STRING, allowNull: true, validate: { isNumeric: true, len: [10] } },
    u_email: { type: infox_datatype.STRING, allowNull: true, validate: { isEmail: true } },
    u_dob: { type: infox_datatype.DATEONLY, allowNull: true },
}, { sequelize: demo_db });
Designations.init({
    name: { type: infox_datatype.STRING, allowNull: false, unique: true },
}, { sequelize: demo_db });
Schedules.init({
    clock_in: { type: infox_datatype.TIME, allowNull: false },
    clock_out: { type: infox_datatype.TIME, allowNull: false },
}, { sequelize: demo_db });
Clocks.init({
    clock_in: { type: infox_datatype.TIME, allowNull: false },
    clock_out: { type: infox_datatype.TIME, allowNull: false },

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
Location.init({
    name: { type: infox_datatype.STRING, allowNull: false, unique: true },
}, { sequelize: demo_db });
Visits.init({
    lat: { type: infox_datatype.STRING, allowNull: true },
    lng: { type: infox_datatype.STRING, allowNull: true },
    position: { type: infox_datatype.STRING, allowNull: true },
}, { sequelize: demo_db });
//Relations
Users.belongsTo(Profile, { foreignKey: { name: 'profile_', allowNull: false }, as: 'profile' });
Designations.hasMany(Users, { foreignKey: { name: 'designation_', allowNull: false }, as: 'users' })
Schedules.hasMany(Users, { foreignKey: { name: 'schedule_', allowNull: false }, as: 'users' });
Location.hasMany(Users, { foreignKey: { name: 'location_', allowNull: false }, as: 'users' });
Users.hasMany(Clocks, { foreignKey: { name: 'u_id', allowNull: false }, as: 'clocks' });
Users.hasMany(Visits, { foreignKey: { name: 'u_id', allowNull: false }, as: 'visits' });
export {
    Configuration,
    Users, Profile,
    Designations, Schedules, Location,
    Clocks, Visits,
}