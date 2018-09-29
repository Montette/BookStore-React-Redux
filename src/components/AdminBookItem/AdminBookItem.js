import React from 'react';
import {connect} from 'react-redux';
import {getEditedBookAction} from '../../store/actions';


class AdminBookItemContainer extends React.Component {
    render(){
  
    return (
     
        //  <li>{props.book.name} by {props.book.author}<button onClick={()=> props.deleteBook(props.book.id)}>Remove from store</button></li>

         <div className='books__book book'> 
         {/* <div className='book__img-container'><img className='book__img'src={props.bookItem.image ? props.bookItem.image : 'https://static.thenounproject.com/png/132226-200.png'}/></div>*/}
         <div> 
             <h2 className='book__title'>{this.props.book.name}</h2>
             <p className='book__author'>{this.props.book.author}</p>
             <p className='book__description'>{this.props.book.description}</p>
             <p className='book__stock'>{this.props.book.onStock? 'Book on stock' : 'Book unavailable'}</p>
         </div>
        <button onClick={()=> this.props.deleteBook(this.props.book)}>Remove from store</button>
        <button onClick={()=> this.props.getEditedBook(this.props.book)}>Edit book</button>
        
     </div>
       
    );
}
}

const mapDispatchToProps = dispatch => {
    return {
        getEditedBook: (book) => dispatch(getEditedBookAction(book))
    }
}



// const mapDispatchToProps = dispatch => {
//     return {
//         updateBook: book => dispatch({type: 'UPDATE_BOOK', payload: book})
//     }
// }
const mapStateToProps = (state) => {
    return {
    //    getEditedBook: (book) => dispatch({
    //        type: 'GET_EDITED_BOOKS',
    //        payload: book
    //    })
    }
}
const AdminBookItem = connect(mapStateToProps, mapDispatchToProps)(AdminBookItemContainer)

export default AdminBookItem;