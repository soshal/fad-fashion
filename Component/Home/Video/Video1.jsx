import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Video1Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 0 1rem;
  }

  video {
    height: 90vh;
    width: 100%;
    object-fit: cover;
    border-radius: 500px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      height: 90vh;
      width: 100%;
      border-radius: 500px;
    }
  }

  .cursor {
    position: absolute;
    height: 10rem;
    width: 10rem;
    background: #202020;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    transition: all 1s ease-in-out;
    font-size: 1.5rem;
    letter-spacing: 1px;
    cursor: pointer;
    /* mix-blend-mode: difference; */
    border: none;
    outline: none;
    color: #fff;
  }
`;

function Video1() {
  const videoRef = useRef(null);
  const cursorRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleVideoPlay = () => {
      try {
        if (isPlaying) {
          videoRef.current.muted = false;
          videoRef.current.play();
          cursorRef.current.style.display = "none";
          cursorRef.current.style.transition = "display 1s ease-in-out";
        } else {
          videoRef.current.muted = true;
          videoRef.current.pause();
          cursorRef.current.style.display = "flex";
          cursorRef.current.style.transition = "display 1s ease-in-out";
        }
      } catch (error) {
        console.error("Error occurred while playing the video:", error);
      }
    };

    handleVideoPlay();
  }, [isPlaying]);

  const handleVideoClick = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <Video1Container>
      <motion.video
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1.5,
          transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
            repeat: false,
            stiffness: 100,
          },
        }}
        ref={videoRef}
        autoPlay
        loop
        onClick={handleVideoClick}
        src="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
        className="video"
      />
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1.5,
          transition: {
            duration: 1,
            ease: "easeOut",
            delay: 0.3,
            repeat: false,
            type: "spring",
            stiffness: 100,
          },
        }}
        onClick={handleVideoClick}
        ref={cursorRef}
        className="cursor"
      >
        Play
      </motion.div>
    </Video1Container>
  );
}

export default Video1;
