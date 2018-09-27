import React from 'react';



const BookForm = (props) => {  
    return (
        <form onSubmit={props.submitBook} className='adminPanel__form form'>
                    
        <label className='form__label' htmlFor='bookNameInput'>Book name:
        <input className='form__input' type='text' placeholder='Book Name' id='bookName' name='name' value={props.book.name} onChange={props.bookInputChange}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book author:
        <input className='form__input' type='text' placeholder='Book Author' id='bookAuthor' name='author' value={props.book.author} onChange={props.bookInputChange}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book description:
        <textarea className='form__textarea'  placeholder='Book Description' id='bookDescription' name='description' value={props.book.description} onChange={props.bookInputChange}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>Book Image:
        <input className='form__input' type='file' id='bookImage' name='image' value={props.book.image} onChange={props.bookInputChange}/>
        </label>
        <label className='form__label' htmlFor='bookAuthorInput'>On stock:
        <input className='form__input' type='checkbox'  placeholder='bookOnStock' id='bookOnStock' name='onStock' value={props.book.name} onChange={props.bookInputChange}/>
        </label>
        <button type='submite'>Save</button>
    </form>
    );
}

export default BookForm;