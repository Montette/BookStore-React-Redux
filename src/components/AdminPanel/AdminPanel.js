import React from 'react';
import './AdminPanel.scss';
import {fbase, firebaseApp} from '../../fbase';
import LoginForm from '../LoginForm/LoginForm';
import BookForm from '../BookForm/BookForm';
import AdminBooksList from '../AdminBooksList/AdminBooksList';
import {connect} from 'react-redux';
import {loadBooksSuccess} from '../../actions/actions';
import {loadBooks} from '../../actions/actions';
const uuidv1 = require('uuid/v1');


class AdminPanelContainer extends React.Component {
    state = {
        books: [],
    //   book: {
    //       name: '',
    //       author: '',
    //       description: '',
    //       image: '',
    //       onStock: false
    //   },
      loggedIn: true,
      email: '',
      password:''
    //   editMode: false,
    //   editedBook: {
    //     name: '',
    //     author: '',
    //     description: '',
    //     image: '',
    //     onStock: false
    //   }
    }

    // inputHandler = (event) => {

    //     let newVal = event.target.value;
    //     let updatedState = {};
    //     if(event.target.type === 'checkbox') {
    //         updatedState[event.target.name] = event.target.checked;
    //     } else {
    //         updatedState[event.target.name] = newVal;
    //     }

    //     if(!this.state.editMode) {
  
    //     this.setState({
    //         book: {
    //             ...this.state.book,
    //             ...updatedState
    //         }
    //     })
    // } else {
    //     console.log(updatedState);
    //     this.setState({
    //         book: {
    //             ...this.state.editedBook,
    //             ...updatedState
    //         }
    //     })
    // }
  
    // }

    // submitHandler = (event) => {
    //     event.preventDefault();
    //     // let books = [...this.state.books];
    //     const book = {...this.state.book};
    //     book.id = uuidv1();
    //     // books.push(book); 
    //     let resetBook = {...this.state.book};
    //     // this.props.addBook(book)
    //     Object.keys(resetBook).map(key=> {
    //           resetBook[key] = typeof resetBook[key] === 'boolean' ? false : '';
    //     });
    //     this.setState({
    //         books: [...this.state.books, book],
    //         book: resetBook    
    //     }) 
    // }

    submitHandler = (book) => {
        // if(this.state.editMode) {
            // let bookEd = this.state.books.filter(item => {
            //     return item.id == book.id
            // })
            // console.log(bookEd);

        //     let newList = this.state.books.map(item => {
        //         if(item.id === book.id) {
        //             item = {...item, ...book}
        //         }
        //         return item
        //     })

        //     console.log(newList);
        //     this.setState({
        //         books: newList,
        //         editMode: false
        //     })
        // } else {
                this.setState({
            books: [...this.state.books, book]
            // editedBook: {
            //     name: '',
            //     author: '',
            //     description: '',
            //     image: '',
            //     onStock: false
            // }
            
        })
        // }
        // this.setState({
        //     books: [...this.state.books, book],
        //     editMode: false
        // })
    }

    componentDidMount () {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        })

        this.props.loadBooks()
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
    
    // getEditedBookHandler = (id)=> {
    //     console.log(id);
    //     let editedBook = [...this.state.books].filter(book=> {
    //         return book.id === id
    //     })[0];
    //     console.log(editedBook);
    //     this.setState({
    //         ...this.state,
    //         editMode: true,
    //         editedBook
    //     })
    // }

    editBookHandler = (book) => {
        let newList = this.state.books.map(item => {
            if(item.id === book.id) {
                item = {...item, ...book}
            }
            return item
        })

        this.setState({
            ...this.state,
            books: newList
            // editMode: false,
            // editedBook: {
            //     name: '',
            //     author: '',
            //     description: '',
            //     image: '',
            //     onStock: false
            // }
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
                // editMode={this.state.editMode}
                // book={this.state.editedBook}
                submitBook={this.submitHandler}
                // bookInputChange={this.inputHandler}
                // book={this.state.book}
                logOut={this.LogOutHandler}
                editBook={this.editBookHandler}
             
                />
                <AdminBooksList 
                books={this.state.books}
                deleteBook={this.deleteHandler}
                // getEditedBook={this.getEditedBookHandler}
                />
                {/* <ul>
                    {this.props.books.map(book=> {
                        return(
                            <li>book</li>
                        )
                    })}
                </ul> */}
            </div>
            }
            
            </React.Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        loadBooks: () => dispatch(loadBooks())
    }
}
const mapStateToProps = (state) => {
    return {
        books: state.dataReducer.books,
        // editMode: state.adminPanelReducer.editMode,
        // removingBookId: state.adminPanelReducer.removingBookId
    }
}

const AdminPanel= connect(mapStateToProps, mapDispatchToProps)(AdminPanelContainer)


export default AdminPanel;