import Image from "next/image";
import back_image from "/public/Stars.jpg";
import "./globals.css";
const home = () => {
  return (
    <div>
      <div className="home">
        <Image src={back_image} alt="logo" className="logo" width={1000}
          height={600} />
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