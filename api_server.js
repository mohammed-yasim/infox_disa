"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use('/infox/', _express.default.static(_path.default.join(__dirname, '/infox/build')));
app.use('/api', _api.default);
app.get('/infox/*', (req, res) => {
  res.sendFile(_path.default.join(__dirname, '/infox/build/index.html'));
});
app.get('/', (request, response) => {
  response.send("Hello");
});
app.post('/login', (request, response) => {
  response.json({
    data: request.body
  });
});
app.listen(3001), () => {
  console.log("API runing on Port 3001");
};