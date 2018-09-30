import React from 'react';
import './Inventory.scss';
import Book from '../Book/Book';
// import BookItem from '../BookItem/BookItem';
import {connect} from 'react-redux';
import {loadBooks} from '../../actions/actions';
import {fbase} from '../../fbase';

class InventoryContainer extends React.Component  {

    // state= {
    //     books: []
    // }

    componentDidMount () {
        // this.ref = fbase.syncState('bookstore/books', {
        //     context: this,
        //     state: 'books'
        // })

        this.props.loadBooks()
    }

    // componentWillUnmount (){
    //     fbase.removeBinding(this.ref)
    // }
    

    render(){

    const bookList = this.props.books ? this.props.books.map(book => {
      return ( <Book 
        key={book.id}
        bookItem = {book}
        addOrder={this.props.addOrder}
        />
    )
    }) : 'No books in inventory';


    return (
        <div className='books'>
            {bookList}       
           
        </div>
    );
}
}

const mapDispatchToProps = dispatch => {
    return {
        loadBooks: () => dispatch(loadBooks())
    }
}
// const mapStateToProps = (state) => {
//         let books = [];
//         if(state.dataReducer.length > 0) {
//         books = state.dataReducer
//         }
//         return {
//             books
      
//     }
// }

const mapStateToProps = (state) => {
   
  
    return {
        books: state.dataReducer
  
}
}


const Inventory= connect(mapStateToProps, mapDispatchToProps)(InventoryContainer)

export default Inventory;