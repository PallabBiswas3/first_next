"use client"
import "./style.css";
import React, { useEffect } from 'react';
import image1 from "/public/dr v narayan.jpeg";
import image2 from "/public/fiery.jpg";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';
const GuestDetail = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".timeline li");

        const isElementInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const callbackFunc = () => {
            for (let i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        };

        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

        return () => {
            window.removeEventListener("load", callbackFunc);
            window.removeEventListener("resize", callbackFunc);
            window.removeEventListener("scroll", callbackFunc);
        };
    }, []);

    const timelineItems = [
        { title: 'Director', content: 'Dr. V Narayanan, a Distinguished Scientist in ISRO, currently serves as the Director of the Liquid Propulsion Systems Centre (LPSC), a key division of the Indian Space Research Organisation (ISRO).' },
        { title: 'Contributions', content: 'He has contributed significantly to various missions, including the GSLV Mk-III M1/Chandrayaan-2.' },
        { title: 'Development', content: 'He oversaw the development and delivery of the L110 Liquid Core Stage and C25 Cryogenic Stage for the GSLV Mk-III M1/Chandrayaan-2 mission.' },
        { title: 'Propulsion', content: 'Additionally, he played a crucial role in developing propulsion systems for the orbiter and Vikram Lander.' },
        { title: 'Thrusters', content: 'This included throttleable thrusters for soft landings during the Chandrayaan-2 Mission.' },
        { title: 'Leadership', content: 'Dr. Narayanan\'s achievements extend to leading the C25 Cryogenic Project.' },
        { title: 'Maiden', content: 'He made the C25 Cryogenic Project instrumental in the successful maiden launch of the GSLV Mk III.' },
        { title: 'Operationalization', content: 'His contributions also include the operationalization of the Cryogenic Upper Stage (CUS) for the GSLV Mk-II.' },
        { title: 'Design', content: 'He was involved in the design of a 200-tonne thrust Lox-Kerosene Semi Cryogenic Rocket Engine.' },
        { title: 'Early Career', content: 'In his early career, he worked on the development of Solid Propulsion Systems for launch vehicles.' },
        { title: 'Education', content: 'Dr. Narayanan is an alumnus of the Indian Institute of Technology Kharagpur, where he achieved First Rank in M.Tech. in Cryogenic Engineering in 1989 and completed his Ph.D. in Aerospace Engineering in 2001.' },
        { title: 'Awards', content: 'He has received numerous awards, including the Silver Medal from IIT Kharagpur, the Gold Medal from the Astronautical Society of India (ASI), and the ASI Award for Rocket and Related Technologies Development.' },
    ];

    return (
        <div className="pal-guest">
            <section id="hero">
                <Image src={image1} alt="Dr. V Narayanan" id="speaker-photo"></Image>
                <div class="details">
                    <h1>Dr. V Narayanan</h1>
                    <h2>Distinguished Scientist, ISRO</h2>
                    <p><i class="fas fa-calendar-alt"></i> Date: June 20, 2024</p>
                    <p><i class="fas fa-clock"></i> Time: 10 AM</p>
                    <p><i class="fas fa-map-marker-alt"></i> Location: Netaji Auditorium</p>

                </div>
            </section>
            <section className="timeline">
                <ul>
                    {timelineItems.map((item, index) => (
                        <li key={index}>
                            <div>
                                <h2 className="head">{item.title}</h2>
                                {item.content}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="center-image">
                    <Image src={image2} alt="Contact Details" className="image2" />
                    <div className="contact-details">
                        <p className="con">Contact</p>
                        <p>John Doe</p>
                        <p><i className="fas fa-phone icon"></i>Phone: +123 456 7890</p>
                    </div>
                </div>
            </section>



        </div>
    );
}
export default GuestDetail;