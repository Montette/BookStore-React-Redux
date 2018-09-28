import React from 'react';



const AdminBookItem = (props) => {
    
  
    return (
     
        //  <li>{props.book.name} by {props.book.author}<button onClick={()=> props.deleteBook(props.book.id)}>Remove from store</button></li>

         <div className='books__book book'> 
         {/* <div className='book__img-container'><img className='book__img'src={props.bookItem.image ? props.bookItem.image : 'https://static.thenounproject.com/png/132226-200.png'}/></div>*/}
         <div> 
             <h2 className='book__title'>{props.book.name}</h2>
             <p className='book__author'>{props.book.author}</p>
             <p className='book__description'>{props.book.description}</p>
             <p className='book__stock'>{props.book.onStock? 'Book on stock' : 'Book unavailable'}</p>
         </div>
        <button onClick={()=> props.deleteBook(props.book.id)}>Remove from store</button>
        <button onClick={()=> props.getEditedBook(props.book.id)}>Edit book</button>
        
     </div>
       
    );
}

export default AdminBookItem;