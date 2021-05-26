import React from 'react';
import Logo from '../images/kaaylabs-logo.png';

export default function Header() {
    return(
        <div className='header-top'>
            <img src={Logo} alt='logo' />
        </div>
    )
}