import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import menuLogo from './menu-24px-light.svg'

import './Nav.css';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggle = ()=>{ 
        if(menuOpen===false){
            return setMenuOpen(true);
        }
        return setMenuOpen(false);
     }

    return (
        <nav id='nav'>
            <button className='fab toggle' onClick={toggle}>
                <img alt='menu icon' className='toggle' src={menuLogo} />
            </button>
            <div className={menuOpen===true?'menu menuOpen':'menu'}>
                <div className='menu-item'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='menu-item'>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='menu-item'>
                    <Link to='./faq'>FAQ</Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;