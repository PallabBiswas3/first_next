import Image from "next/image";
import background_image from "/public/Stars.jpg";
import "./globals.css";

const home = () => {
  return (
    <div className="home">
      <div className="background-container">
        <Image src={background_image} alt="background" className="background" />
        <div className="text-overlay">
          <h1>Hi Everyone</h1>
        </div>
      </div>
      <div>
        <h1 className="title">Welcome to Space Blogs</h1>
        <div className="buttonContainer">
          <a href="#" className="btnBigRed">Extraterrestrial Life</a>
          <a href="#" className="btnBigRed">Space Travel</a>
          <a href="#" className="btnBigRed">Our Universe</a>
        </div>
      </div>
    </div>
  );
}

export default home;
