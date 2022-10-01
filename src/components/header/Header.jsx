import React from 'react';
import './header.css';
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
        <div className='header'>
            <div className='header_inner'>
                <div className="logo">
                    <Link className='home_link' to='/'>
                      <img src={logo} />
                      <span className='name'>TEMOJI</span>
                    </Link>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Header