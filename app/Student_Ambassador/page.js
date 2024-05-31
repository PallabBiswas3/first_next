"use client";
import "./style.css";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import image1 from "/public/images_student/nssc.jpg";
import image2 from "/public/images_student/logo-spats-dark.jpg";
import image3 from "/public/images_student/kgplogo.png";

import back from "/public/images_student/back.png";
import next from "/public/images_student/next.png";
import communication from "/public/images_student/communication.jpeg";
import leader from "/public/images_student/leadership.jpeg";
import market from "/public/images_student/marketing.jpeg";
import network from "/public/images_student/network.jpeg";
import time from "/public/images_student/time.jpeg";
import strategy from "/public/images_student/strategy.jpeg";
import intern from "/public/images_student/intern.jpeg";
import goodie from "/public/images_student/goodies.jpeg";
import best from "/public/images_student/bestperformer.jpeg";
import vip from "/public/images_student/vip.jpeg";

const Studentpage = () => {
    const scrollContainerRef = useRef(null);
    const backBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    const [hoveredIncentive, setHoveredIncentive] = useState(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const backBtn = backBtnRef.current;
        const nextBtn = nextBtnRef.current;

        const handleWheel = (evt) => {
            evt.preventDefault();
            scrollContainer.style.scrollBehavior = 'auto';
            scrollContainer.scrollLeft += evt.deltaY;
        };

        const handleNextClick = () => {
            scrollContainer.style.scrollBehavior = 'smooth';
            scrollContainer.scrollLeft += 900;
        };

        const handleBackClick = () => {
            scrollContainer.style.scrollBehavior = 'smooth';
            scrollContainer.scrollLeft -= 900;
        };

        scrollContainer.addEventListener('wheel', handleWheel);
        nextBtn.addEventListener('click', handleNextClick);
        backBtn.addEventListener('click', handleBackClick);

        return () => {
            scrollContainer.removeEventListener('wheel', handleWheel);
            nextBtn.removeEventListener('click', handleNextClick);
            backBtn.removeEventListener('click', handleBackClick);
        };
    }, []);

    return (
        <div className="pallab-nssc">


            <div className="pallab-text-overlay">
                <Image src={image1} alt="nssc_logo" className="pallab-nssc-logo" />
                <Image src={image3} alt="kgp_logo" className="pallab-kgp-logo" />
                <Image src={image2} alt="spats_logo" className="pallab-spats-logo" />
            </div>

            <div className="pallab-about good">
                <h1 className="pallab-text">NSSC</h1>
                <p>
                    The National Students' Space Challenge (NSSC) is the centrepiece of spAts.
                    As the name suggests, NSSC is a national-level fest dedicated to space
                    and space technology. We operate intending to spread awareness about the
                    space and provide a platform to students yearning to explore the possibilities
                    of the vast expanses of the unknown.
                </p>
            </div>

            <div className="pallab-why">
                <div className="pallab-text2">WHY SA</div>
                <div className="pallab-galleryWrap">
                    <Image src={back} className="pallab-backBtn" ref={backBtnRef} alt="Back" width={50} height={50} />
                    <div className="pallab-gallery" ref={scrollContainerRef}>
                        <div className="pallab-gallery-row">
                            <span><Image src={time} alt="Image 1" width={300} height={270} /></span>
                            <span><Image src={strategy} alt="Image 2" width={300} height={270} /></span>
                            <span><Image src={leader} alt="Image 3" width={300} height={270} /></span>
                        </div>
                        <div className="pallab-gallery-row">
                            <span><Image src={market} alt="Image 4" width={300} height={270} /></span>
                            <span><Image src={network} alt="Image 5" width={300} height={270} /></span>
                            <span><Image src={communication} alt="Image 6" width={300} height={270} /></span>

                        </div>

                    </div>
                    <Image src={next} className="pallab-nextBtn" ref={nextBtnRef} alt="Next" width={50} height={50} />
                </div>
            </div>
            <div className="pallab-incentives">
                <div className="pallab-text2">INCENTIVES</div>

                <div className="pallab-incentives-gallery-row">
                    <span className="incentive-box"
                        onMouseEnter={() => setHoveredIncentive('intern')}
                        onMouseLeave={() => setHoveredIncentive(null)}>
                        <Image src={intern} alt="Image 1" width={200} height={200} />
                    </span>
                    <span className="incentive-box"
                        onMouseEnter={() => setHoveredIncentive('goodie')}
                        onMouseLeave={() => setHoveredIncentive(null)}>
                        <Image src={goodie} alt="Image 2" width={200} height={200} />
                    </span>
                    <span className="incentive-box"
                        onMouseEnter={() => setHoveredIncentive('best')}
                        onMouseLeave={() => setHoveredIncentive(null)}>
                        <Image src={best} alt="Image 3" width={200} height={200} />
                    </span>
                    <span className="incentive-box"
                        onMouseEnter={() => setHoveredIncentive('vip')}
                        onMouseLeave={() => setHoveredIncentive(null)}>
                        <Image src={vip} alt="Image 3" width={200} height={200} />
                    </span>
                </div>
                <div>
                    {hoveredIncentive === 'intern' && (
                        <div className="pallab-about-intern">
                            <p>
                                Certificate of Appreciation signed by chairman of KCSTC, the official contact point of ISRO at IIT Kharagpur.
                                Certificate of Completion to those who bring more than 50 participants.
                            </p>
                        </div>
                    )}
                    {hoveredIncentive === 'best' && (
                        <div className="pallab-about-best">
                            <p>
                                Chance for the top 10 ambassadors to have their names mentioned on the official social media handles of NSSC.
                                Best Student Ambassador trophy for the SA with maximum participation.
                            </p>
                        </div>
                    )}
                    {hoveredIncentive === 'goodie' && (
                        <div className="pallab-about-goodie">
                            <p>
                                Goodies and Merchandise based on your performance.
                            </p>
                        </div>
                    )}
                    {hoveredIncentive === 'vip' && (
                        <div className="pallab-about-vip">
                            <p>
                                Free or Discounted Registration. And VIP Event ticket for each Student Ambassador who received a completion certificate.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="pallab-responsibility">
                <div className="pallab-text2">RESPONSIBILITIES</div>
                <div className="pallab-responsibility-text">
                    <span className="pallab-box"><p>Ensuring participation from the college and encourage their participation in the fest by highlighting the unique opportunities.</p></span>
                    <span className="pallab-box"><p>Being a point of contact for passing every detail of the fest.</p></span>
                    <span className="pallab-box"><p>Publicizing the fest in the college through posters, sharing of social media posts, emails, etc.</p></span>
                    <span className="pallab-box"><p>Collaborate closely with the NSSC Team to facilitate the smooth execution of Space Technology Awareness Campaigns (STAC)</p></span>
                </div>
            </div>
            <div className="pallab-join">
                <h1>Student Ambassador</h1>
                <h3>Get a chance to become a part of India's largest Space-Tech Fest</h3>
                <button>JOIN US</button>
                <Image></Image>
            </div>
            <div className="pallab-contact">
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Studentpage;
