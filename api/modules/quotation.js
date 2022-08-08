"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _models = require("../models");

var _middleware = require("../middleware");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var QuotationRouter = _express.default.Router();

QuotationRouter.get('/', _middleware.Middleware, (req, res) => {
  var parameters = {
    attributes: ['status', 'id']
  };
  parameters['where'] = {
    deleted: 0
  };

  if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
    parameters.where['status'] = ['draft', 'request', 'ready', 'submitted', 'approved', 'completed', 'disposed'];
  } else {
    parameters.where['owner'] = req.user.u_id;
    parameters.where['status'] = ['draft', 'ready', 'submitted', 'approved'];
  }

  _models.QuickQuotations.findAll(parameters).then(quotations => {
    res.status(200).json(quotations);
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
QuotationRouter.get('/list/:type', _middleware.Middleware, (req, res) => {
  var action = req.params.type;
  var parameters = {
    attributes: {
      exclude: ['blob']
    },
    where: {}
  };

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

  _models.QuickQuotations.findAll(parameters).then(quotations => {
    res.status(200).json(quotations);
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
QuotationRouter.get('/quick/:id', _middleware.Middleware, (req, res) => {
  var where = {
    owner: req.user.u_id,
    id: req.params.id
  };

  if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
    where = {
      id: req.params.id
    };
  }

  _models.QuickQuotations.findOne({
    where: where
  }).then(quotations => {
    res.status(200).json(quotations);
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
        party: "".concat(req.body.party_name, " - ").concat(req.body.party_address),
        permission: 1
      }).then(quotation => {
        res.status(200).json(quotation);
      }).catch(err => {
        res.status(406).send("".concat(err));
      });

      break;

    case 'edit':
      var where = {
        owner: req.user.u_id,
        id: req.params.id
      };

      if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
        where = {
          id: req.params.id
        };
      }

      _models.QuickQuotations.update({
        blob: JSON.stringify(req.body),
        date: new Date(req.body.date),
        name: req.body.file_name,
        firm: req.body.firm,
        party: "".concat(req.body.party_name, " - ").concat(req.body.party_address),
        permission: 1
      }, {
        where: where
      }).then(quotation => {
        res.status(200).json(quotation);
      }).catch(err => {
        res.status(403).send("".concat(err));
      });

      break;

    default:
      res.status(406).send('No Actions');
  }
});
QuotationRouter.post('/status/:id/:status', _middleware.Middleware, (req, res) => {
  var status = req.params.status;
  var id = req.params.id;
  var data = {};

  if (req.user.u_type === 'admin' || req.user.u_type === 'root') {
    switch (status) {
      case 'apply':
        data = {
          status: 'request',
          permission: 1
        };
        break;

      case 'accept':
        data = {
          status: 'ready',
          permission: 1,
          no: req.body.argv
        };
        break;

      case 'reject':
        data = {
          status: 'draft',
          permission: 0
        };
        break;

      case 'submit':
        data = {
          status: 'submitted',
          permission: 1
        };
        break;

      default:
        res.status(406).send('No Actions').end();
    }

    _models.QuickQuotations.update(data, {
      where: {
        id: id
      }
    }).then(quotation => {
      res.status(200).json(quotation);
    }).catch(err => {
      res.status(403).send("".concat(err));
    });
  } else {
    switch (status) {
      case 'apply':
        data = {
          status: 'request',
          permission: 1
        };
        break;

      case 'submit':
        data = {
          status: 'submitted',
          permission: 1
        };
        break;

      default:
        res.status(406).send('No Actions').end();
    }

    _models.QuickQuotations.update(data, {
      where: {
        id: id,
        owner: req.user.u_id
      }
    }).then(quotation => {
      res.status(200).json(quotation);
    }).catch(err => {
      res.status(403).send("".concat(err));
    });
  }
});
QuotationRouter.get('/preview/:id', _middleware.Middleware, (req, res) => {
  _models.QuickQuotations.findOne({
    where: {
      id: req.params.id
    }
  }).then(quotations => {
    res.status(200).json(quotations);
  }).catch(err => {
    res.status(403).send("".concat(err));
  });
});
QuotationRouter.get('/pcode/:id', _middleware.Middleware, (req, res) => {
  _models.Products.findOne({
    where: {
      p_code: req.params.id
    }
  }).then(product => {
    res.status(200).json(product);
  }).catch(err => {
    res.status(403).send("".concat(err));
  });
});
var _default = QuotationRouter;
exports.default = _default;