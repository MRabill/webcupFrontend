import React, { useRef } from "react";
import { Carousel, Button } from 'antd';
import '../Styles/Library.css';
import yellowStone from "../Assets/stones/lightyellow.jpg";
import greenStone from "../Assets/stones/greenstone1080.jpg";
import blueStone from "../Assets/stones/lightblue.jpg";
import purpleStone from "../Assets/stones/purple1080.jpg";
import redStone from "../Assets/stones/redstone1080.jpg";
import soulStone from "../Assets/stones/soulstones.jpg";
import StarsCanvas from "../Components/canvas/Stars";

const Library = () => {
    const carouselRef = useRef(null);

    const prevSlide = () => {
        carouselRef.current.prev();
    };

    const nextSlide = () => {
        carouselRef.current.next();
    };

    const handleBeforeChange = (from, to) => {
        const background = document.querySelector(".background");
        const images = [
            yellowStone,
            greenStone,
            blueStone,
            purpleStone,
            redStone,
            soulStone
        ];
        background.style.backgroundImage = `url(${images[to]})`;
    };

    return (
        <>
            <div className=" relativve z-10">
                <StarsCanvas />
            </div>
            <div className="library-container">
                <div className="background"></div>
                <div className="content-container">
                    <div className="slider-container">
                        <Carousel ref={carouselRef} beforeChange={handleBeforeChange}>
                            <div>
                                <div className="slide-content">
                                    <img src={yellowStone} alt="image1" />
                                    <div className="dark-overlay"></div>
                                    <p>Yellow Stone Text</p>
                                    <p className="slide-description">Description for Yellow Stone</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-content">
                                    <img src={greenStone} alt="image2" />
                                    <div className="dark-overlay"></div>
                                    <p>Green Stone Text</p>
                                    <p className="slide-description">Description for Green Stone</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-content">
                                    <img src={blueStone} alt="image3" />
                                    <div className="dark-overlay"></div>
                                    <p>Blue Stone Text</p>
                                    <p className="slide-description">Description for Blue Stone</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-content">
                                    <img src={purpleStone} alt="image4" />
                                    <div className="dark-overlay"></div>
                                    <p>Purple Stone Text</p>
                                    <p className="slide-description">Description for Purple Stone</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-content">
                                    <img src={redStone} alt="image5" />
                                    <div className="dark-overlay"></div>
                                    <p>Red Stone Text</p>
                                    <p className="slide-description">Description for Red Stone</p>
                                </div>
                            </div>
                            <div>
                                <div className="slide-content">
                                    <img src={soulStone} alt="image6" />
                                    <div className="dark-overlay"></div>
                                    <p>Soul Stone Text</p>
                                    <p className="slide-description">Description for Soul Stone</p>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className="controls">
                        <Button onClick={prevSlide} className="control-button" shape="circle" icon={<i className="fas fa-chevron-left"></i>} />
                        <Button onClick={nextSlide} className="control-button" shape="circle" icon={<i className="fas fa-chevron-right"></i>} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Library;
