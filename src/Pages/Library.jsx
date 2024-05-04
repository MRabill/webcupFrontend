import React, { useRef, useState, useEffect } from "react";
import { Carousel, Button } from 'antd';
import '../Styles/Library.css';
import yellowStone from "../Assets/stones/lightyellow.jpg";
import greenStone from "../Assets/stones/greenstone1080.jpg";
import blueStone from "../Assets/stones/lightblue.jpg";
import purpleStone from "../Assets/stones/purple1080.jpg";
import redStone from "../Assets/stones/redstone1080.jpg";
import soulStone from "../Assets/stones/soulstones.jpg";
import StarsCanvas from "../Components/canvas/Stars";
import {
    Navigate,
    useNavigate,
    useQuery,
    fetchData,
    url,
    Lottie,
    useMutation,
    postData,
} from "../../utils";

const Library = () => {
    const images = [
        yellowStone,
        greenStone,
        blueStone,
        purpleStone,
        redStone,
        soulStone
    ];

    const { isLoading: newsLoading, data: news = [] } = useQuery(
        ["news"],
        () => fetchData({ url: url?.GET_NEWS }),
        { refetchOnWindowFocus: false },
        {
            onError: (e) => {
                console.log("Error fetching developers: ", e);
            },
        }
    );

    const [assignedImages, setAssignedImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (news?.payload) {
            const assigned = news.payload.map((_, index) => images[index % images.length]);
            setAssignedImages(assigned);
        }
    }, [news]);

    const carouselRef = useRef(null);

    const prevSlide = () => {
        carouselRef.current.prev();
    };

    const nextSlide = () => {
        carouselRef.current.next();
    };

    const handleBeforeChange = (from, to) => {
        const background = document.querySelector(".background");
        const randomImage = images[to % images.length]; // Ensure to wrap around the index
        background.style.backgroundImage = `url(${randomImage})`;
        setCurrentSlide(to);
    };

    return (
        <>
            <div className="relative z-10">
                <StarsCanvas />
            </div>
            <div className="library-container">
                <div className="background"></div>
                <div className="content-container">
                    <div className="slider-container">
                        <Carousel ref={carouselRef} beforeChange={handleBeforeChange}>
                            {news?.payload?.map((newsItem, index) => (
                                <div key={index} className="slide">
                                    <div className="slide-content">
                                        <p className="slide-title">{newsItem.newsName} {assignedImages[index]}</p>
                                        <img src={assignedImages[index]} alt={`image${index}`} />
                                        <div className="dark-overlay"></div>
                                        <p className="slide-description">{newsItem.newsDetails}</p>
                                    </div>
                                </div>
                            ))}
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
