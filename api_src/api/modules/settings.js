import express from "express";
import bcrypt from 'bcryptjs';
import { Designations, Location, Profile, Schedules, Users } from "../database/models";
import { rootMiddleware } from "../middleware";
import { infox_op } from "../maria_db";
const SettingAPI = express.Router();
SettingAPI.get('/', rootMiddleware, async (req, res) => {
    let json = { locations: 0, designations: 0, schedules: 0, users: 0 }
    let location = Location.count();
    let designations = Designations.count();
    let schedules = Schedules.count();
    let users = Users.count();
    Promise.all([location, designations, schedules, users])
        .then((data) => {
            json['locations'] = data[0]
            json['designations'] = data[1]
            json['schedules'] = data[2]
            json['users'] = data[3]
            res.json(json);
        }).catch((err) => {
            res.status(406).send(`${err}`)
        })
});
SettingAPI.get('/config/:type', rootMiddleware, (req, res) => {
    let type = req.params.type
    switch (type) {
        case 'locations':
            Location.findAll({ include: { model: Users, as: 'users', attributes: ['username'], include: { model: Profile, as: 'profile', attributes: ['u_name'], } } }).then(locations => res.json(locations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'designations':
            Designations.findAll({ include: { model: Users, as: 'users', attributes: ['username'], include: { model: Profile, as: 'profile', attributes: ['u_name'], } } }).then(designations => res.json(designations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'schedules':
            Schedules.findAll({ include: { model: Users, as: 'users', attributes: ['username'], include: { model: Profile, as: 'profile', attributes: ['u_name'], } } }).then(schedules => res.json(schedules)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'users':
            let json = { users: [], locations: [], schedules: [], designations: [] }
            let location = Location.findAll();
            let designations = Designations.findAll();
            let schedules = Schedules.findAll();
            let users = Users.findAll({ attributes: { exclude: ['password'] }, where: { suspended: 0, u_id: { [infox_op.not]: req.user.u_id } }, include: { model: Profile, as: 'profile' } })
            Promise.all([location, designations, schedules, users])
                .then((data) => {
                    json['locations'] = data[0]
                    json['designations'] = data[1]
                    json['schedules'] = data[2]
                    json['users'] = data[3]
                    res.json(json);
                }).catch((err) => {
                    res.status(406).send(`${err}`)
                })
            break;
        default:
            res.status(406).send(`Type Required`);
    }
});
SettingAPI.post('/config/:type/:action', rootMiddleware, (req, res) => {
    let type = `${req.params.type}_${req.params.action}`;
    switch (type) {
        case 'locations_add':
            Location.create(req.body).then(locations => res.json(locations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'designations_add':
            Designations.create(req.body).then(locations => res.json(locations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'schedules_add':
            Schedules.create(req.body).then(locations => res.json(locations)).catch(err => res.status(406).send(`${err}`));
            break;
            case 'users_add':
                bcrypt.hash(req.body.password, 10, (error, hash) => {
                    if (error) {
                        res.status(500).send(`? ${error}`);
                    }
                    else {
                        Profile.create({
                            u_name: req.body.u_name,
                            u_email: req.body.u_email,
                            u_contact: req.body.u_contact
                        }).then((profile) => {
                            Users.create({
                                u_type: req.body.u_type,
                                username: req.body.username,
                                password: hash,
                                profile_: profile.id,
                                designation_: req.body.designation_,
                                location_: req.body.location_,
                                schedule_: req.body.schedule_,
                            }).then((user) => {
                                user.password = ''
                                res.json(user);
                            }).catch((err) => {
                                res.status(406).send(`B ${err}`)
                            })
                        }).catch((err) => {
                            res.status(406).send(`A ${err}`)
                        })
                    }
                })
                break;
        default:
            res.status(406).send(`Type Required`);
    }
});
export default SettingAPI;