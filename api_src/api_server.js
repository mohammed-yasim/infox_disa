import express from 'express';
import path from 'path'
import cors from 'cors';
import API_Router from './api';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/infox/', express.static(path.join(__dirname, '/infox/build')));
app.use('/_api', API_Router);
app.get('/infox/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/infox/build/index.html'));
});
app.get('/', (request, response) => {
    response.redirect(`/infox?ip=${encodeURI(request.socket.remoteAddress)}`)
});
app.listen(3001), () => {
    console.log("API runing on Port 3001");
};