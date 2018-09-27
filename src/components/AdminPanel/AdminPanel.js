import React from 'react';
import './AdminPanel.scss';
import {fbase, firebaseApp} from '../../fbase';
import LoginForm from '../LoginForm/LoginForm';
import BookForm from '../BookForm/BookForm';
import AdminBooksList from '../AdminBooksList/AdminBooksList';
const uuidv1 = require('uuid/v1');


class AdminPanel extends React.Component {
    state = {
        books: [],
      book: {
          name: '',
          author: '',
          description: '',
          image: '',
          onStock: false
      },
      loggedIn: true,
      email: '',
      password:'',
      editMode: false,
      editedBook: {
        name: '',
        author: '',
        description: '',
        image: '',
        onStock: false
      }
    }

    inputHandler = (event) => {

        let newVal = event.target.value;
        let updatedState = {};
        if(event.target.type === 'checkbox') {
            updatedState[event.target.name] = event.target.checked;
        } else {
            updatedState[event.target.name] = newVal;
        }

        if(!this.state.editMode) {
  
        this.setState({
            book: {
                ...this.state.book,
                ...updatedState
            }
        })
    } else {
        console.log(updatedState);
        this.setState({
            book: {
                ...this.state.editedBook,
                ...updatedState
            }
        })
    }
  
    }

    submitHandler = (event) => {
        event.preventDefault();
        // let books = [...this.state.books];
        const book = {...this.state.book};
        book.id = uuidv1();
        // books.push(book); 
        let resetBook = {...this.state.book};
        // this.props.addBook(book)
        Object.keys(resetBook).map(key=> {
              resetBook[key] = typeof resetBook[key] === 'boolean' ? false : '';
        });
        this.setState({
            books: [...this.state.books, book],
            book: resetBook    
        }) 
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

    authenticateHandler = (event)=> {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=> {
                this.setState({
                    loggedIn: true
                })
            })
            .catch(()=> {
                console.log('wrong email or password')
            })
    }

    loginHandleChange = (event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    LogOutHandler = () => {
        firebaseApp.auth().signOut()
            .then(()=> {
                this.setState({
                    loggedIn: false
                })
            })
    }

    deleteHandler = (id) => {
        const updatedBooks = [...this.state.books].filter(book => {
            return book.id !== id
        })

        this.setState({
            books: updatedBooks
        })
    }
    
    editBookHandler = (id)=> {
        console.log(id);
        let editedBook = [...this.state.books].filter(book=> {
            return book.id === id
        })[0];
        console.log(editedBook);
        this.setState({
            ...this.state,
            editMode: true,
            editedBook
        })
    }
    render(){
        
        return (
            <React.Fragment>
            {!this.state.loggedIn &&
            <LoginForm
              changeInput={this.loginHandleChange}
              submitForm={this.authenticateHandler}
            />
            }
            {this.state.loggedIn &&
            <div className='adminPanel'>
                <BookForm
                editMode={this.state.editMode}
                editedBook={this.state.editedBook}
                submitBook={this.submitHandler}
                bookInputChange={this.inputHandler}
                book={this.state.book}
                logOut={this.LogOutHandler}
             
                />
                <AdminBooksList 
                books={this.state.books}
                deleteBook={this.deleteHandler}
                editBook={this.editBookHandler}
                />
            </div>
            }
            
            </React.Fragment>
        );
    }
}

export default AdminPanel;