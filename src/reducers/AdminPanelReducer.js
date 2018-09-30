import initialState from './initialState';
import * as types from '../actions/actionsTypes';

// const initialState = {
//     book: {
//         name: '',
//         author: '',
//         description: '',
//         onStock: true,
//         image: ''
//     },
//     editMode: false,
//     removingBookId: ''
// }
const adminPanelReducer = (state=initialState, action) => {
    console.log('action received' + action.type + action.payload);
    switch(action.type) {
        case types.UPDATE_BOOK:
            const book = action.payload;
            return {...state, book};
        case types.GET_EDITED_BOOK:
            const editedBook = action.payload;
            return {
                ...state,
                book: {...editedBook},
                editMode: true,
                removingBookId: editedBook.id
            };
        case types.ADD_BOOK:
            const newBook = action.book;
            console.log('action received' + action.type + action.book);
            console.log(newBook)
            return {
                ...state,
                books: [...state.books, newBook]

            }
            

        default:
            
            return state
    }
}

export default adminPanelReducer;