import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  .flip-card {
    background-color: transparent;
    max-width: 40vw;
    max-height: 40vh;
    height: 100%;
    width: 100%;
    height: 500px;
    width: 500px;
    perspective: 1000px;
    color: white;
    position: relative;

    @media screen and (max-width: 768px) {
      max-width: 90vw;
      max-height: 40vh;
      height: 100%;
      width: 100%;
      height: 500px;
      width: 500px;
      perspective: 1000px;
      color: white;
      padding: 2rem 1rem;
    }

    .viewbutton {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      background: transparent;
      border: none;
      outline: none;
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1rem 2rem;
      background: #ff895e;
      background: #f0005c;
      border-bottom-left-radius: 20px;
      font-size: 1rem;
      font-family: "roboto";
      font-weight: 300;
      letter-spacing: 0.5px;
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .viewbutton:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 50px;
    border-top-right-radius: 0;

    @media screen and (max-width: 768px) {
      border-radius: 20px;
      border-top-right-radius: 0;
    }
  }

  .flip-card-front {
    background: linear-gradient(
      120deg,
      bisque 60%,
      rgb(255, 219, 206) 88%,
      rgb(251, 159, 126) 40%,
      rgb(255, 142, 101, 0.8) 48%
    );
    color: coral;
  }

  .flip-card-back {
    transform: rotateY(180deg);
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      120deg,
      rgb(255, 174, 145) 30%,
      coral 88%,
      bisque 40%,
      rgb(255, 193, 171) 78%
    );
    color: white;
    transform: rotateY(180deg);

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: 400;
        font-family: "roboto";
        text-align: center;
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
`;

function Card({ title, content }) {
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
    <Cards>
      <div class="flip-card">
        <button className="viewbutton">View</button>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <motion.h1
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              {" "}
              {title}{" "}
            </motion.h1>
          </div>
          <div class="flip-card-back">
            <div className="content">
              <motion.p
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                {content}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </Cards>
  );
}

export default Card;
