import React from 'react';
const uuidv1 = require('uuid/v1');


class BookForm extends React.Component {  
    state={
        book: {
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
  
        this.setState({
            book: {
                ...this.state.book,
                ...updatedState
            }
        })

    }

    addNewBook = (event) => {
        event.preventDefault();
        if(!this.props.editMode) {
        
        let newBook = {...this.state.book};
        newBook.id = uuidv1();
        this.props.submitBook(newBook);
        this.setState({
            book: {
                name: '',
                author: '',
                description: '',
                image: '',
                onStock: false
            }
        })
    } else {
        let newBook = {
            ...this.props.book,
            ...this.state.book
        }
        this.props.editBook(newBook);
        this.setState({
            book: {
                name: '',
                author: '',
                description: '',
                image: '',
                onStock: false
            }
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
        <input className='form__input' type='text' placeholder='Book Name' id='bookName' name='name' value={this.state.book.name || this.props.book.name} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book author:
        <input className='form__input' type='text' placeholder='Book Author' id='bookAuthor' name='author' value={this.state.book.author || this.props.book.author} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book description:
        <textarea className='form__textarea'  placeholder='Book Description' id='bookDescription' name='description' value={this.state.book.description || this.props.book.description} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book Image:
        <input className='form__input' type='file' id='bookImage' name='image' value={this.state.book.image || this.props.book.image} onChange={this.inputHandler}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>On stock:
        <input className='form__input' type='checkbox'  placeholder='bookOnStock' id='bookOnStock' name='onStock' value={this.state.book.onStock || this.props.book.onStock} onChange={this.inputHandler}/>
        </label>
        <button type='submite'>{label}</button>
        <button onClick={this.props.logOut}>Log out</button>
    </form>
    );
}
}

export default BookForm;