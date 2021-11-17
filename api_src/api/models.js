import { infox_db, infox_datatype, infox_model, infox_sequlize } from "./maria_db";

class Users extends infox_model { }
class Variables extends infox_model { }
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
Variables.init({
    var_i: {
        primaryKey: true,
        type: infox_sequlize.UUID,
        defaultValue: infox_datatype.UUIDV4,
        allowNull: false
    },
    var_n: {
        type: infox_datatype.STRING,
        allowNull: false
    },
    var_v: {
        type: infox_datatype.STRING,
        allowNull: false
    },
    var_t: {
        type: infox_datatype.STRING,
        allowNull: false
    },
    var_c: {
        type: infox_datatype.STRING,
        allowNull: true
    }
},
    {
        sequelize: infox_db, modelName: 'Variables', tableName: 'tb_infox_variables'
    })
Products.init({
    p_id: {
        primaryKey: true,
        type: infox_sequlize.UUID,
        defaultValue: infox_datatype.UUIDV4,
        allowNull: false
    },
    p_name: {
        type: infox_datatype.STRING,
        allowNull: false
    },
    p_code: {
        type: infox_datatype.STRING,
        allowNull: false,
        unique: true
    },

    p_master: {
        type: infox_datatype.STRING,
        allowNull: false
    },

    p_sub: {
        type: infox_datatype.STRING,
        allowNull: false
    },

    p_group: {
        type: infox_datatype.STRING,
        allowNull: false
    },
    //000,
    p_image: {
        type: infox_datatype.TEXT,
        allowNull: false
    },
    p_description: {
        type: infox_datatype.TEXT,
        allowNull: true
    },
    p_options: {
        type: infox_datatype.TEXT,
        allowNull: true
    },
    p_unit: {
        type: infox_datatype.STRING,
        allowNull: true
    },

    p_alias: {
        type: infox_datatype.STRING,
        allowNull: true
    },
    p_reference: {
        type: infox_datatype.STRING,
        allowNull: true
    },
    p_remarks: {
        type: infox_datatype.TEXT,
        allowNull: true
    },
    p_images:
    {
        type: infox_datatype.TEXT,
        allowNull: true
    },
    p_tags:
    {
        type: infox_datatype.TEXT,
        allowNull: true
    },
    p_price:
    {
        type: infox_datatype.STRING,
        allowNull: true
    },
    verified:
    {
        type: infox_datatype.STRING,
        allowNull: true
    },
    
},
    {
        sequelize: infox_db, modelName: 'Products', tableName: 'tb_infox_products'
    })
export { Users, Variables, Products }
