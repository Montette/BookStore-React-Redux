import React from 'react';
import './AdminPanel.scss';
import {fbase, firebaseApp} from '../../fbase';
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
      loggedIn: false,
      email: '',
      password:''
    }

    inputHandler = (event) => {

        let newVal = event.target.value;
        let updatedState = {};
        if(event.target.type === 'checkbox') {
            updatedState[event.target.name] = event.target.checked;
        } else {
            updatedState[event.target.name] = newVal;
        }
  
        this.setState({
            book: {
                ...this.state.book,
                ...updatedState
            }
        })
  
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
    
    render(){
        
        return (
            <React.Fragment>
            {!this.state.loggedIn &&
            <form onSubmit={this.authenticateHandler}>
            <input type='text' placeholder='email' name='email'
            onChange={this.loginHandleChange}
            />
               <input type='password' name='password'
            onChange={this.loginHandleChange}
            />
            <button type='submit'>Log in</button>
            </form>
            }
            {this.state.loggedIn &&
            <div className='adminPanel'>
                <form onSubmit={this.submitHandler} className='adminPanel__form form'>
                    
                    <label className='form__label' htmlFor='bookNameInput'>Book name:
                    <input className='form__input' type='text' placeholder='Book Name' id='bookName' name='name' value={this.state.book.name} onChange={this.inputHandler}/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>Book author:
                    <input className='form__input' type='text' placeholder='Book Author' id='bookAuthor' name='author' value={this.state.book.author} onChange={this.inputHandler}/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>Book description:
                    <textarea className='form__textarea'  placeholder='Book Description' id='bookDescription' name='description' value={this.state.book.description} onChange={this.inputHandler}/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>Book Image:
                    <input className='form__input' type='file' id='bookImage' name='image' value={this.state.book.image} onChange={this.inputHandler}/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>On stock:
                    <input className='form__input' type='checkbox'  placeholder='bookOnStock' id='bookOnStock' name='onStock' value={this.state.book.name} onChange={this.inputHandler}/>
                    </label>
                    <button type='submite'>Save</button>
                </form>
            
            </div>
            }
            </React.Fragment>
        );
    }
}

export default AdminPanel;