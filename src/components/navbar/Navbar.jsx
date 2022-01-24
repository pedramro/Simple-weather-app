import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({toggle}) {

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <h1 className='navbar-container-title'><Link to='/'>Weather App</Link></h1>
                <div onClick={toggle} className={localStorage.getItem('mode') ? localStorage.getItem('mode') : 'mode-toggle'}>
                    <div className='mode-toggle-btn'></div>
                </div>
                <ul className='navbar-container-list'>
                    <li className='navbar-container-list-item'><Link to='/contact'>Contact</Link></li>
                    <li className='navbar-container-list-item'><Link to='/about'>About</Link></li>
                    <li className='navbar-container-list-item'>Your Location: unknown</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
