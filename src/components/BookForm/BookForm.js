import React from 'react';
import {connect} from 'react-redux';
import {setBook} from '../../actions/actions';
import {updateBookAction} from '../../actions/actions';
import {submitBookAction} from '../../actions/actions';
const uuidv1 = require('uuid/v1');



class BookFormContainer extends React.Component {  
    // state={
    //     book: {
    //       name: '',
    //       author: '',
    //       description: '',
    //       image: '',
    //       onStock: false
    //     }
    // }

    inputHandler = (event) => {

        // let newVal = event.target.value;
        // let updatedState = {};
        // if(event.target.type === 'checkbox') {
        //     updatedState[event.target.name] = event.target.checked;
        // } else {
        //     updatedState[event.target.name] = newVal;
        // }
  
        // this.setState({
        //     book: {
        //         ...this.state.book,
        //         ...updatedState
        //     }
        // })

        let newBook;
        if(event.target.name === 'onStock') {
            newBook = {
                ...this.props.book,
                [event.target.name]: event.target.value
            }
        } else {
            newBook = {
                ...this.props.book,
                [event.target.name]: event.target.value
            }
        }

        this.props.setBook(newBook);
       

    }

    addNewBook = (event) => {
        event.preventDefault();
        if(!this.props.editMode) {
        
        let newBook = {...this.props.book};
        newBook.id = uuidv1();
        console.log(newBook);
        this.props.submitBook(newBook);
        this.props.setBook({
        
                name: '',
                author: '',
                description: '',
                image: '',
                onStock: false
            
        })
    } else {
        // let newBook = {
        //     ...this.props.book,
        //     ...this.state.book
        // }
        let newBook = {...this.props.book};
        // this.props.editBook(newBook);
        this.props.updateBook({
            book: {
                name: '',
                author: '',
                description: '',
                image: '',
                onStock: false
            },
            newBook
        })
        event.target.reset()
    }
    //     let resetBook = {...this.state.book};

    //     Object.keys(resetBook).map(key=> {
    //         resetBook[key] = typeof resetBook[key] === 'boolean' ? false : '';
    //   });
    //   this.setState({
    //       book: resetBook    
    //   }) 
    }

    render(){
    const label = this.props.editMode ? 'Save' : 'Add';
    const title = this.props.editMode ? 'Edit book' : 'Add new book'
    return (
        <form onSubmit={this.addNewBook} className='adminPanel__form form'>
        <h3>{title}</h3>          
        <label className='form__label' htmlFor='bookNameInput'>Book name:
        <input className='form__input' type='text' placeholder='Book Name' id='bookName' name='name' value={this.props.book.name} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book author:
        <input className='form__input' type='text' placeholder='Book Author' id='bookAuthor' name='author' value={this.props.book.author || this.props.book.author} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book description:
        <textarea className='form__textarea'  placeholder='Book Description' id='bookDescription' name='description' value={this.props.book.description || this.props.book.description} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book Image:
        <input className='form__input' type='file' id='bookImage' name='image' value={this.props.book.image || this.props.book.image} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>On stock:
        <input className='form__input' type='checkbox'  placeholder='bookOnStock' id='bookOnStock' name='onStock' value={this.props.book.onStock || this.props.book.onStock} onChange={this.inputHandler}/>
        </label>
        <button type='submite'>{label}</button>
        <button onClick={this.props.logOut}>Log out</button>
    </form>
    );
}
}
const mapDispatchToProps = dispatch => {
    return {
        setBook: book => dispatch(setBook(book)),
        submitBook: newBook => dispatch(submitBookAction(newBook)),
        updateBook: book => dispatch(updateBookAction(book))
    }
}
const mapStateToProps = (state) => {
    return {
        book: state.adminPanelReducer.book,
        editMode: state.adminPanelReducer.editMode,
        removingBookId: state.adminPanelReducer.removingBookId
    }
}

const BookForm = connect(mapStateToProps, mapDispatchToProps)(BookFormContainer)
export default BookForm;