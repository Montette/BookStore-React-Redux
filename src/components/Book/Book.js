import React from 'react';
import './Book.scss';



const Book = (props) => {

    return (
        
                <div className='books__book book' > 
                <div className='book__img-container'><img className='book__img'src={props.book.image ? props.book.image : 'https://static.thenounproject.com/png/132226-200.png'}/></div>
                <div>
                    <h2 className='book__title'>{props.book.name}</h2>
                    <p className='book__author'>{props.book.author}</p>
                    <p className='book__description'>{props.book.description}</p>
                    <p className='book__stock'>{props.book.onStock? 'Book on stock' : 'Book unavailable'}</p>
                </div>   
            <button onClick={()=> props.addOrder(props.book.id)}>Buy</button>
        </div>
    );
}

export default Book;