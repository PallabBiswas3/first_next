"use client"
import "./style.css";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '/public/image2.jpg';
import image2 from '/public/image3.jpg';
import image3 from '/public/image4.jpg';
import image4 from '/public/image5.jpg';
import image5 from '/public/image6.jpg';
import image6 from '/public/image7.jpg';


const slidesData = [
    {
        id: 1,
        title: 'Slide One',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic maxime, voluptatibus labore doloremque vero!',
        image: image2,
    },
    {
        id: 2,
        title: 'Slide Two',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic maxime, voluptatibus labore doloremque vero!',
        image: image3,
    },
    {
        id: 3,
        title: 'Slide Three',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic maxime, voluptatibus labore doloremque vero!',
        image: image4,
    },
    {
        id: 4,
        title: 'Slide Four',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic maxime, voluptatibus labore doloremque vero!',
        image: image5,
    },
    {
        id: 5,
        title: 'Slide Five',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic maxime, voluptatibus labore doloremque vero!',
        image: image6,
    },
    {
        id: 6,
        title: 'Slide Six',
        content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic maxime, voluptatibus labore doloremque vero!',
        image: image1,
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='slider'>
            {slidesData.map((slide, index) => (
                <div
                    key={slide.id}
                    className='slide'

                >
                    <Image src={slidesData.image} alt="background image"></Image>
                    <div className='content'>
                        <h1>{slide.title}</h1>
                        <p>{slide.content}</p>
                    </div>
                </div>
            ))}
            <div className='buttons'>
                <button id="prev" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button id="next" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Slider;
