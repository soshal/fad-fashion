import React, { useState, useRef } from "react";
import styled from "styled-components";
import WideButton from "@/Component/Animation/Buttons/WideButton";
import { motion } from "framer-motion";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";


const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    min-height: 110vh;
    height: 100%;
    padding: 0 1rem;
    flex-direction: column;
  }

  .left {
    display: flex;
    width: 75%;
    position: relative;
    z-index: 0;
    height: 83vh;
    margin-top: 15vh;

    @media screen and (max-width: 768px) {
      width: 100%;
      padding-top: 20vh;
      height: 75vh;
    }

    video {
      height: 83vh;
      width: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      border-radius: 30px;

      @media screen and (max-width: 768px) {
        border-radius: 20px;
        height: 75vh;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 83vh;
      width: 100%;
      background: rgb(0, 0, 0, 0.5);
      z-index: 2;
      border-radius: 30px;

      @media screen and (max-width: 768px) {
        border-radius: 20px;
        height: 75vh;
      }
    }

    .content {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      .left {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 2rem;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 2rem;

        .top {
          h1 {
            font-family: "roboto";
            font-size: 10rem;
            font-weight: 700;
            width: 80%;

            @media screen and (max-width: 768px) {
              font-size: 7rem;
            }
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          @media screen and (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 3rem;
          }

          p {
            font-family: "roboto";
            line-height: 1.3;
            width: 50%;
            font-size: 1.3rem;
            background: #00000050;
            /* background: #9288F8; */
            padding: 2rem 3rem;
            border-radius: 100px;
            color: #ffffff;
            backdrop-filter: blur(15px);
            font-weight: 500;

            @media screen and (max-width: 768px) {
              width: 100%;
              font-size: 1.5rem;
              border-radius: 0px;
              padding: 0;
              background: transparent;
              backdrop-filter: blur(0);
            }
          }
        }
      }
    }
  }

  .right {
    width: 30%;
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 83vh;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 1rem;
      gap: 2rem;
    }

    .up {
      height: 50%;
      width: 100%;
      position: relative;
      z-index: 0;
      overflow: hidden;
      border-radius: 30px;

      .upvideo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: 30px;
        transition: transform 0.5s ease; 
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgb(0, 0, 0, 0.3);
        z-index: 2;
        border-radius: 30px;
      }

      a {
        text-decoration: none;
        color: #fff;
        .content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
          flex-direction: column;
          height: 100%;
          padding: 2rem;
          cursor: pointer;

          .top {
            display: flex;
            gap: 3rem;
          }
        }
      }

      &:hover .upvideo {
        transform: scale(1.05); 
      }
    }

    .down {
      height: 50%;
      width: 100%;
      position: relative;
      z-index: 0;
      overflow: hidden;
      border-radius: 30px;

      .downvideo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: 30px;
        transition: transform 0.5s ease; 
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgb(0, 0, 0, 0.3);
        z-index: 2;
        border-radius: 30px;
        /* backdrop-filter: blur(10px); */
      }

      a {
        text-decoration: none;
        color: #fff;
        .content {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
          flex-direction: column;
          height: 100%;
          padding: 2rem;
          cursor: pointer;

          .top {
            display: flex;
            gap: 3rem;
          }
        }
      }

      &:hover .downvideo {
        transform: scale(1.05); /* Updated the property to transform */
      }
    }
  }
`;

function Hero() {
  const [mute, setMute] = useState(true);
  const videoRef = useRef(null);

  const handleMute = () => {
    setMute(!mute);
    videoRef.current.muted = !mute;
  };

  return (
    <AppContainer>
      <div className="left">
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
         
          src="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
          className="bgvideo"
        />
        <div className="overlay" />
        <div className="content">
          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.3,
                repeat: false,
                type: "spring",
                stiffness: 100,
              },
            }}
            
            className="left"
          >
            <div className="top">
              <h1>
                Welcome to <span>FAD</span>{" "}
              </h1>
            </div>
            <div className="bottom">
              <WideButton
                text="Join FAD"
                fontsize="1.5rem"
                color="#fff"
                hoverbg="#ffffff"
                bg="#ff005c"
                hovercolor="#111"
                bordercolor="#ff005c"
                mpaddingx="4rem"
                mpaddingy="1.2rem"
                mfontsize="1rem"
                title="Join Fad"
                height="4.5rem"
                width="14rem"
              />
              <p>
                Welcome to FAD - the revolutionary fashion community platform
                where you can freely express your funky style, learn, and
                connect with like-minded fashion enthusiasts from all over the
                world. Embrace your fashion passion and earn money for your
                skills! Indulge without fear of judgment. Join us now
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="right">
        <div className="up">
      
          <img
            className="upvideo"
            src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=500"
            alt="fad-fashion"
          />
          <div className="overlay"></div>
          <Link href="/about">
            <div className="content">
              <div className="top">
                <p>Article</p>
                <EastIcon />
              </div>
              <div className="bottom">
                <h1>What is FAD?</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="down">
          {" "}
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
            src="https://res.cloudinary.com/divbobkmd/video/upload/v1690745994/fad-reel-2_AdobeExpress_simbrc.mp4"
            className="downvideo"
          /> */}
          <img
            src="https://plus.unsplash.com/premium_photo-1668485968681-fa4a97d09331?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=500"
            alt="fad-fashion"
            className="downvideo"
          />
          <div className="overlay"></div>
          <Link href="/howfadworks">
            <div className="content">
              {" "}
              <div className="top">
                <p>Article</p>
                <EastIcon />
              </div>
              <div className="bottom">
                <h1>How it works?</h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </AppContainer>
  );
}

export default Hero;
