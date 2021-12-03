"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _maria_db = require("../maria_db");

var _middleware = require("../middleware");

var _models = require("../models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CatalougueAPI = _express.default.Router();

CatalougueAPI.get('/', _middleware.adminMiddleware, (req, res) => {
  var totel = new Promise((resolve, reject) => {
    _models.Products.count({
      distinct: true
    }).then(count => {
      resolve(count);
    }).catch(err => {
      resolve(0);
    });
  });
  var verified = new Promise((resolve, reject) => {
    _models.Products.count({
      where: {
        verified: "VERIFIED"
      },
      distinct: true
    }).then(count => {
      resolve(count);
    }).catch(err => {
      resolve(0);
    });
  });
  var mrp = new Promise((resolve, reject) => {
    _models.Products.count({
      where: {
        p_price: 0
      },
      distinct: true
    }).then(count => {
      resolve(count);
    }).catch(err => {
      resolve(0);
    });
  });
  var image = new Promise((resolve, reject) => {
    _models.Products.count({
      where: {
        p_image: {
          [_maria_db.infox_op.not]: ''
        }
      },
      distinct: true
    }).then(count => {
      resolve(count);
    }).catch(err => {
      resolve(0);
    });
  });
  var noimage = new Promise((resolve, reject) => {
    _models.Products.count({
      where: {
        p_image: ''
      },
      distinct: true
    }).then(count => {
      resolve(count);
    }).catch(err => {
      resolve(0);
    });
  });
  var discontinued = new Promise((resolve, reject) => {
    _models.Products.count({
      where: {
        verified: 'discontinued'
      },
      distinct: true
    }).then(count => {
      resolve(count);
    }).catch(err => {
      resolve(0);
    });
  });
  Promise.all([totel, verified, mrp, image, noimage, discontinued]).then(data => {
    res.json({
      totel: data[0],
      verified: data[1],
      mrp: data[2],
      image: data[3],
      noimage: data[4],
      discontinued: data[5]
    });
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
CatalougueAPI.get('/categories', _middleware.adminMiddleware, (req, res) => {
  _models.Variables.findAll({
    attributes: ['var_i', 'var_n', 'var_v', 'var_t', 'var_c'],
    where: {
      var_t: ["MC", "LC", "SC", "UNIT"]
    }
  }).then(variable => {
    res.json(variable);
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
CatalougueAPI.post('/categories', _middleware.adminMiddleware, (req, res) => {
  var var_v = req.body.var_n.replace(/ /g, "_").toLowerCase();

  _models.Variables.create({
    var_v: var_v,
    var_n: req.body.var_n,
    var_t: req.body.var_t,
    var_c: req.body.var_c
  }).then(variable => {
    res.json(variable);
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
CatalougueAPI.get('/products', _middleware.adminMiddleware, (req, res) => {
  _models.Products.findOne({
    where: {
      p_id: req.query.id
    }
  }).then(product => {
    if (product) {
      res.json(product);
    } else {
      res.status(406).send("".concat(err));
    }
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
CatalougueAPI.get('/allproducts', _middleware.Middleware, (req, res) => {
  _models.Products.findAll().then(product => {
    if (product) {
      res.json(product);
    } else {
      res.status(406).send("".concat(err));
    }
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
CatalougueAPI.get('/list', _middleware.Middleware, (req, res) => {
  _models.Products.findAll({
    attributes: ['p_code', 'p_master', 'p_sub', 'p_group', 'p_image', 'p_name', 'p_reference']
  }).then(product => {
    if (product) {
      res.json(product);
    } else {
      res.status(406).send("".concat(err));
    }
  }).catch(err => {
    res.status(406).send("".concat(err));
  });
});
CatalougueAPI.post('/products', _middleware.adminMiddleware, (req, res) => {
  var action = req.query.action;

  switch (action) {
    case 'add':
      _models.Products.create(req.body).then(product => {
        res.json(product);
      }).catch(err => {
        res.status(406).send("".concat(err));
      });

      break;

    case 'edit':
      var data = req.body;

      _models.Products.update(data, {
        where: {
          p_id: data.p_id
        }
      }).then(product => {
        res.json(product);
      }).catch(err => {
        res.status(406).send("".concat(err));
      });

      break;

    default:
      res.status(406).send('No Actions');
  }
});
var _default = CatalougueAPI;
exports.default = _default;