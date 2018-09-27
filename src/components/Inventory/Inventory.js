import React from 'react';
import './Inventory.scss';
import Book from '../Book/Book';


const Inventory = (props) => {

    const booksList = props.books ? props.books.map(book => {
      return ( <Book 
        key={book.id}
        book = {book}
        addOrder={props.addOrder}
        />
    )
    }) : 'No books in inventory';
    return (
        <div className='books'>
            {booksList}       
        </div>
    );
}

export default Inventory;