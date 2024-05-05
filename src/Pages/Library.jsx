import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import InfiniteStones from "../Components/canvas/infinitestones";
import StarsCanvas from "../Components/canvas/Stars";

const Library = () => {
    // Dummy data for superhero news
    const superheroNews = [
        {
            title: "Galactic Guardian Saves Earth",
            description: "The Galactic Guardian thwarted a cosmic threat that endangered the planet. The villain, Cosmic Destroyer, attempted to unleash chaos by manipulating reality. However, the Galactic Guardian intervened, neutralizing the threat and restoring peace.",
        },
        {
            title: "Unbreakable Shield Defends Metropolis",
            description: "Metropolis was under siege by alien invaders led by Warlord X. The Unbreakable Shield repelled the invaders, securing victory and ensuring the city's safety.",
        },
        {
            title: "Shadow Reaper Thwarts Doomsday Cult",
            description: "The enigmatic Shadow Reaper foiled a doomsday cult's plans to unleash an apocalypse. With mastery of shadow magic, he prevented the apocalypse, saving millions.",
        },
        {
            title: "Starlight Sentinel Rescues Multiverse",
            description: "The Starlight Sentinel prevented an interdimensional crisis by sealing rifts across the Multiverse. Her heroic deeds ensured the survival of countless worlds.",
        },
        {
            title: "Emerald Knight Battles Ancient Titan",
            description: "The Emerald Knight protected Atlantis from the colossal titan, Leviathan, using the power of nature. He emerged victorious, safeguarding Atlantis from destruction.",
        },
        {
            title: "Spectra Saviour Foils Mad Scientist's Plan",
            description: "The Spectra Saviour disrupted a mad scientist's plan to harness cosmic energy, saving humanity from untold devastation.",
        },
    ];

    return (
        <div className="relative">
            {/* Background */}
            <div
                className="absolute inset-0 bg-gray-900"
                style={{
                    zIndex: -1,
                }}
            ></div>

            {/* StarsCanvas */}
            <div className="absolute inset-0 z-0">
                <StarsCanvas />
            </div>

            <div className="flex justify-between  h-screen z-10">
                {/* Left side: Superhero news */}
                <div className="flex flex-col justify-center items-center w-1/4">
                    {superheroNews.slice(0, 3).map((newsItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ rotateY: -45 }}
                            animate={{ rotateY: 0 }}
                            exit={{ rotateY: -45 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="w-full mb-4"
                        >
                            <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
                                <div
                                    style={{
                                        background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)",
                                        opacity: "0.5",
                                    }}
                                    className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl"
                                >
                                    <h2 className="text-white text-lg font-semibold mb-2">{newsItem.title}</h2>
                                    <p className="text-white text-sm">{newsItem.description}</p>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>

                {/* Middle: InfiniteStones */}
                <div className="flex justify-center w-1/2">
                    <InfiniteStones />
                </div>

                {/* Right side: Superhero news */}
                <div className="flex flex-col justify-center items-center w-1/4">
                    {superheroNews.slice(3).map((newsItem, index) => (
                        <motion.div
                            key={index}
                            initial={{ rotateY: 45 }}
                            animate={{ rotateY: 0 }}
                            exit={{ rotateY: 45 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="w-full mb-4"
                        >
                            <Tilt className="Tilt" options={{ max: 45, scale: 1.1 }}>
                                <div
                                    style={{
                                        background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)",
                                        opacity: "0.5",
                                    }}
                                    className="Tilt-inner bg-purple-900 shadow-md p-4 rounded-2xl"
                                >
                                    <h2 className="text-white text-lg font-semibold mb-2">{newsItem.title}</h2>
                                    <p className="text-white text-sm">{newsItem.description}</p>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Library;
