import booksApi from '../API/api'
import * as types from './actionsTypes';

// export const UPDATE_BOOK = 'UPDATE_BOOK';
// export const GET_EDITED_BOOK = 'GET_EDITED_BOOK';
// export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';

export const updateBookAction = (book) => {
    return {
        type: types.UPDATE_BOOK, 
        payload: book
    }
}

export const getEditedBookAction = (book) => {
    return {
        type: types.GET_EDITED_BOOK,
        payload: book
    }
}

export const loadBooksSuccess = (books)=> {
    return {type: types.LOAD_BOOKS_SUCCESS, books}
}

export const loadBooks = () => {
    return function(dispatch){
        return booksApi.getAllBooks()
            .then(books=>{
                dispatch(loadBooksSuccess(books))
            })
            .catch(error => {
                throw(error)
            })
    }
}