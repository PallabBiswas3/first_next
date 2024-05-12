"use client"
import Image from "next/image";
import logo from "../../../public/logo.jpg";
const Navbar = () => {
    const handle1 = () => {
        window.location.href = '/Sign/Register';
    };
    const handle2 = () => {
        window.location.href = '/Sign/Login';
    };
    const handle3 = () => {
        window.location.href = '/Gallery';
    };
    return (
        <div className="navbar">
            <Image src={logo} alt="logo" className="navbar-brand" />
            <ul className="navbar-nav" id="navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/Gallery" onClick={handle3}>Gallery</a></li>
                <li><a href="/Sign/Login" onClick={handle2}>Login</a></li>
                <li><a href="/Sign/Register" onClick={handle1}>Register</a></li>
            </ul>
        </div>
    );
};
export default Navbar;