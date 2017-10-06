import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import RGB from './universal/RGB';
import template from './template';
import  { updateColor } from './universal/actions';

export default function render(req, res){
    const store = createStore(reducer);
    store.dispatch(updateColor);
    
    const html = renderToString(
        <Provider>
            <RGB />
        </Provider>);
        
    res.send(template(html));
}