import express from 'express';
import { Schedules, Users } from './models';
const Demo = express.Router();
Demo.get('/',(req,res)=>{
    Users.findAll({})
    .then((users)=>{
        res.status(200).json(users);
    })
    .catch((err)=>{
        res.status(200).json(err)
    })
})
Demo.get('/',(req,res)=>{
    Schedules.create({
        
    })
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(200).json(err)
    })
})
export default Demo