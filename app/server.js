import express from 'express'
import kx from './server/connection';
import render from './serverRender';

const app = express();
app.use('/assets', express.static('assets'));

app.use(render);

kx.on('query', data => console.log('data'));

const invoices = kx.from('invoices')
        .select('total', 'email', 'username')
        .innerJoin('users', 'users.id', 'invoices.user_id')
        .then(rows => {
            debugger;
            return rows;
        });

const users = kx.from('users')
        .select('total', 'email', 'username')
        .innerJoin('invoices', 'invoices.user_id', 'users.id')
        .then(rows => {
            debugger;
            return rows;
        });

app.listen(8080);