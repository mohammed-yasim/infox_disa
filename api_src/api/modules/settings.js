import express from "express";
import bcrypt from 'bcryptjs';
import { Users } from "../models";
import { rootMiddleware } from "../middleware";
import { infox_op } from "../maria_db";
const SettingAPI = express.Router();
SettingAPI.get('/users',rootMiddleware, (req, res) => {
    Users.findAll({
        attributes:{
        exclude: ['password']
        },
        where: { suspended: 0,u_id : { [infox_op.not]:req.user.u_id} }
    }).then((user) => {
        user.password = ''
        res.json(user);
    }).catch((err) => {
        res.status(406).send(`${err}`)
    })
})
SettingAPI.post('/users',rootMiddleware, (req, res) => {
    const action = req.query.action;
    switch (action) {
        case 'add':
            bcrypt.hash(req.body.password, 10, (error, hash) => {
                if (error) {
                    res.status(500).send(`${error}`);
                }
                else {
                    Users.create({
                        u_type: req.body.u_type,
                        username: req.body.username,
                        password: hash,
                        u_name: req.body.u_name,
                        u_email: req.body.u_email,
                        u_contact: req.body.u_contact
                    }).then((user) => {
                        user.password = ''
                        res.json(user);
                    }).catch((err) => {
                        res.status(406).send(`${err}`)
                    })
                }
            })
            break;
        default:
            res.status(500).send('No Actions')

    }

})

export default SettingAPI;