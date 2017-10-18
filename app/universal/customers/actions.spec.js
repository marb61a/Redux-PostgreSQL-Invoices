import expect from 'expect';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { SubmissionError } from 'redux-form';
import MockAdapter from 'axios-mock-adapter';
import { adapter } from '../api';
import * as actions from './actions';

const mockStore = configureStore([thunk]);
const mockAdapter = new MockAdapter(adapter);

describe('customer actions', () => {
    
})