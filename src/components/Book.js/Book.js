import React from 'react';
import './Book.scss';

const Book = (props) => {
    const booksList = props.books.map(book => {
        return (
            <div className='books__book book' key={book.name}> 
                <div className='book__img-container'><img className='book__img'src={book.image ? book.image : 'https://static.thenounproject.com/png/132226-200.png'}/></div>
                <div>
                    <h2 className='book__title'>{book.name}</h2>
                    <p className='book__author'>{book.author}</p>
                    <p className='book__description'>{book.description}</p>
                    <p className='book__stock'>{book.onStock? 'Book on stock' : 'Book unavailable'}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='books'>
            {booksList}
        
        </div>
    );
}

export default Book;