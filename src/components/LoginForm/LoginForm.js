import React from 'react';



const LoginForm = (props) => {  
    return (
        <form onSubmit={props.submitForm}>
            <input type='text' placeholder='email' name='email'
            onChange={props.changeInput}
            />
               <input type='password' name='password'
            onChange={props.changeInput}
            />
            <button type='submit'>Log in</button>
            </form>
    );
}

export default LoginForm;