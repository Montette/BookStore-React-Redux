class BooksApi {
    static getAllBooks(){
        // return fetch('https://bookstore-9c415.firebaseio.com/bookstore/books.json')
            return fetch('https://bookshop-ce905.firebaseio.com/books.json')
            .then(response => {
                return response.json()
            })
            .catch(error=> {
                return error
            })
    }
    // static updateBook(book) {
    //     const request = new Request(`https://bookstore-9c415.firebaseio.com/bookstore/books.json[0]`)
    // }
    static addBook(newBook) {
        console.log(newBook);
        const request = new Request('https://bookshop-ce905.firebaseio.com/books.json',
    {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newBook)
    })

        return fetch(request)
            .then(response=> {
               return response.json()
            //    return {
            //       res: response,
            //       book: newBook
            //    }
                
            })
            // .then(response => {
            //     return {
            //         res: response,
            //         book: newBook
            //      }
            // })
            .catch(error=> {
                return error
            })
    }

    static deleteBook(book) {
       
        const request = new Request(`https://bookshop-ce905.firebaseio.com/books/${book.dataId}.json`,
        {
            method: 'DELETE'
        })
        return fetch(request)
        .then(response=> {
            response.json()
        })
        .catch(error=> {
            return error
        })
    }
}

export default BooksApi