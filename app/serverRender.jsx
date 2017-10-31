import React from 'react';
import { renderToString } from 'react-dom/server';
import createStore from './universal/createStore';
import { Provider } from 'react-redux';
import { StaticRouter, matchPath } from 'react-router';
import template from './template';
import App from './universal/App';
import { setUser } from './universal/session/actions';

import actions from './universal/shared/pagination/actions';
import * as customersService from './server/services/customers';
import * as invoicesService from './server/services/invoices';

function preloadedRoutes(store, req){
    const loadPage = (listId, service) => {
        const { resultsUpdated, setPage } = actions(listId);    
    };    
}

export default function render(req, res){
    const store = createStore(reducer);
    store.dispatch(updateColor);
    
    const html = renderToString(
        <Provider>
            <RGB />
        </Provider>);
        
    res.send(template(html));
}