"use client";
import React from "react";
import "./navbar.css" // Import CSS module for styling

const Navbar = () => {
    const handle1 = () => {
        window.location.href = '/';
    };
    const handle2 = () => {
        window.location.href = '/Sign/Gallery';
    };
    const handle3 = () => {
        window.location.href = '/Sign/Login';
    };
    const handle4 = () => {
        window.location.href = '/Sign/Register';
    };
    return (

        <nav className="navbar">

            <a href="#" className="logo">NSSC</a>
            <input type="checkbox" id="chkToggle"></input>
            <ul className="mainNav" id="js-menu">
                <li>
                    <a href="/" className="navLinks" onClick={handle1}>Home</a>
                </li>
                <li>
                    <a href="/Sign/Gallery" className="navLinks" onClick={handle2}>Gallery</a>
                </li>

                <li>
                    <a href="/Sign/Login" className="navLinks" onClick={handle3}>Login</a>
                </li>
                <li>
                    <a href="/Sign/Register" className="navLinks" onClick={handle4}>Register</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
