import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Header from "../Common/Header/Header";

const FadfabsquadFirstContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  z-index: 0;
  background: #000;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    /* background-image: url("https://res.cloudinary.com/divbobkmd/image/upload/v1692517201/fadsquad-1_h0kyi9.png"); */
    background-image: url("https://res.cloudinary.com/divbobkmd/image/upload/v1692694205/fadsquad-1-compress_bvrn5h.jpg");
    background-size: cover;
    background-position: 50% 10%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-origin: border-box;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    scroll-behavior: smooth;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      rgb(0, 0, 0, 0.1),
      rgb(0, 0, 0, 0.5),
      rgb(0, 0, 0, 0.8)
    );
    transition: all 0.5s ease-in-out;
    scroll-behavior: smooth;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    color: #fff;
    height: 100%;
    width: 100%;
    transition: all 0.5s ease-in-out;
    scroll-behavior: smooth;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    column-gap: 3rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      column-gap: 0rem;
      row-gap: 1rem;
      padding: 0 1rem;
      top: 0rem;
      justify-content: center;
      align-items: center;
    }

    .left {
      height: 100%;
      width: 100%;
      transition: all 0.5s ease-in-out;
      scroll-behavior: smooth;
      z-index: 4;
      border-right: 2px #ffffff50 solid;
      border-left: 2px #ffffff50 solid;
      padding: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 15vh;

      @media screen and (max-width: 768px) {
        rotate: 90deg;
        display: none;
      }

      p {
        color: #ccc;
      }
    }

    .mid {
      height: 100%;
      width: 100%;
      transition: all 0.5s ease-in-out;
      scroll-behavior: smooth;
      z-index: 4;
      border-right: 2px #ffffff50 solid;
      border-left: 2px #ffffff50 solid;
      padding: 0 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 1000px) {
        min-width: 30vw;
      }
      @media screen and (max-width: 768px) {
        rotate: 90deg;
        justify-content: flex-end;
        align-items: center;
      }

      p {
        font-size: 1.3rem;
        width: 100%;
        color: #ccc;
        @media screen and (max-width: 1000px) {
          font-size: 1.5rem;
        }
        @media screen and (max-width: 768px) {
          rotate: -90deg;
          font-size: 1rem;
          padding-top: 23vh;
        }
      }
    }

    .right {
      height: 100%;
      width: 100%;
      transition: all 0.5s ease-in-out;
      scroll-behavior: smooth;
      z-index: 4;
      border-right: 2px #ffffff50 solid;
      border-left: 2px #ffffff50 solid;
      padding: 1rem;

      @media screen and (max-width: 768px) {
        rotate: 90deg;
        display: none;
      }
    }
    .right2 {
      height: 100%;
      width: 100%;
      transition: all 0.5s ease-in-out;
      scroll-behavior: smooth;
      z-index: 4;
      border-right: 2px #ffffff50 solid;
      border-left: 2px #ffffff50 solid;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      h3 {
        font-size: 5rem;
        font-weight: 100;
        color: #eee;
        font-family: "kurdasan";

        @media screen and (max-width: 768px) {
          rotate: -90deg;
          font-size: 4.5rem;
        }
      }

      @media screen and (max-width: 768px) {
        rotate: 90deg;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }

  .top {
    position: absolute;
    top: 10vh;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10rem;

    @media screen and (max-width: 1000px) {
      top: 13vh;
    }

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
      top: 18vh;
    }
    @media screen and (max-width: 376px) {
      padding: 0 1rem;
      top: 17vh;
    }

    h1 {
      font-size: 10rem;
      font-weight: 500;
      font-family: "kurdasan";
      color: #fff;

      @media screen and (max-width: 768px) {
        font-size: 3.8rem;
      }
      @media screen and (max-width: 376px) {
        font-size: 3.5rem;
      }
    }
  }
`;

function FirstSection() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        stiffness: 100,
        damping: 5,
      },
    },
  };

  return (
    <>
      <FadfabsquadFirstContainer>
        <motion.div className="bg"></motion.div>
        <div className="overlay"></div>
        <div className="content">
          <div className="left">
            <motion.p
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              FAD &rarr; FadFabSquad
            </motion.p>
          </div>
          <div className="mid">
            <motion.p
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              FadFabSquad is a premium influencer program created by Fad,
              specially crafted for fashion enthusiasts like you who are
              passionate about fashion and content creation. This is your chance
              to shine, connect, and grow. This program is designed to provide
              an opportunity for fashion enthusiasts, much like yourself, to
              become an integral part of India's first fashion community
              platform and receive the recognition they rightfully deserve.{" "}
              <br /> <br /> This program promotes collaboration with Fad and
              other fashion influencers, allowing them to create unique content
              and share it on social media platforms. It provides a community of
              like-minded fashion influencers who can support and motivate each
              other to reach their goals.
            </motion.p>
          </div>
          <div className="right"></div>
          <div className="right2">
            <motion.h3
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              Empowering Fashion Influencers with FadFabSquad
            </motion.h3>
          </div>
        </div>
        <div className="top">
          <motion.h1 variants={variants} initial="hidden" whileInView="visible">
            What is FadFabSquad?
          </motion.h1>
        </div>
      </FadfabsquadFirstContainer>
    </>
  );
}

export default FirstSection;
