import React from 'react';
import './AdminPanel.scss';

class AdminPanel extends React.Component {
    render (){
        return (
            <div>
                <form className='form'>
                    
                    <label className='form__label' htmlFor='bookNameInput'>Book name:
                    <input className='form__input' type='text' placeholder='Book Name' id='bookName' name='bookName'/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>Book author:
                    <input className='form__input' type='text' placeholder='Book Author' id='bookAuthor' name='bookAuthor'/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>Book description:
                    <textarea className='form__textarea'  placeholder='Book Description' id='bookDescription' name='bookDescription'/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>Book Image:
                    <input className='form__input' type='file' id='bookImage' name='bookImage'/>
                    </label>
                    <label className='form__label' htmlFor='bookAuthorInput'>On stock:
                    <input className='form__input' type='checkbox'  placeholder='bookOnStock' id='bookOnStock' name='bookOnStock'/>
                    </label>
                    <button type='submite'>Save</button>
                </form>
            
            </div>
        );
    }
}

export default AdminPanel;