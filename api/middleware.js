"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminMiddleware = exports.Middleware = void 0;
exports.generateToken = generateToken;
exports.rootMiddleware = void 0;

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var infox_secret = "2CgRp_6PNpb";

function generateToken(data) {
  return jwt.sign(data, infox_secret, {
    expiresIn: '24h'
  });
}

var Middleware = (request, response, next) => {
  var token = request.headers.authorization;

  if (!token) {
    response.status(401).send("Authentication failed");
  } else {
    jwt.verify(token, infox_secret, (err, value) => {
      if (!err) {
        request.token = token;
        request.user = value;
        next();
      } else {
        response.status(401).send(err.name + '-' + err.message);
      }
    });
  }
};

exports.Middleware = Middleware;

var rootMiddleware = (request, response, next) => {
  var token = request.headers.authorization;

  if (!token) {
    response.status(401).send("Authentication failed");
  } else {
    jwt.verify(token, infox_secret, (err, value) => {
      if (!err) {
        request.token = token;
        request.user = value;

        if (value.u_type === 'root') {
          next();
        } else {
          response.status(403).send("Unauthorized");
        }
      } else {
        response.status(401).send(err.name + '-' + err.message);
      }
    });
  }
};

exports.rootMiddleware = rootMiddleware;

var adminMiddleware = (request, response, next) => {
  var token = request.headers.authorization;

  if (!token) {
    response.status(401).send("Authentication failed");
  } else {
    jwt.verify(token, infox_secret, (err, value) => {
      if (!err) {
        request.token = token;
        request.user = value;

        if (value.u_type === 'admin' || value.u_type === 'root') {
          next();
        } else {
          response.status(403).send("Unauthorized");
        }
      } else {
        response.status(401).send(err.name + '-' + err.message);
      }
    });
  }
};

exports.adminMiddleware = adminMiddleware;