import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Nav.css';

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const toggle = ()=>{ 
        if(menuOpen===false){
            return setMenuOpen(true);
        }
        return setMenuOpen(false);
     }



    return (
        <nav id='nav'>
            <button className='fab toggle' onClick={toggle}>
                <img alt='menu icon' className='toggle' src='#' />
            </button>
            <div className={menuOpen===true?'menu menuOpen':'menu'}>
                <div className='menu-item'>
                    <a href='./'>Home</a>
                </div>
                <div className='menu-item'>
                    <a href='./contact'>Contact</a>
                </div>
                <div className='menu-item'>
                    <a href='./projects'>Projects</a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;