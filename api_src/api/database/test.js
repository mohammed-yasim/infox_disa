import express from 'express';
import { Schedules, Users } from './models';
const Demo = express.Router();
Demo.get('/',(req,res)=>{
    Users.findAll({})
    .then((users)=>{
        res.json(users);
    })
    .catch((err)=>{
        res.json(err)
    })
})
Demo.get('/',(req,res)=>{
    Schedules.create({
        
    })
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json(err)
    })
})
export default Demo