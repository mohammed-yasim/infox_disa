import express, { response } from "express";
import axios from "axios";
import { infox_db } from "./maria_db";
import { generateToken, Middleware } from "./middleware";
import { Clock, Users } from "./models";
import SettingAPI from "./modules/settings";
import bcrypt from 'bcryptjs'
import CatalougueAPI from "./modules/catalogue";
import QuotationRouter from "./modules/quotation";
import { Attendance, Profile, Schedule, User } from "./database/models";
const API_Router = express.Router();
API_Router.use('/settings', SettingAPI);
API_Router.use('/catalogue', CatalougueAPI);
API_Router.use('/quotation', QuotationRouter);

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
                    res.status(200).json(user);
                }).catch((err) => {
                    res.status(401).json(err);
                })
        }
    });
})
API_Router.post('/login', (req, res) => {

    User.findOne({ where: { username: req.body.username, active: 1, suspended: 0 } }).then(
        (user) => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (error, match) => {
                    if (error) {
                        response.status(406).send('invalid credentials');
                    } else if (match) {
                        let data = {
                            u_id: user.u_id,
                            u_type: user.u_type,
                            u_name: user.u_name
                        }
                        res.status(200).json({
                            token: generateToken(data)
                        })
                    } else {
                        res.status(406).send('invalid credentials');
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
    User.findOne({
        attributes: ['u_id', 'u_type'],
        where: { u_id: req.user.u_id },
        include: { model: Profile, as: 'profile' }
    }).then(
        (user) => {
            /*
            let data = {
                u_id : user.u_id,
                u_type : user.u_type,
                profile:{u_name:"Root"}
            }
            res.status(200).json(data)
            */
            res.status(200).json(user)
        }
    ).catch(
        (err) => {
            res.status(401).json(err);

        })
});
let Scheduler = (request, response, next) => {
    User.findOne({ attributes: ['schedule_'], where: { u_id: request.user.u_id } }).then((user) => {
        Schedule.findOne({
            attributes: ['clock_in', 'clock_out'],
            where: { id: user.schedule_ }
        }).then((schedule) => {
            request.user.schedule = schedule;
            next();
        }).
            catch(err => {
                console.log(err);
                next()
            })
    }).
        catch(err => {
            console.log(err);
            next()
        })
}

API_Router.get('/clock_', Middleware, Scheduler, (req, res) => {
    Attendance.findOne({
        attributes: ['id', 'clock_out_server', 'clock_in_position', 'clock_in_server'],
        where: {
            u_id: req.user.u_id,
            date: new Date()
        }
    }).then(
        (user) => {
            if (user) {
                //if (user.clock_out === null) {
                if (user.clock_out_server === null) {
                    res.status(200).json({
                        clock_status: 2,
                        color: 'red',
                        text: `You are in from ,${user.clock_in_position} at ${user.clock_in_server}`

                    });
                } else {
                    res.status(200).json({
                        clock_status: 3,
                        color: '#00bfff',
                        text: `Already done for the day`
                    });
                }
            } else {
                res.status(200).json({
                    clock_status: 1,
                    color: '#00bfff',
                    text: 'Welcome Login'
                });
            }
        });

});
API_Router.post('/clock_', Middleware, Scheduler, (req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    let timecal = (1000 * 60);
    var a = new Date();
    var b = new Date();
    var av = `${req.user.schedule.clock_in}`.split(':');
    var bv = `${req.user.schedule.clock_out}`.split(':');
    a.setHours(av[0], av[1], av[2], 0)
    b.setHours(bv[0], bv[1], bv[2], 0)
    axios.get(`https://us1.locationiq.com/v1/reverse.php?key=78a0e5fd31043f&lat=${req.body.latitude}&lon=${req.body.longitude}&format=json`)
        .then((response) => {
            Attendance.findOne({
                where: {
                    u_id: req.user.u_id,
                    date: new Date()
                }
            })
                .then((user) => {
                    if (user) {
                        var c = new Date();
                        var cv = `${user.clock_in_server}`.split(':');
                        c.setHours(cv[0], cv[1], cv[2], 0)
                        let hours = ((new Date() - c) / timecal).toFixed(2);
                        if (user.clock_out_server === null) {
                            user.clock_out_server = new Date();
                            user.clock_out_local = new Date(req.body.clock);
                            user.clock_out_lat = req.body.latitude;
                            user.clock_out_lng = req.body.longitude;
                            user.clock_out_position = response.data.display_name;
                            user.clock_out_status = ((new Date() - b) / timecal).toFixed(2);
                            user.clock_out_hours = hours;
                            user.clock_out_ip = ip;
                            user.clock_out_agent = req.body.agent;
                            user.save();
                            res.status(200).json({
                                clock_status: 3,
                                color: '#00bfff',
                                text: `You are Out from ,${user.clock_out_position} at ${user.clock_out_server}`
                            });
                        } else {
                            res.status(200).json({
                                clock_status: 3,
                                color: '#00bfff',
                                text: `Already done for the day`
                            });
                        }
                    } else {
                        Attendance.create({
                            u_id: req.user.u_id,
                            date: new Date(),
                            clock_in_server: new Date(),
                            clock_in_local: new Date(req.body.clock),
                            clock_in_lat: req.body.latitude,
                            clock_in_lng: req.body.longitude,
                            clock_in_position: response.data.display_name,
                            clock_in_status: ((new Date() - a) / timecal).toFixed(2),
                            clock_in_ip: ip,
                            clock_in_agent: req.body.agent
                        }).then((user) => {
                            res.status(200).json({
                                clock_status: 2,
                                color: 'red',
                                text: `You are in from ${user.clock_in_position} at ${user.clock_in_server}`
                            });
                        }).catch(
                            (err) => {
                                res.status(404).json(err);
                                console.log(2, err)
                            })
                    }
                }).catch(
                    (err) => {
                        res.status(404).json(err);
                        console.log(1, err)
                    })
        })
        .catch(
            err => { console.log(0, err) }
        );
});
API_Router.get('/map', (req, res) => {
    const users = new Promise((resolve, reject) => {
        User.findAll({
            attributes: { exclude: ['password'] },
            where: { active: 1, suspended: 0 },
            include: 'profile'
        }).then((data) => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    });
    const attendances = new Promise((resolve, reject) => {
        Attendance.findAll({
            where: {
                date: new Date(),
            }
        })
            .then((data) => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
    });
    Promise.all([users, attendances])
        .then((values) => {
            let data = {
                users: values[0],
                attendances: values[1]
            }
            res.status(200).json(data);
        });
})

export default API_Router;