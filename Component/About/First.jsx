import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

function First() {
  const FirstContainer = styled.div`
    width: 100%;
    padding: 0 10rem;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1000px) {
      padding: 0;
    }

    .first {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
      }

      @media screen and (max-width: 375px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }

      .left {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 1000px) {
          justify-content: center;
          align-items: center;
        }

        p {
          width: 60%;
          font-size: 1.4rem;
          font-weight: 100;
          line-height: 1.5;
          font-family: "roboto";

          @media screen and (max-width: 1000px) {
            width: 70%;
            text-align: center;
            font-size: 2.5rem;
          }
          @media screen and (max-width: 768px) {
            width: 70%;
            text-align: center;
            font-size: 1.5rem;
          }

          @media screen and (max-width: 376px) {
            width: 70%;
            text-align: center;
            font-size: 1.4rem;
          }
        }
      }

      .mid {
        flex: 1;
        font-size: 12rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "roboto";
        line-height: 0.9;
        mix-blend-mode: difference;

        @media screen and (max-width: 1000px) {
          font-size: 10rem;
        }

        @media screen and (max-width: 768px) {
          font-size: 6rem;
        }

        h6 {
          font-family: "kurdasan";
          font-weight: 100;
          font-size: 20rem;

          @media screen and (max-width: 1000px) {
            font-size: 15rem;
          }
          @media screen and (max-width: 768px) {
            font-size: 10rem;
          }
        }
      }

      .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        @media screen and (max-width: 1000px) {
          justify-content: center;
          align-items: center;
        }

        p {
          font-size: 1.5rem;
          font-weight: 100;
          line-height: 1.5;
          font-family: "roboto";
          width: 60%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          mix-blend-mode: difference;

          @media screen and (max-width: 1000px) {
            width: 70%;
            text-align: center;
            font-size: 2.5rem;
            color: #fff;
          }
          @media screen and (max-width: 768px) {
            width: 70%;
            text-align: center;
            font-size: 1.5rem;
          }
        }
      }
    }
  `;

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
    <FirstContainer>
      <div className="first">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="left"
        >
          <p>
            Create content that inspire others and make cult of yours through
            your content.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="mid"
        >
          The <h6>Insider</h6> Look
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="right"
        >
          <p>
            Looking to stay on top of lastest trending fashion, Let's see how
            FAD can help you.
          </p>
        </motion.div>
      </div>
    </FirstContainer>
  );
}

export default First;
