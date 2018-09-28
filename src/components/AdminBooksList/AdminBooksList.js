import React from 'react';
import AdminBookItem from '../AdminBookItem/AdminBookItem';


const AdminBooksList = (props) => {
    
    let listBooks = props.books ?  <ul> {props.books.map(book=> {
        return (
            // <li key={book.id}>{book.name} by {book.author}<button onClick={()=> props.deleteBook(book.id)}>Remove from store</button></li>
            <AdminBookItem 
            key={book.id}
            book ={book}
            deleteBook={()=> props.deleteBook(book.id)}
            getEditedBook={props.getEditedBook}
            />
        )
    })} </ul> : <p>No books yet</p>
    return (
       <div>
           {listBooks}
       </div>
    );
}

export default AdminBooksList;