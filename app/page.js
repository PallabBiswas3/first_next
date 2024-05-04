import Image from "next/image";
import background_image from "/public/Stars.jpg";
import me from "/public/my.jpg";
import "./globals.css";

const home = () => {
  return (
    <div className="home">
      <div className="background-container">
        <Image src={background_image} alt="background" className="background" />

        <div className="text-overlay">
          <Image src={me} alt="me" className="me" />
          <h1 className="text">Hi Everyone</h1>
          <h3>I am PALLAB</h3>
          <h3>Software Developer</h3>
          <h3>Space Enthusiast</h3>
          <button className="btn">Hire me</button>
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
