"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import WideButton from "@/Component/Animation/Buttons/WideButton";
import img1 from "@/Assets/Images/chuche1.png";
import img2 from "@/Assets/Images/lauda2.png";
import img3 from "@/Assets/Images/lauda4.png";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(Flip);

const images = [img3, img2, img1];

const text = [
  "Unlock coupon and more by doing fashion",
  "Level up with fashion",
  "Create and Share fashion",
];

const para = [
  "At every tier, they will unlock coupons for brands which they can redeem to purchase different products like clothes, accessories, etc.",
  "The users will start at Level 1. Gain points based on the likes they receive on their posts and profile visits to level up.",
  "Show your funky sense of fashion to people and learn about fashion without being judged.",
];

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  gap: 3rem;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0 5rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const ImageContainer = styled.div`
  height: 67vh;
  width: 62vw;
  border-radius: 0;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 50vh;
    width: 87vw;
  }
`;

const Slide = styled(Image)`
  height: 65vh;
  width: 60vw;
  object-fit: contain;
  border-radius: 100%;
  transition: all 1s ease-in-out;

  @media screen and (max-width: 768px) {
    height: 45vh;
    width: 85vw;
    margin: 0 auto;
    border-radius: 100px;
  }
`;

const Sliderss = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Buttons = styled.div`
  display: flex;
  width: 40vw;
  gap: 3rem;

  @media screen and (max-width: 1000px) {
    width: 85vw;
  }
`;

const ButtonDiv = styled.div`
  background-color: #aaaaaa20;
  border: none;
  padding: 10px;
  flex: 1;
  height: 65vh;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;

  @media (max-width: 1000px) {
    background: transparent;
    padding: 0;
    margin: 0;
    height: 50%;
  }

  @media (max-width: 768px) {
    background: transparent;
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 60%;
  transition: all 1s ease-in-out;
  height: 15vh;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
    height: 20vh;
    background: #131313;
    padding: 1.5rem;
    border-radius: 20px;
    overflow: hidden;
    overflow-y: scroll;
  }

  @media (max-width: 1000px) {
    width: 85%;
    margin: 0 auto;
    height: 20vh;
    padding: 1.5rem;
    border-radius: 20px;
    overflow: hidden;
    overflow-y: scroll;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  flex: 1;
  font-family: "kurdasan";
  color: #eee;
  letter-spacing: 1px;
  transition: all 1s ease-in-out;
`;

const Para = styled.p`
  font-size: 1.5rem;
  flex: 1;
  font-family: "roboto";
  color: #eeeeee99;
  line-height: 1.5;
  letter-spacing: 1px;
  font-weight: 300;
  transition: all 1s ease-in-out;
`;

const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);

  const items = images.map((image, index) => ({
    image,
    text: text[index],
    para: para[index],
  }));

  const slideAnimation = () => {
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.1,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.inOut",
        duration: 0.7,
      }
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        stiffness: 100,
        damping: 5,
        type: "spring",
        beforeEnter: (el) => {
          el.style.opacity = 0;
          el.style.transform = "scale(0)";
        },
        afterEnter: (el) => {
          el.style.opacity = 1;
          el.style.transform = "scale(1)";
        },
      },
    },
  };

  return (
    <div>
      <SliderContainer>
        <Sliderss>
          <ImageContainer>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <Slide
                src={items[currentIndex].image}
                alt={`Slide ${currentIndex}`}
                ref={imageRef}
              />
            </motion.div>
          </ImageContainer>
          <Content>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <Heading title="FAD">{items[currentIndex].text}</Heading>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <Para title="FAD">{items[currentIndex].para}</Para>
            </motion.div>
          </Content>
        </Sliderss>

        <Buttons>
          <ButtonDiv
            onClick={() => {
              handlePrevSlide();
              slideAnimation();
            }}
          >
            {" "}
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <WideButton
                text="Prev"
                fontsize="1.2rem"
                color="#ddd"
                bg="#232323"
                hoverbg="#ff005c"
                hovercolor="#fff"
                bordercolor="#303030"
                mbordercolor="#202020"
                mpaddingx="4rem"
                mpaddingy="1.2rem"
                mfontsize="1.5rem"
                height="14rem"
                width="7rem"
                mheight="6rem"
                mwidth="15rem"
              />{" "}
            </motion.div>
          </ButtonDiv>

          <ButtonDiv
            onClick={() => {
              handleNextSlide();
              slideAnimation();
            }}
          >
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <WideButton
                text="Next"
                fontsize="1.2rem"
                color="#ddd"
                bg="#232323"
                hoverbg="#ff005c"
                hovercolor="#fff"
                bordercolor="#303030"
                mbordercolor="#202020"
                mpaddingx="4rem"
                mpaddingy="1.2rem"
                mfontsize="1.5rem"
                height="14rem"
                width="7rem"
                mheight="6rem"
                mwidth="15rem"
              />
            </motion.div>
          </ButtonDiv>
        </Buttons>
      </SliderContainer>
    </div>
  );
};

export default Sliders;
