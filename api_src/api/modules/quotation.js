import express from 'express';
import { QuickQuotations } from '../models';
import { Middleware } from '../middleware';
const QuotationRouter = express.Router();

QuotationRouter.get('/', Middleware, (req, res) => {
    let parameters = { attributes: ['status', 'id'] }
    parameters['where'] = { deleted: 0 }
    if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
        parameters.where['status'] = ['draft', 'request', 'ready', 'submitted', 'approved', 'completed', 'disposed'];
    }
    else {
        parameters.where['owner'] = req.user.u_id;
        parameters.where['status'] = ['draft', 'ready', 'submitted', 'approved']
    }
    QuickQuotations.findAll(parameters)
        .then((quotations) => {
            res.status(200).json(quotations);
        }).catch(err => {
            res.status(406).send(`${err}`);
        })
})
QuotationRouter.get('/list/:type', Middleware, (req, res) => {
    let action = req.params.type
    let parameters = { attributes: { exclude: ['blob'] }, where: {} }
    if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
        parameters.where['status'] = action;
    } else {
        parameters.where['status'] = action;
        if (action === 'draft') {
            parameters.where['owner'] = req.user.u_id;
        } else {
            parameters.where['owner'] = req.user.u_id;
            parameters.where['permission'] = 1;
        }
    }
    QuickQuotations.findAll(parameters).then((quotations) => {
        res.status(200).json(quotations);
    }).catch(err => {
        res.status(406).send(`${err}`);
    })
});
QuotationRouter.get('/quick/:id', Middleware, (req, res) => {
    QuickQuotations.findOne({
        where: {
            //owner: req.user.u_id,
            id: req.params.id
        },
    }).then((quotations) => {
        res.status(200).json(quotations);
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
                party: `${req.body.party_name} - ${req.body.party_address}`,
                permission: 1
            }).then((quotation) => {
                res.status(200).json(quotation);
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
                party: `${req.body.party_name} - ${req.body.party_address}`,
                permission: 1
            }, {
                where: {
                    owner: req.user.u_id,
                    id: req.params.id
                }
            }).then((quotation) => {
                res.status(200).json(quotation);
            })
                .catch(err => {
                    res.status(403).send(`${err}`);
                });
            break;
        default:
            res.status(406).send('No Actions');
    }
});
QuotationRouter.post('/status/:id/:status', Middleware, (req, res) => {
    let status = req.params.status
    let id = req.params.id
    let data = {}
    if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
        switch (status) {
            case 'apply':
                data = { status: 'request', permission: 1 }
                break;
            case 'accept':
                data = {
                    status: 'ready',
                    permission: 1,
                    no: req.body.argv
                }
                break;
            case 'reject':
                data = {
                    status: 'draft',
                    permission: 0
                }
                break;
            case 'submit':
                data = {
                    status: 'submitted',
                    permission: 1
                }
                break;
            default:
                res.status(406).send('No Actions').end();
        }
        QuickQuotations.update(data, {
            where: { id: id, }
        }).then((quotation) => {
            res.status(200).json(quotation);
        })
            .catch(err => {
                res.status(403).send(`${err}`);
            });
    } else {
        switch (status) {
            case 'apply':
                data = { status: 'request', permission: 1 }
                break;
            case 'submit':
                data = {
                    status: 'submitted',
                    permission: 1
                }
                break;
            default:
                res.status(406).send('No Actions').end();
        }
        QuickQuotations.update(data, {
            where: { id: id, owner: req.user.u_id }
        }).then((quotation) => {
            res.status(200).json(quotation);
        })
            .catch(err => {
                res.status(403).send(`${err}`);
            });
    }
});
QuotationRouter.get('/preview/:id', Middleware, (req, res) => {
    QuickQuotations.findOne({
        where: {
            id: req.params.id
        },
    }).then((quotations) => {
        res.status(200).json(quotations);
    })
        .catch(err => {
            res.status(403).send(`${err}`)
        })
});

export default QuotationRouter;