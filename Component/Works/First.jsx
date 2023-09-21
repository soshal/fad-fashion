import React from "react";
import styled from "styled-components";
import svg1 from "@/Assets/Images/iPhone 15-1.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Firsts = styled.div`
  width: 100%;
  min-height: 85vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 5rem;
  margin-top: 5rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 3rem;
    margin-top: 0;
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 30vh;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
      min-height: 30vh;
      align-items: center;
    }

    @media screen and (max-width: 768px) {
      min-height: 30vh;
      align-items: center;
    }

    h1 {
      font-size: 13rem;
      font-family: "kurdasan";
      color: #fff;

      @media screen and (max-width: 1000px) {
        font-size: 10rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 5rem;
      }
    }

    p {
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 1.5;
      letter-spacing: 0;
      color: #ccc;
      width: 70%;

      @media screen and (max-width: 1000px) {
        font-size: 2rem;
        width: 100%;
      }

      @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        width: 100%;
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 85vh;

    @media screen and (max-width: 1000px) {
      min-height: 50vh;
    }

    @media screen and (max-width: 768px) {
      min-height: 70vh;
    }

    img {
      width: 100%;
      height: 100vh;
      object-fit: contain;

      @media screen and (max-width: 1000px) {
        height: 70vh;
      }

      @media screen and (max-width: 768px) {
        height: 70vh;
      }
    }
  }
`;

function First() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        stiffness: 100,
        damping: 5,
      },
    },
  };

  return (
    <div>
      <Firsts>
        <div className="left">
          <motion.h1 variants={variants} initial="hidden" whileInView="visible">
            How Fad works?
          </motion.h1>
          <motion.p variants={variants} initial="hidden" whileInView="visible">
            Are you tired of mundane fashion norms? Longing to break free from
            fashion's conformity shackles and embrace your unique style? Welcome
            to FAD, the ultimate fashion playground where fun and flair collide!
            More than just a fashion community, we're a vibrant fashion fiesta
            where you can express yourself without fear of judgment. Connect
            with fellow fashionistas, learn from style innovators, and dive into
            the world of fashion adventures. And guess what? Your fashion
            prowess won't go unnoticed - you'll even earn money for your
            remarkable skills! Step into the FAD movement and become the true
            fashion maverick you were destined to be!
          </motion.p>
        </div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="right"
        >
          {" "}
          <Image src={svg1} alt="How Fad works" />
          {/* <ImageScaleAnime imgUrl={svg1}/> */}
        </motion.div>
      </Firsts>
    </div>
  );
}

export default First;
