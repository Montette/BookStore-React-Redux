const initialState = {
    book: {
        name: '',
        author: '',
        description: '',
        onStock: true,
        image: ''
    },
    editMode: false,
    removingBookId: '',
    books:[]
}

export default initialState;