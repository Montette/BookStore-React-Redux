import React from 'react';
import './OrderedBook.scss';


const OrderedBook = (props) => {
    
    return (
       props.book ? <li className='order__orderedBook orderedBook'key={props.book.id} onClick={()=> props.removeBook(props.book.id)}>{props.book.name}</li> : null
    );
}

export default OrderedBook;