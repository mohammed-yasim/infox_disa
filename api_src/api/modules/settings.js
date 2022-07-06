import express from "express";
import bcrypt from 'bcryptjs';
import { Designation, Location, Profile, Schedule, User } from "../database/models";
import { rootMiddleware } from "../middleware";
import { infox_op } from "../maria_db";
const SettingAPI = express.Router();
SettingAPI.get('/', rootMiddleware, async (req, res) => {
    let json = { locations: 0, designations: 0, schedules: 0, users: 0 }
    let location = Location.count();
    let designations = Designation.count();
    let schedules = Schedule.count();
    let users = User.count();
    Promise.all([location, designations, schedules, users])
        .then((data) => {
            json['locations'] = data[0]
            json['designations'] = data[1]
            json['schedules'] = data[2]
            json['users'] = data[3]
            res.status(200).json(json);
        }).catch((err) => {
            res.status(406).send(`${err}`)
        })
});
SettingAPI.get('/config/:type', rootMiddleware, (req, res) => {
    let type = req.params.type
    switch (type) {
        case 'locations':
            Location.findAll({ include: { model: User, as: 'users', attributes: ['username'], include: { model: Profile, as: 'profile', attributes: ['u_name'], } } }).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'designations':
            Designation.findAll({ include: { model: User, as: 'users', attributes: ['username'], include: { model: Profile, as: 'profile', attributes: ['u_name'], } } }).then(designations => res.status(200).json(designations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'schedules':
            Schedule.findAll({ include: { model: User, as: 'users', attributes: ['username'], include: { model: Profile, as: 'profile', attributes: ['u_name'], } } }).then(schedules => res.status(200).json(schedules)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'users':
            let json = { users: [], locations: [], schedules: [], designations: [] }
            //data for forms
            let location = Location.findAll();
            let designations = Designation.findAll();
            let schedules = Schedule.findAll();
            /// master
            let users = User.findAll({ attributes: { exclude: ['password'] }, where: { suspended: 0, u_id: { [infox_op.not]: req.user.u_id } }, include: { model: Profile, as: 'profile' } })
            Promise.all([location, designations, schedules, users])
                .then((data) => {
                    json['locations'] = data[0]
                    json['designations'] = data[1]
                    json['schedules'] = data[2]
                    json['users'] = data[3]
                    res.status(200).json(json);
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
            Location.create(req.body).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'designations_add':
            Designation.create(req.body).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send(`${err}`));
            break;
        case 'schedules_add':
            Schedule.create(req.body).then(locations => res.status(200).json(locations)).catch(err => res.status(406).send(`${err}`));
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
                        User.create({
                            u_type: req.body.u_type,
                            username: req.body.username,
                            password: hash,
                            profile_: profile.id,
                            designation_: req.body.designation_,
                            location_: req.body.location_,
                            schedule_: req.body.schedule_,
                        }).then((user) => {
                            user.password = ''
                            res.status(200).json(user);
                        }).catch((err) => {
                            res.status(406).send(`B ${err}`)
                        })
                    }).catch((err) => {
                        res.status(406).send(`A ${err}`)
                    })
                }
            })
            break;
        case 'users_deactivate':
            User.update({ active: 0 }, {
                attributes: ['username'], where: {
                    u_id: req.body.u_id,
                    active: 1
                }
            }).then((user) => {
                res.status(200).json(user);
            })
                .catch((err) => {
                    res.status(406).send(`user_deactivate ${err}`)
                })
            break;
        case 'users_activate':
            User.update({ active: 1 }, {
                attributes: ['username'], where: {
                    u_id: req.body.u_id,
                    active: 0
                }
            }).then((user) => {
                res.status(200).json(user);
            })
                .catch((err) => {
                    res.status(406).send(`user_deactivate ${err}`)
                })
            break;
        default:
            res.status(406).send(`Type Required`);
    }
});
export default SettingAPI;