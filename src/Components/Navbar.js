import React from 'react'
import './Navbar.css'
function Navbar(props) {
    return (
        <div>
            <div className="navbar">
                <a>{props.brand}</a>
                <div className='centeredItems'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                </div>

            </div>
        </div>
    )
}

export default Navbar
