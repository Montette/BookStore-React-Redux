export const UPDATE_BOOK = 'UPDATE_BOOK';
export const GET_EDITED_BOOK = 'GET_EDITED_BOOK';

export const updateBookAction = (book) => {
    return {
        type:UPDATE_BOOK, 
        payload: book
    }
}

export const getEditedBookAction = (book) => {
    return {
        type: GET_EDITED_BOOK,
        payload: book
    }
}