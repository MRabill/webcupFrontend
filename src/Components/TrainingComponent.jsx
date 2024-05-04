import React, { useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiMapPin } from "react-icons/fi";
import { Button, Modal } from "antd"; // Import Button and Modal from antd
import { FaRegLightbulb, FaTrophy, FaCheckCircle } from "react-icons/fa"; // Import icons for mentor, ranking, and mission completed

const TrainingComponent = ({ onChangeAvatar, selectedAvatar }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  const Block = ({ className, ...rest }) => {
    return (
      <motion.div
        variants={{
          initial: {
            scale: 0.5,
            y: 50,
            opacity: 0,
          },
          animate: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className={twMerge(
          "col-span-4 rounded-lg border border-zinc-700 p-6",
          className
        )}
        style={{ opacity: "0.5" }} // Set opacity
        {...rest}
      />
    );
  };

  // Details for each mentor
  const mentors = {
    avatar4: {
      mission: "Save the World",
      power: "Flight, Super Strength",
      rank: "S",
    },
    avatar5: {
      mission: "Protect Innocents",
      power: "Telekinesis, Mind Control",
      rank: "A",
    },
    // Add details for more mentors if needed
  };

  const AboutUsBlock = () => {
    let title, content;
    switch (selectedAvatar) {
      case "avatar4":
        title = "Training Superheroes";
        content = (
          <>
            My passion is training superheroes to reach their full potential.
            <br />
            <span
              className="text-gold-400"
              style={{
                fontFamily: "Orbitron",
                fontSize: "1.0rem",
                color: "black", // Change font color to black
              }}
            >
              I specialize in honing superpowers, combat techniques, and tactical
              strategies. I have trained countless superheroes in mastering their
              abilities to defend the world against evil forces.
            </span>
          </>
        );
        break;
      case "avatar5":
        title = "Empowering Heroes";
        content = (
          <>
            My mission is to foster peace and harmony through empathy and understanding.
            <br />
            <span
              className="text-gold-400"
              style={{
                fontFamily: "Orbitron",
                fontSize: "1.0rem",
                color: "black", // Change font color to black
              }}
            >
              I dedicate myself to bridging the gap between different worlds, promoting unity
              and cooperation among all beings. Together, we can build a better future for
              generations to come.
            </span>
          </>
        );
        break;
      default:
        title = "Unknown";
        content = "No information available";
    }

    return (
      <Block className="col-span-12 text-3xl leading-snug" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
        <p
          style={{
            fontFamily: "Orbitron",
            color: "black", // Change font color to black
          }}
        >
          <strong>{title}</strong>
          <br />
          {content}
        </p>
      </Block>
    );
  };

  const LocationBlock = () => {
    let location;
    switch (selectedAvatar) {
      case "avatar4":
        location = "Metropolis";
        break;
      case "avatar5":
        location = "Atlantis";
        break;
      default:
        location = "Unknown";
    }

    return (
      <>
        <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3" style={{ background: "rgba(255, 255, 255, 0.5)" }}>
          <FiMapPin className="text-4xl" /> {/* Increase icon size */}
          <p className="text-center text-lg text-zinc-400" style={{ color: "black" }}>Superhero Classes Location: {location}</p>
        </Block>
        <div className="col-span-12 flex items-center gap-4 md:col-span-9">
          <div className="flex flex-col items-center gap-2">
            <FaRegLightbulb className="text-6xl text-white mb-2" /> {/* Increase icon size and add margin bottom */}
            <span className="text-white font-bold" style={{ fontFamily: "Orbitron" }}>Mission: {mentors[selectedAvatar].mission}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaTrophy className="text-6xl text-white mb-2" /> {/* Increase icon size and add margin bottom */}
            <span className="text-white font-bold" style={{ fontFamily: "Orbitron" }}>Power: {mentors[selectedAvatar].power}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaCheckCircle className="text-6xl text-white mb-2" /> {/* Increase icon size and add margin bottom */}
            <span className="text-white font-bold" style={{ fontFamily: "Orbitron" }}>Rank: {mentors[selectedAvatar].rank}</span>
          </div>
        </div>
      </>
    );
  };

  const Footer = () => {
    return <footer className="mt-12"></footer>;
  };

  // Modal Content Component
  const ModalContent = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "Orbitron", fontSize: "2rem", marginBottom: "20px" }}>Join My Course</h2>
        <p style={{ color: "black", fontSize: "1.2rem" }}>Unlock your potential and become a true hero!</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen  px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <AboutUsBlock />
        <LocationBlock />
      </motion.div>
      <div style={{ textAlign: "right" }}>
        <Button onClick={() => setIsModalVisible(true)} style={{ color: "white", fontWeight: "bold",  marginRight: "10px",}}>Join My Course</Button>
        <Button onClick={onChangeAvatar} style={{ color: "white", fontWeight: "bold" }}>Mentors</Button>
      </div>
      {/* Modal */}
      <Modal
        title={null}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        maskStyle={{ background: "linear-gradient(90deg, rgba(37,26,79,1) 5%, rgba(85,60,181,1) 100%)", opacity: "0.5" }} // Add background style
        bodyStyle={{ padding: "40px" }}
        width={400}
      >
        <ModalContent />
      </Modal>
    </div>
  );
};

export default TrainingComponent;
