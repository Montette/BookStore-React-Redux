import React from 'react';
import './Inventory.scss';
import Book from '../Book/Book';
// import BookItem from '../BookItem/BookItem';
import {fbase} from '../../fbase';

class Inventory extends React.Component  {

    state= {
        books: []
    }

    componentDidMount () {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })
    }

    componentWillUnmount (){
        fbase.removeBinding(this.ref)
    }
    

    render(){

    const bookList = this.state.books ? this.state.books.map(book => {
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

export default Inventory;