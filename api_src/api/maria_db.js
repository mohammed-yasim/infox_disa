import { Sequelize, Model, DataTypes, Op } from 'sequelize';
const infox_db = new Sequelize('u947217984_infox', 'u947217984_infox', '9hHQKOTx3gKH', {
    host: 'sql336.main-hosting.eu',
    dialect: 'mariadb',
    pool: {
        max: 150,
        min: 0,
        idle: 10000,
        acquire: 60000,
        evict: 1000,
    }
});
export { infox_db, Model as infox_model, DataTypes as infox_datatype, Op as infox_op, Sequelize as infox_sequlize }