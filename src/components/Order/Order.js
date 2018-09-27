import React from 'react';
import './Order.scss';
import OrderedBook from '../OrderedBook/OrderedBook';

const Order = (props) => {

    let orderedBooksList = !props.orderedBooks || props.orderedBooks.length === 0 ?
    'Add books to your order':
    props.orderedBooks.map(orderedBook=> {
        return (
            <OrderedBook key={orderedBook.id} book={orderedBook} removeBook={props.removeOrder}/>
        )
    });
    
    return (
        <div className='order'>
       <ul>
        {orderedBooksList}
        </ul>
        </div>
    );
}

export default Order;