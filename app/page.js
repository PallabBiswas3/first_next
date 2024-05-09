"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import background_image from "/public/Stars.jpg";
import me from "/public/my.jpg"
import "./globals.css";
import React from "react";
const Home = () => {
  const handle1 = () => {
    window.location.href = '/blogs/life';
  };
  const handle2 = () => {
    window.location.href = '/blogs/space';
  };
  const handle3 = () => {
    window.location.href = '/blogs/universe';
  };
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
        <div className="text-overlay2">
          <h1>Explore More</h1>
          <p>Unlock Your Potential and upgrade your skill with us.</p>
          <button className="custom-btn btn-7"><span>Read More</span></button>
        </div>
      </div>
      <div>
        <h1 className="title">Welcome to Space Blogs</h1>
        <div className="buttonContainer">
          <a href="#" className="btnBigRed" onClick={handle1}>Extraterrestrial Life</a>
          <a href="#" className="btnBigRed" onClick={handle2}>Space Travel</a>
          <a href="#" className="btnBigRed" onClick={handle3}>Our Universe</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
