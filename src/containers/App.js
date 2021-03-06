import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Inventory from '../components/Inventory/Inventory';
import Order from '../components/Order/Order';
import AdminPanel from '../components/AdminPanel/AdminPanel';
import './App.scss';
const uuidv1 = require('uuid/v1');

class App extends Component {
  state = {
    // book: {
    //     name: '',
    //     author: '',
    //     description: '',
    //     image: '',
    //     onStock: false
    // },
    // books: [
    //   {name: 'Lord of the Rings',
    //     author: 'J.R.R. Tolkien',
    //     description: 'Classic fantasy book about hobbits and other magic creatures',
    //     image: '',
    //     onStock: true,
    //     id: uuidv1()
    //   },
    //   {name: 'The Witcher',
    //     author: 'J.R.R. Tolkien',
    //     description: 'Classic fantasy book about hobbits and other magic creatures',
    //     image: '',
    //     onStock: true,
    //     id: uuidv1()
    //   },
    //   {name: 'Small Gods',
    //     author: 'J.R.R. Tolkien',
    //     description: 'Classic fantasy book about hobbits and other magic creatures',
    //     image: '',
    //     onStock: true,
    //     id: uuidv1()
    //   },
    //   {name: 'Everything about cats',
    //     author: 'J.R.R. Tolkien',
    //     description: 'Classic fantasy book about hobbits and other magic creatures',
    //     image: '',
    //     onStock: true,
    //     id: uuidv1()
    //   },
    //   {name: 'Anne of Green Gables',
    //     author: 'J.R.R. Tolkien',
    //     description: 'Classic fantasy book about hobbits and other magic creatures',
    //     image: '',
    //     onStock: true,
    //     id: uuidv1()
    //   },
    //   {name: 'Away From Her',
    //     author: 'J.R.R. Tolkien',
    //     description: 'Classic fantasy book about hobbits and other magic creatures',
    //     image: '',
    //     onStock: true,
    //     id: uuidv1()
    //   }
    // ],
    order: []
}

  // inputHandler = (event) => {

  //     let newVal = event.target.value;
  //     let updatedState = {};
  //     if(event.target.type === 'checkbox') {
  //         updatedState[event.target.name] = event.target.checked;
  //     } else {
  //         updatedState[event.target.name] = newVal;
  //     }

  //     this.setState({
  //         book: {
  //             ...this.state.book,
  //             ...updatedState
  //         }
  //     })

  // }

  // submitHandler = (event) => {
  //     event.preventDefault();
  //     let books = [...this.state.books];
  //     const book = {...this.state.book};
  //     book.id = uuidv1();
  //     books.push(book); 
  //     let resetBook = {...this.state.book}
  //     Object.keys(resetBook).map(key=> {
  //           resetBook[key] = typeof resetBook[key] === 'boolean' ? false : '';
  //     });
  //     this.setState({
  //         books,
  //         book: resetBook    
  //     }) 
  // }
  
  addOrderHandler = (book) => {
    // const orderedBook = [...this.state.books].filter(book=> {
    //   return book.id === id
    // })
   
    // this.setState({
    //   order: [...this.state.order, orderedBook[0]]
    // })

    // const orderedBook = [...this.state.books].filter(book=> {
    //   return book.id === id
    // })
   
    this.setState({
      order: [...this.state.order, book]
    })
  }

  removeOrderHandler = (id) => {
    const orderedBook = [...this.state.order].filter(book=> {
      return book.id !== id
    })
    this.setState({
      order: orderedBook
    })
  }
  render() {
    return (
      <div className="app">
      <Header />
      <Order 
        orderedBooks={this.state.order}
        removeOrder={this.removeOrderHandler}
      />
      <Inventory 
        books={this.state.books} 
        addOrder={this.addOrderHandler}
      />
       
       {/* <AdminPanel 
        books={this.state.books} 
        book={this.state.book}
        addBookHandler={this.inputHandler}
        saveBookHandler={this.submitHandler}
        />   */}

      </div>
    );
  }
}

export default App;
