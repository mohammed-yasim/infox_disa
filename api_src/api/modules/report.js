import express from "express";
import { ActivityStatus, Attendance, User, } from "../database/models";
import { infox_op } from "../maria_db";
import { adminMiddleware } from "../middleware";

const ReportAPI = express.Router();

ReportAPI.post('/attendance', adminMiddleware, (req, res) => {
    const users = new Promise((resolve, reject) => {
        User.findAll({
            attributes: { exclude: ['password'] },
            include: 'profile'
        }).then((data) => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    });
    const attendances = new Promise((resolve, reject) => {
        let PublishDate = new Date(req.body.from);
        let endDate = new Date(req.body.to);
        Attendance.findAll({
            where: {
                'date': { [infox_op.between]: [PublishDate, endDate] },
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
        }).catch((err) => {
            res.send(404)
        });
});
ReportAPI.post('/activity_status', adminMiddleware, (req, res) => {
    const users = new Promise((resolve, reject) => {
        User.findAll({
            attributes: { exclude: ['password'] },
            include: 'profile'
        }).then((data) => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    });

    const activity_status = new Promise((resolve, reject) => {
        let PublishDate = new Date(req.body.from);
        let endDate = new Date(req.body.to);
        endDate.setHours(23, 59, 0, 0);
        PublishDate.setHours(0, 0, 0, 0)
        ActivityStatus.findAll({
            where: {
                'updatedAt': { [infox_op.between]: [PublishDate, endDate] },
            }
        })
            .then((data) => {
                resolve(data);
            }).catch(err => {
                reject(err);
            })
    });
    Promise.all([users, activity_status])
        .then((values) => {
            let data = {
                users: values[0],
                activity_status: values[1]
            }
            res.status(200).json(data);
        }).catch((err) => {
            res.send(404)
        });
});
export default ReportAPI;