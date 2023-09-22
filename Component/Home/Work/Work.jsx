import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import img1 from "@/Assets/Images/whitechick.png";
import Image from "next/image";
import Link from "next/link";

const WorkContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 3rem;
  padding: 5rem;
  font-family: "roboto";
  text-align: center;

  @media screen and (max-width: 1000px) {
    padding: 0 2rem;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }

  .left {
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }

    img {
      width: 100%;
      min-height: 87vh;
      height: 100px;
      object-fit: cover;
      border-radius: 50px;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4.5rem;
      width: 14rem;
      border-radius: 100px;
      background: transparent;
      white-space: nowrap;
      color: #111;
      border: 2px #111 solid;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-weight: 100;
      gap: 0.5rem;
      position: relative;
      z-index: 0;

      a {
        text-decoration: none;
        color: #111;
        transition: all 0.3s ease-in-out;
      }

      &::after {
        position: absolute;
        content: "";
        width: 0%;
        height: 100%;
        border-radius: 100px;
        background: #ff005c;
        z-index: -1;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        color: #eee;
        border: 2px #ff005c solid;

        a {
          color: #fff;
        }

        &::after {
          width: 100%;
          behavior: smooth;
        }
      }
    }
  }

  .right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    color: #111;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }

    .top {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      padding: 1rem;
      background: #fff;
      border-radius: 50px;
      border: 2px solid #ff005c;
      overflow: hidden;

      @media screen and (max-width: 1000px) {
        border-radius: 30px;
      }

      

      .bottom {
        display: flex;
        gap: 3rem;

        @media screen and (max-width: 1000px) {
          flex-direction: column;
        }

        .left {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          background: #fff;
          border-radius: 50px;
          padding: 2rem;
          border: none !important;

          @media screen and (max-width: 1000px) {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
            font-weight: 700;
            width: 100%;
            color: #111;

            @media screen and (max-width: 1000px) {
              font-size: 2.5rem;
            }
          }

          p {
            font-size: 1.3rem;
            color: #333;
            letter-spacing: 0.5px;
            line-height: 1.5;
            font-weight: 500;
            width: 100%;
          }
        }

        .right {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          background: #fff;
          border-radius: 50px;
          padding: 2rem;
          border: none !important;

          @media screen and (max-width: 1000px) {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
            font-weight: 700;
            width: 100%;
            color: #111;

            @media screen and (max-width: 1000px) {
              font-size: 2.5rem;
            }
          }

          p {
            font-size: 1.3rem;
            color: #333;
            letter-spacing: 0.5px;
            line-height: 1.5;
            font-weight: 500;
            width: 100%;
          }
        }
      }
    }

    .bottom {
      display: flex;
      flex-direction: row;
      position: relative;
      color: #111;
      gap: 3rem;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }

      .left {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background: #fff;
        border-radius: 50px;
        padding: 2rem;
        border: 2px solid #ff005c;
        overflow: hidden;

        @media screen and (max-width: 1000px) {
          width: 100%;
          border-radius: 30px;
        }

        h1 {
          font-size: 3rem;
          font-weight: 700;
        }

        p {
          font-size: 1.3rem;
          color: #333;
          letter-spacing: 0.5px;
          line-height: 1.5;
          font-weight: 500;
        }
      }

      .right {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background: #fff;
        border-radius: 50px;
        padding: 2rem;
        border: 2px solid #ff005c;
        overflow: hidden;

        @media screen and (max-width: 1000px) {
          width: 100%;
          border-radius: 30px;
        }

        h1 {
          font-size: 3rem;
          font-weight: 700;
        }

        p {
          font-size: 1.3rem;
          color: #333;
          letter-spacing: 0.5px;
          line-height: 1.5;
          font-weight: 500;
        }
      }
    }
  }
`;

function Work() {
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
    <WorkContainer>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="left"
      >
        <Image src={img1} alt="How Fad works" />

        
      </motion.div>
      <div className="right">
        <div className="top">
          <div className="top">
            
          </div>
          <div className="bottom">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="left"
            ><h1>Join the Vibrant Fashion Community</h1>
            <p>
                Connect with like-minded fashion enthusiasts in our exclusive
                community. Share ideas, experiences, and trends that inspire.
                Engage in exciting activities curated for the community members,
                from collaborative challenges to interactive discussions.
            </p>

              
              
              
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="right"
            > <h1>Community Battles: A Showdown of Styles</h1>
            

            <p>
                Step into the spotlight with our Community Battles. Showcase
                your unique style, compete with fellow fashion lovers, and get a
                chance to win amazing rewards. It's your chance to make a mark
                and be celebrated for your fashion flair.
              </p>
              
              
              
              
              
              
              
              
            </motion.div>
          </div>
        </div>
        <div className="bottom">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="left"
          > <h1>Become an Influencer</h1>
          <p>
          Transform your passion into influence. Our innovative tier system
          rewards your growth, giving you exclusive benefits and recognition
          within the fashion community.
        </p> 
          
            
          </motion.div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="right"
          >
            <h1>Tier System</h1>
              <p>
              Transform your passion into influence and recognition. As you grow
              with Fad, you'll unlock exclusive tiers that come with a range of
              perks and rewards. From forming a close-knit Influencer's
              Community to seizing monetization opportunities, your journey is
              about to take off.
            </p>
            
          </motion.div>
        </div>
      </div>
    </WorkContainer>
  );
}

export default Work;
