"use client"
import Image from "next/image";
import image1 from '/public/image_life1.jpg';
import image2 from '/public/image_life2.jpg';
import image3 from '/public/image_universe1.jpg';
import image4 from '/public/image_universe2.jpg';
import image5 from '/public/image_space1.jpg';
import image6 from '/public/image_space2.webp';
import image7 from '/public/Stars.jpg';
import image8 from '/public/myself.jpg';
import image9 from '/public/image1.jpg';

import "./gallery.css";

const Gallery = () => {
    const handleBackClick = () => {
        var carousel = document.getElementById("carousel");
        carousel.style.animationDirection = "initial";
    };

    const handleForwardClick = () => {
        var carousel = document.getElementById("carousel");
        carousel.style.animationDirection = "reverse";
    };

    return (
        <div>
            <h1>3d images gallery</h1>
            <div className="container">
                <div id="carousel">
                    <figure><Image src={image1} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                    <figure><Image src={image2} width="300px" height="176px" alt="CSS 3D Gallery " className="img" /></figure>
                    <figure><Image src={image3} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                    <figure><Image src={image4} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                    <figure><Image src={image5} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                    <figure><Image src={image6} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                    <figure><Image src={image7} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                    <figure><Image src={image8} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                    <figure><Image src={image9} width="300px" height="176px" alt="3D Carousel Gallery" className="img" /></figure>
                </div>
                <div>
                    <button type="button" id="buttonBack1" className="buttonBack1" onClick={handleBackClick}>BACK</button>
                    <button type="button" id="buttonFoward1" className="buttonFoward1" onClick={handleForwardClick}>FORWARD</button>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
