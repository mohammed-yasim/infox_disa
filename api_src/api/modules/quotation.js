import express from 'express';
import { QuickQuotations } from '../models';
import { Middleware } from '../middleware';
const QuotationRouter = express.Router();
QuotationRouter.get('/', Middleware, (req, res) => {
    let parameters = { attributes: ['status', 'id'] }
    parameters['where'] = { deleted: 0 }
    if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
    }
    else {
        parameters.where['owner'] = req.user.u_id;
    }
    QuickQuotations.findAll(parameters)
        .then((quotations) => {
            res.json(quotations);
        }).catch(err => {
            res.status(406).send(`${err}`);
        })
})
QuotationRouter.get('/list/:type', Middleware, (req, res) => {
    let action = req.params.type
    let parameters = { attributes: { exclude: ['blob'] }, }
    parameters['where'] = {}
    parameters.where['status'] = action;
    if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
    }else{
        parameters.where['owner'] = req.user.u_id;

    }
    QuickQuotations.findAll(parameters).then((quotations) => {
        res.json(quotations);
    }).catch(err => {
        res.status(406).send(`${err}`);
    })
});
QuotationRouter.get('/quick/:id', Middleware, (req, res) => {
    QuickQuotations.findOne({
        where: {
            owner: req.user.u_id,
            //id: req.params.id
        },
    }).then((quotations) => {
        res.json(quotations);
    })
        .catch(err => {
            res.status(403).send(`${err}`)
        })
});
QuotationRouter.post('/quick/:id', Middleware, (req, res) => {
    let action = req.query.action
    switch (action) {
        case 'add':
            QuickQuotations.create({
                blob: JSON.stringify(req.body),
                owner: req.user.u_id,
                date: new Date(req.body.date),
                name: req.body.file_name,
                firm: req.body.firm,
                no: req.body.no,
                party: `${req.body.party_name} - ${req.body.party_address}`,
            }).then((quotation) => {
                res.json(quotation);
            })
                .catch(err => {
                    res.status(406).send(`${err}`)
                });
            break;
        case 'edit':
            QuickQuotations.update({
                blob: JSON.stringify(req.body),
                date: new Date(req.body.date),
                name: req.body.file_name,
                firm: req.body.firm,
                no: req.body.no,
                party: `${req.body.party_name} - ${req.body.party_address}`,
            }, {
                where: {
                    owner: req.user.u_id,
                    id: req.params.id
                }
            }).then((quotation) => {
                res.json(quotation);
            })
                .catch(err => {
                    res.status(403).send(`${err}`);
                });
            break;
        default:
            res.status(406).send('No Actions');
    }
})
export default QuotationRouter;