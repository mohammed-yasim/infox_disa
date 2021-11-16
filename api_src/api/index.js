import express from "express";
import { infox_db } from "./maria_db";
import { generateToken, Middleware } from "./middleware";
import { Users } from "./models";
import SettingAPI from "./modules/settings";
import bcrypt from 'bcryptjs'
import CatalougueAPI from "./modules/catalogue";
const API_Router = express.Router();
API_Router.use('/settings', SettingAPI);
API_Router.use('/catalogue',CatalougueAPI);

//API_Router.use(jsonErrorHandler)
API_Router.get('/', (req, res) => {
    res.send("API")
})

API_Router.get('/sync', (req, res) => {
    infox_db.sync().then((data) => {
        res.send('Synced');
    }, (err) => {
        res.send(`${err}`);
    });
});
API_Router.get('/demo-user', (req, res) => {
    bcrypt.hash('yasim', 10, (error, hash) => {
        if (error) {
            res.status(500).send(`${error}`);
        }
        else {
            Users.create({
                username: 'yasim',
                password: hash,
                u_type: 'root',
                u_name: 'Mohammed Yasim',
                u_email: 'yasim@test.com',
                u_contact: '9746830098'
            })
                .then(user => {
                    res.json(user);
                }).catch((err) => {
                    res.status(401).json(err);
                })
        }
    });
})
API_Router.post('/login', (req, res) => {
    console.log(req.body);
    Users.findOne({ where: { username: req.body.username } }).then(
        (user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) {
                        response.status(406).send('invalid credentials');
                    } else if (match) {
                        let data = {
                            u_id: user.u_id,
                            u_type:user.u_type
                        }
                        res.json({
                            token: generateToken(data)
                        })
                    } else {
                        response.status(406).send('invalid credentials');
                    }
                })
            }
            else {
                response.status(406).send('inactive/invalid credentials/suspended');
            }
        }
    ).catch(
        (err) => {
            res.status(401).send(`${err}`);
        }
    )
});
API_Router.get('/sync_user', Middleware, (req, res) => {
    Users.findOne({ where: { u_id: req.user.u_id } }).then(
        (user) => {
            res.json(user)
        }
    ).catch(
        (err) => {
            res.status(401).json(err);

        })
});
export default API_Router;