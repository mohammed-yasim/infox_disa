import express from 'express';
import { adminMiddleware, Middleware } from '../middleware';
import { Products, Variables } from '../models';
const CatalougueAPI = express.Router()

CatalougueAPI.get('/categories',adminMiddleware, (req, res) => {
    Variables.findAll({
        attributes: ['var_i', 'var_n', 'var_v', 'var_t', 'var_c'],
        where: {
            var_t: ["MC", "LC", "SC","UNIT"]
        }
    }).then(
        (variable) => {
            res.json(variable);
        }
    ).catch(
        (err) => {
            res.status(406).send(`${err}`);
        }
    );
});
CatalougueAPI.post('/categories',adminMiddleware, (req, res) => {
    let var_v = req.body.var_n.replace(/ /g, "_").toLowerCase();
    Variables.create({
        var_v: var_v,
        var_n: req.body.var_n,
        var_t: req.body.var_t,
        var_c: req.body.var_c
    }).then(
        (variable) => {
            res.json(variable);
        }
    ).catch(
        (err) => {
            res.status(406).send(`${err}`);
        }
    );
});
CatalougueAPI.get('/products',adminMiddleware, (req, res) => {
    Products.findOne({ where: { p_id: req.query.id } }).then(
        (product) => {
            if (product) {
                res.json(product);
            } else {
                res.status(406).send(`${err}`);
            }
        }
    ).catch(
        (err) => {
            res.status(406).send(`${err}`);
        }
    );
});
CatalougueAPI.get('/allproducts',Middleware, (req, res) => {
    Products.findAll().then(
        (product) => {
            if (product) {
                res.json(product);
            } else {
                res.status(406).send(`${err}`);
            }
        }
    ).catch(
        (err) => {
            res.status(406).send(`${err}`);
        }
    );
});
CatalougueAPI.post('/products',adminMiddleware, (req, res) => {
    let action = req.query.action
    switch (action) {
        case 'add':
            Products.create(req.body).then(
                (product) => {
                    res.json(product);
                }
            ).catch(
                (err) => {
                    res.status(406).send(`${err}`);
                }
            );
            break;
        case 'edit':
            let data = req.body;
            Products.update(data, {
                where: { p_id: data.p_id }
            }).then(
                (product) => {
                    res.json(product);
                }
            ).catch(
                (err) => {
                    res.status(406).send(`${err}`);
                }
            );
            break;
        default:
            res.status(406).send('No Actions');
    }
});
export default CatalougueAPI;