import Image from "next/image";
import logo from "../../../public/image1.jpg";
const Navbar = () => {
    return (
        <div className="navbar">
            <Image src={logo} alt="logo" className="navbar-brand" />
            <ul className="navbar-nav" id="navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );
};
export default Navbar;