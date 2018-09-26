import React from 'react';
import './Order.scss';


const Order = (props) => {

    let orderedBooksList = props.orderedBooks.map(orderedBook=> {
        return (
            <li key={orderedBook.id} onClick={()=> props.removeOrder(orderedBook.id)}>{orderedBook.name}</li>
        )
    })
    
    return (
        <div className='order'>
       <ul>
        {orderedBooksList}
        </ul>
        </div>
    );
}

export default Order;