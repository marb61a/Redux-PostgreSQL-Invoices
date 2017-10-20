import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

export class Login extends Component{
    state = {
        username: '',
        password: '',
        invalid: false,
        success: false
    }
    
    update = field => e => this.setState({ [field]: e.target.value });
    
    onSubmit = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password)
            .then(() => {
                this.setState({ success: true });
            })
            .catch(err => {
                if(err.response.status === 422){
                    this.setState({ invalid: true });
                } else {
                    throw err;
                }
            });
    }
    
    render(){
        
    }
} 

export default connect(undefined, {
    login: actions.login
})(Login);