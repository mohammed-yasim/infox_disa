import { Sequelize, Model, DataTypes, Op } from 'sequelize';
//45.84.204.52    9hHQKOTx3gKH
//173.249.36.84   5g&9Zq9auxKsGrwn
const infox_db = new Sequelize('u947217984_infox', 'u947217984_infox', '9hHQKOTx3gKH', {
    host: '45.84.204.52',
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