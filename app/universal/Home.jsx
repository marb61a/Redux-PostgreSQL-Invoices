import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import RGB from './RGB';
import CustomerList from './customers/List';
import InvoiceList from './invoices/List';
import CreateCustomer from './customers/Create';

export function Home({ authenticated }){
    if(!authenticated){
        return <Redirect to={{ pathname: '/login' }} />;
    }    
    
    return(
        <div>
        
        </div>    
    );
}

export default connect(
    state => ({
        authenticated: !!state.session.user
    })    
)(Home);