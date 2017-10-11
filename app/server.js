import express from 'express'
import kx from './server/connection';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

import User from './server/models/User';
import render from './serverRender';

const app = express();
app.use(bodyParser.json());

function lookup(username = ''){
    return User.where({username}).fetch()
        .then(user => user && user.toJSON());
}

app.use('/assets', express.static('assets'));

app.use(render);

kx.on('query', data => console.log('data'));

const invoices = kx.from('invoices')
        .select('total', 'email', 'username')
        .innerJoin('users', 'users.id', 'invoices.user_id')
        .then(rows => {
            return rows;
        });

const users = kx.from('users')
        .select('total', 'email', 'username')
        .innerJoin('invoices', 'invoices.user_id', 'users.id')
        .then(rows => {
            return rows;
        });

const eagerUsers = User.fetchAll({
    withRelated: ['invoices']
}).then(relation => {
    debugger;
    return relation;
});

app.listen(8080);