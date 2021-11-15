import express from 'express';
import cors from 'cors';
import API_Router from './api';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/infox/', express.static(__dirname + '/infox/build'));
app.use('/api', API_Router)
app.get('/infox/*', (req, res) => {
    res.sendFile(__dirname + '/infox/build/index.html');
});
app.get('/', (request, response) => {
    response.send("Hello");
});

app.post('/login', (request, response) => {
    response.json({
        data: request.body
    })
});


app.listen(3001), () => {
    console.log("API runing on Port 3001");
};