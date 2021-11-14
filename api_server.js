"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use('/infox/', _express.default.static(__dirname + '/infox/build'));
app.get('/infox/*', (req, res) => {
  res.sendFile(__dirname + '/infox/build/index.html');
});
app.get('/', (request, response) => {
  response.send("Hello");
});
app.post('/login', (request, response) => {
  response.json({
    data: request.body
  });
});
app.listen(3001);