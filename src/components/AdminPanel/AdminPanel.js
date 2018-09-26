import React from 'react';
import './AdminPanel.scss';

class AdminPanel extends React.Component {
    state = {
        book: {
            name: '',
            author: '',
            description: '',
            image: '',
            onStock: false
        },
        books: []
    }

    inputHandler = (event) => {

        let newVal = event.target.value;
        let inputName = event.target.name;
        let updatedState = {};
        // updatedState[event.target.name] = newVal;
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
        let books = [...this.state.books];
        const book = {...this.state.book};
        books.push(book);
        // let resetBook = {...this.state.book}
        //     Object.keys(resetBook).map(key=> {
        //         resetBook[key] = "" ;
        //         if(key ==='onStock'){
        //             resetBook[key] = false ;
        //         }
        //  });

    //     let resetBook = {...this.state.book}
    //     Object.values(resetBook).map(value=> {
    //         value = "" ;
    //         if(typeof value === 'boolean'){
    //             value = false ;
    //         }
    //  });

        let resetBook = {...this.state.book}
        Object.keys(resetBook).map(key=> {
               resetBook[key] = typeof resetBook[key] === 'boolean' ? false : '';
         });


    

        this.setState({
            books,
            book: resetBook    
        })

      
    }

    render (){
        return (
            <div>
                <form onSubmit={this.submitHandler} className='form'>
                    
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
        );
    }
}

export default AdminPanel;