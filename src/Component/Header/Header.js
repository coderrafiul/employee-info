import React from 'react';
import logo from '../../images/apex.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="">Home</a>
                <a href="">Our Team</a>
                <a href="">Our HR Policy</a>
            </nav>
        </div>
    );
};

export default Header;