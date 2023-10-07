import React, { useState } from 'react'
import './Navbar.css'
function Navbar(props) {

    return (
        <div>
            <div className="navbar">
                <a style={{ backgroundColor: "pink", fontSize: "20px", fontWeight: "bold" }}>{props.brand}</a>
                <div className='centeredItems'>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                    <a style={props.myTheme} onClick={props.changeTheme} >{props.myTheme.theme}</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
Navbar.defaultProps = {
    brand: "Enter Your Name"
}