class BooksApi {
    static getAllBooks(){
        return fetch('https://bookstore-9c415.firebaseio.com/bookstore/books.json')
            .then(response => {
                return response.json()
            })
            .catch(error=> {
                return error
            })
    }
}

export default BooksApi