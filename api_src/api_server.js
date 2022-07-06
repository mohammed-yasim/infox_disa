import express from 'express';
import path from 'path'
import cors from 'cors';
import API_Router from './api';
import { demo_db } from './api/maria_db';
import Demo from './api/database/test';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/infox/', express.static(path.join(__dirname, '/infox/build')));
app.use('/_api', API_Router);
app.use('/demo', Demo);
app.get('/infox/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/infox/build/index.html'));
});
app.get('/sync', (req, res) => {
    demo_db.sync().then((data) => {
        res.send(`${data}`);
    }, (err) => {
        res.send(`${err}`);
    });
});
app.get('/', (request, response) => {
    let ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    response.redirect(`/infox?ip=${encodeURI(ip)}`);
});
app.listen(3001), () => {
    console.log("API runing on Port 3001");
};
