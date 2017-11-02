import React from 'react';
import * as actions from './actions';
import { tabulate } from '../shared/pagination';

export function Table({ results }){
    return(
        <table>
        
        </table>  
    );
}

export default tabulate('customers', actions.list)(Table);