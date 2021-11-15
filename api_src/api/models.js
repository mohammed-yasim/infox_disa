import { infox_db, infox_datatype, infox_model, infox_sequlize } from "./maria_db";

class Users extends infox_model { }
class Products extends infox_model { }
Users.init({
    u_id: {
        primaryKey: true,
        type: infox_sequlize.UUID,
        defaultValue: infox_datatype.UUIDV4,
        allowNull: false
    },
    active: {
        type: infox_datatype.INTEGER,
        defaultValue: 1,
        allowNull: false
    },
    suspended: {
        type: infox_datatype.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    //-PRIMARY
    u_type: {
        type: infox_datatype.STRING,
        allowNull: false
    },
    username: {
        type: infox_datatype.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: infox_datatype.STRING,
        allowNull: false,
    },
    //DATA
    u_name: {
        type: infox_datatype.STRING,
        allowNull: false
    },
    u_email: {
        type: infox_datatype.STRING,
        unique: true,
        validate: {
            isEmail: true
        }

    },
    u_contact: {
        type: infox_datatype.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true,
            len: [10]
        }
    },
}, {
    sequelize: infox_db, modelName: 'Users', tableName: 'tb_infox_users'
});
Products

export { Users }
