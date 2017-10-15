import axios from 'axios'
import createStore from './createStore'
import { clearUser } from './session/actions'

export const adapter = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
})

adapter.interceptors.response.use(undefined, error => {
    if(error.response.status === 403){
        const store = createStore();
        store.dispatch(clearUser);
        window.localStorage.removeItem('user');
    }
    
    return Promise.reject(error);
})

export default {
    session: {
        
    },
    customers: {
        
    }, 
    invoices: {
        
    }
};