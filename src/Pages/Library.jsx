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


    const carouselRef = useRef(null);

    const prevSlide = () => {
        carouselRef.current.prev();
    };

    const nextSlide = () => {
        carouselRef.current.next();
    };

    const handleBeforeChange = (from, to) => {
        const background = document.querySelector(".background");
        const randomImage = images[to];

        background.style.backgroundImage = `url(${randomImage})`;
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
                            {
                                news?.payload?.map((newsItem, index) => {
                                    const randomIndex = Math.floor(Math.random() * images.length);
                                    const randomImage = images[randomIndex];
                                    return (
                                        <div key={index} className="slide">
                                            <div className="slide-content">
                                                <h2 className="slide-title">{newsItem.newsName}</h2>
                                                <img src={randomImage} alt={`image${index}`} />
                                                <div className="dark-overlay"></div>
                                                <p className="slide-description">{newsItem.newsDetails}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                            {/* <div>
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
                            </div> */}
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
