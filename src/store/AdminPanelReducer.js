
const initialState = {
    book: {
        name: '',
        author: '',
        description: '',
        onStock: true,
        image: ''
    },
    editMode: false,
    removingBookId: ''
}
const adminPanelReducer = (state=initialState, action) => {
    console.log('action received' + action.type + action.payload);
    switch(action.type) {
        case 'UPDATE_BOOK':
            const book = action.payload;
            return {...state, book};
        case 'GET_EDITED_BOOKS':
            const editedBook = action.payload;
            return {
                ...state,
                book: {...editedBook},
                editMode: true,
                removingBookId: editedBook.id
            }
        default:
            
            return state
    }
}

export default adminPanelReducer;