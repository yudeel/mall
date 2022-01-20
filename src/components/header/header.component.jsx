import React from 'react';
import './header.style.scss';
import { ReactComponent as LogoImg } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <LogoImg className='logo' />
        </Link>
        <div className='options'>
            <Link to="/shop" className='option'>SHOP</Link>
            <Link to="/shop" className='option'>CONTACT</Link>
            <Link to="/shop" className='option'>SHOP</Link>
        </div>
    </div>
)

export default Header;