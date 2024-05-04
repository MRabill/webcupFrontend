import React, { useRef } from "react";
import { Carousel, Button } from 'antd';
import '../Styles/Library.css';
import backgroundImagePic from "../Assets/background/backgroundImage.jpg";

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
            backgroundImagePic,
            backgroundImagePic,
            backgroundImagePic,
            backgroundImagePic,
            backgroundImagePic,
            backgroundImagePic
        ];
        background.style.backgroundImage = `url(${images[to]})`;
    };

    return (
        <div className="library-container">
            <div className="background"></div>
            <div className="content-container">
                <h1>Library Page</h1>
                <div className="slider-container">
                    <Carousel autoplay ref={carouselRef} beforeChange={handleBeforeChange}>
                        <div><img src={backgroundImagePic} alt="image1" /></div>
                        <div><img src={backgroundImagePic} alt="image2" /></div>
                        <div><img src={backgroundImagePic} alt="image3" /></div>
                        <div><img src={backgroundImagePic} alt="image4" /></div>
                        <div><img src={backgroundImagePic} alt="image5" /></div>
                        <div><img src={backgroundImagePic} alt="image6" /></div>
                    </Carousel>
                </div>
                <div className="controls">
                    <Button onClick={prevSlide} className="control-button" shape="circle" icon={<i className="fas fa-chevron-left"></i>} />
                    <Button onClick={nextSlide} className="control-button" shape="circle" icon={<i className="fas fa-chevron-right"></i>} />
                </div>
            </div>
        </div>
    );
};

export default Library;
