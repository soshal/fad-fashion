"use client";

import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const TextReveal = ({ para }) => {
  const letters = para.split("");
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const Container = styled.div`
    width: 100%;
    height: 100%;

    span {
      font-size: 1.2rem;
      color: #ffffff;
      line-height: 1.5;
      letter-spacing: 0.5px;
      font-weight: 300;
      font-family: "roboto";
    }

    @media screen and (max-width: 1000px) {
      span {
        font-size: 2rem;
      }
    }

    @media screen and (max-width: 600px) {
      span {
        font-size: 1.5rem;
      }
    }
  `;

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  const transition = {
    duration: 0.3,
    delay: 0.03,
    ease: "easeInOut",
  };

  return (
    <div ref={ref}>
      <Container>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={animationVariants.hidden}
            animate={
              inView ? animationVariants.visible : animationVariants.hidden
            }
            transition={{
              ...transition,
              delay: index * transition.delay,
            }}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {letter === "\n" ? <br /> : letter}
          </motion.span>
        ))}
      </Container>
    </div>
  );
};

export default TextReveal;
