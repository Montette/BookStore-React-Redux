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
        case types.LOAD_BOOKS_SUCCESS:
            return {
                ...state,
                books: [...state.books,...action.books]
            }
        case types.SET_BOOK:
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

            };
        case types.DELETE_BOOK:
            const deletedBookId = action.book.dataId;
            console.log('action received' + action.type + action.book);
            console.log(deletedBookId);
            const newBooksList = [...state.books].filter(book=> {
                return book.dataId !== deletedBookId;
            })
            return {
                ...state,
                books: newBooksList
            };
        case types.UPDATE_BOOK:
            // const { book, newBook } = action.book;
            console.log(action.payload);
            const updatedBook = action.payload.newBook;
            const updatedList = [...state.books].map(item => {
                if(item.dataId === updatedBook.dataId) {
                    item = {...item, ...updatedBook}
                }
                return item
            })
    
            return {
                ...state,
                book: action.payload.book,
                books: updatedList

            }

            

        default:
            
            return state
    }
}

export default adminPanelReducer;