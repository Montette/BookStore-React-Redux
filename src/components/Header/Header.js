import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = (props) => {
    
    return (
        <header className='header'>
            <h1 className='header__title'>Book Store</h1>
          <p>  <Link to='/admin'>Admin Panel </Link> </p>
        </header>
    );
}

export default Header;