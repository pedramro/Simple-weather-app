import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <h1 className='navbar-container-title'>Weather App</h1>
                <div className='mode-toggle toggle'>
                    <div className='mode-toggle-btn'></div>
                </div>
                <ul className='navbar-container-list'>
                    <li className='navbar-container-list-item'>Contact</li>
                    <li className='navbar-container-list-item'>About</li>
                    <li className='navbar-container-list-item'>Your Location: unknown</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
