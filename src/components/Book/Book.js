import React from 'react';
import './Book.scss';

const Book = (props) => {
    // const booksList = props.orderedBook.map(book => {
    //     return (
    //         <div className='books__book book' key={book.name}> 
    //             <div className='book__img-container'><img className='book__img'src={book.image ? book.image : 'https://static.thenounproject.com/png/132226-200.png'}/></div>
    //             <div>
    //                 <h2 className='book__title'>{book.name}</h2>
    //                 <p className='book__author'>{book.author}</p>
    //                 <p className='book__description'>{book.description}</p>
    //                 <p className='book__stock'>{book.onStock? 'Book on stock' : 'Book unavailable'}</p>
    //             </div>
               
    //         </div>
    //     )
    // })

    // const booksList = props.orderedBook.map(book => {
    //     return (
    //         <div className='books__book book' key={book.name}> 
    //             <div className='book__img-container'><img className='book__img'src={book.image ? book.image : 'https://static.thenounproject.com/png/132226-200.png'}/></div>
    //             <div>
    //                 <h2 className='book__title'>{book.name}</h2>
    //                 <p className='book__author'>{book.author}</p>
    //                 <p className='book__description'>{book.description}</p>
    //                 <p className='book__stock'>{book.onStock? 'Book on stock' : 'Book unavailable'}</p>
    //             </div>
               
    //         </div>
    //     )
    // })
    return (
        <div className='bookItem'>
                       <div className='books__book book' key={props.bookItem.name}> 
                <div className='book__img-container'><img className='book__img'src={props.bookItem.image ? props.bookItem.image : 'https://static.thenounproject.com/png/132226-200.png'}/></div>
                <div>
                    <h2 className='book__title'>{props.bookItem.name}</h2>
                    <p className='book__author'>{props.bookItem.author}</p>
                    <p className='book__description'>{props.bookItem.description}</p>
                    <p className='book__stock'>{props.bookItem.onStock? 'Book on stock' : 'Book unavailable'}</p>
                </div>
               <button onClick={()=> props.addOrder(props.bookItem)}>Buy</button>
            </div>
        
        </div>
    );
}

export default Book;