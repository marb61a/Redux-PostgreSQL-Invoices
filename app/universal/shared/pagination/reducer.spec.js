import expect from 'expect';
import paginate, { initialState } from './reducer';
import actions from './actions';

const listId = 'customers';
const reducer = paginate(listId);
const { previous } = actions(listId);

describe('paginate()', () => {
    context('initially', () => {
        it('returns the initial state', () => {
            expect(reducer()).toEqual(initialState);
        });
    });
    
});