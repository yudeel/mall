import React from 'react';
import './header.style.scss';
import { ReactComponent as LogoImg } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentuser }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <LogoImg className='logo' />
        </Link>
        <div className='options'>
            <Link to="/shop" className='option'>SHOP</Link>
            <Link to="/shop" className='option'>CONTACT</Link>
            {
                currentuser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> :
                    <Link to="/singin" className='option'>SING IN</Link>
            }
        </div>
    </div>
)

export default Header;