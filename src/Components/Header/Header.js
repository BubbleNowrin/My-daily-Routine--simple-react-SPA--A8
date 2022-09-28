import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <div className='header-text'>
                <h2>My Daily Life</h2>
            </div>
        </div>
    );
};

export default Header;