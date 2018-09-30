import initialState from './initialState';
import * as types from '../actions/actionsTypes';

const dataReducer = (state=initialState.books, action) => {
    console.log('action received' + action.type + action.payload);
    switch(action.type) {
        case types.LOAD_BOOKS_SUCCESS:
            return action.books
           
        default:
            
            return state
    }
}

export default dataReducer;