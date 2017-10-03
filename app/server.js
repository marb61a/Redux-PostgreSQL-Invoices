import express from 'express';
import template from './template';

const app = express();

function renderClient(req, res){
    res.send(template);
    
}

app.use(renderClient);

app.listen(8080);