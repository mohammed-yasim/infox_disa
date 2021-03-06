import express from 'express';
import path from 'path'
import cors from 'cors';
import API_Router from './api';
import { demo_db } from './api/maria_db';
import Demo from './api/database/test';
import { Products } from './api/models';
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
app.post('/update_price',(req,res)=>{
    console.log(req.body)
    let data = req.body;
    Products.update(data, {
        where: { p_code: data.p_code }
    }).then(
        (product) => {
            res.status(200).json(product);
        }
    ).catch(
        (err) => {
            res.status(406).send(`${err}`);
        }
    );
})
app.get('/', (request, response) => {
    let ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    response.redirect(`/infox?ip=${encodeURI(ip)}`);
});
app.listen(3001), () => {
    console.log("API runing on Port 3001");
};

