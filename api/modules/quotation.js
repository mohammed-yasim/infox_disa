"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _models = require("../models");

var _middleware = require("../middleware");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuotationRouter = _express.default.Router();

QuotationRouter.get('/', _middleware.Middleware, (req, res) => {
  var parameters = {
    attributes: ['status', 'id']
  };
  parameters['where'] = {
    deleted: 0
  };

  if (req.user.u_type === 'admin' || req.user.u_type === 'root') {} else {
    parameters.where['owner'] = req.user.u_id;
  }

  _models.QuickQuotations.findAll(parameters).then(quotations => {
    res.json(quotations);
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
QuotationRouter.get('/list/:type', _middleware.Middleware, (req, res) => {
  var action = req.params.type;
  var parameters = {
    attributes: {
      exclude: ['blob']
    }
  };
  parameters['where'] = {};
  parameters.where['status'] = action;

  if (req.user.u_type === 'admin' || req.user.u_type === 'root') {} else {
    parameters.where['owner'] = req.user.u_id;
  }

  _models.QuickQuotations.findAll(parameters).then(quotations => {
    res.json(quotations);
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
QuotationRouter.get('/quick/:id', _middleware.Middleware, (req, res) => {
  _models.QuickQuotations.findOne({
    where: {
      owner: req.user.u_id //id: req.params.id

    }
  }).then(quotations => {
    res.json(quotations);
  }).catch(err => {
    res.status(403).send("".concat(err));
  });
});
QuotationRouter.post('/quick/:id', _middleware.Middleware, (req, res) => {
  var action = req.query.action;

  switch (action) {
    case 'add':
      _models.QuickQuotations.create({
        blob: JSON.stringify(req.body),
        owner: req.user.u_id,
        date: new Date(req.body.date),
        name: req.body.file_name,
        firm: req.body.firm,
        no: req.body.no,
        party: "".concat(req.body.party_name, " - ").concat(req.body.party_address)
      }).then(quotation => {
        res.json(quotation);
      }).catch(err => {
        res.status(406).send("".concat(err));
      });

      break;

    case 'edit':
      _models.QuickQuotations.update({
        blob: JSON.stringify(req.body),
        date: new Date(req.body.date),
        name: req.body.file_name,
        firm: req.body.firm,
        no: req.body.no,
        party: "".concat(req.body.party_name, " - ").concat(req.body.party_address)
      }, {
        where: {
          owner: req.user.u_id,
          id: req.params.id
        }
      }).then(quotation => {
        res.json(quotation);
      }).catch(err => {
        res.status(403).send("".concat(err));
      });

      break;

    default:
      res.status(406).send('No Actions');
  }
});
var _default = QuotationRouter;
exports.default = _default;