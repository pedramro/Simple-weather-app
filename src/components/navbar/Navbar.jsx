import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({toggle}) {

    function collapse() {
        const navbar = document.querySelector('.navbar')
        const list = document.querySelector('.navbar-container-list-col')
        navbar.classList.toggle('collapse')
        list.classList.toggle('collapse')
    }

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <h1 className='navbar-container-title'><Link to='/'>Weather App</Link></h1>
                <div onClick={toggle} className={localStorage.getItem('mode') ? localStorage.getItem('mode') : 'mode-toggle'}>
                    <div className='mode-toggle-btn'></div>
                </div>
                <div onClick={collapse} className='bar'>
                    <svg width={30} height={30} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                </div>
                <ul className='navbar-container-list'>
                    <li className='navbar-container-list-item'><Link to='/contact'>Contact</Link></li>
                    <li className='navbar-container-list-item'><Link to='/about'>About</Link></li>
                    <li className='navbar-container-list-item'>Your Location: unknown</li>
                </ul>
            </div>
            <ul className='navbar-container-list-col'>
                <li className='navbar-container-list-item'><Link to='/contact'>Contact</Link></li>
                <li className='navbar-container-list-item'><Link to='/about'>About</Link></li>
                <li className='navbar-container-list-item'>Your Location: unknown</li>
            </ul>
        </div>
    )
}

export default Navbar
