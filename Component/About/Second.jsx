import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ImageScaleAnime from "../Animation/ImageScaleAnime";
import svg1 from "@/Assets/Images/iPhone 15-1.svg";
import svg2 from "@/Assets/Images/iPhone 15-2.svg";
import svg3 from "@/Assets/Images/iPhone 15-3.svg";
import svg4 from "@/Assets/Images/iPhone 15-4.svg";
import fad4 from "@/Assets/Images/fad-4.png";
import fad5 from "@/Assets/Images/fad-5.png";
import fad6 from "@/Assets/Images/fad-6.png";
import playstore from "@/Assets/Images/google-play.png";
import applestore from "@/Assets/Images/apple-logo.png";
import Image from "next/image";

function Second() {
  const SecondContainer = styled(motion.div)`
    min-height: 150vh;
    width: 85%;
    height: 100%;
    background: linear-gradient(170deg, #6b2426, #e95f0e);
    backdrop-filter: blur(50px);
    margin: 2rem auto;
    margin-top: -9.5rem;
    position: relative;
    z-index: 0;
    border-radius: 40px;
    padding: 5rem;
    padding-top: 15rem;
    color: #fff;

    @media screen and (max-width: 1000px) {
      min-height: 150vh;
      padding: 1rem;
      padding-top: 13rem;
      margin-top: -7rem;
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 768px) {
      padding: 1rem;
      padding-top: 13rem;
      margin-top: -7rem;
      width: 100%;
      min-height: 150vh;
      height: 100%;
    }
    @media screen and (max-width: 376px) {
      padding: 1rem;
      padding-top: 13rem;
      margin-top: -8rem;
      width: 100%;
      height: 100%;
    }

    .content {
      min-height: 100vh;
      height: 100%;
      display: grid;
      grid-template-rows: 4fr 1fr;
      row-gap: 5rem;

      @media screen and (max-width: 1000px) {
        grid-template-rows: 4fr 1fr;
        row-gap: 4rem;
      }
      @media screen and (max-width: 768px) {
        grid-template-rows: 5fr 2fr;
      }
      .top {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;

        @media screen and (max-width: 1000px) {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr 6fr 1fr;
        }

        .left {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;

          @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
          }

          @media screen and (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
          }

          .top {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-size: 1.1rem;
              font-weight: 300;
              font-family: "roboto";
            }

            @media screen and (max-width: 768px) {
              display: none;
            }
          }

          .mid {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 15vw;
              height: 15vw;
              object-fit: contain;
              border-radius: 10px;

              @media screen and (max-width: 1000px) {
                width: 25vw;
                height: 25vw;
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-size: 1.1rem;
              font-weight: 300;
              font-family: "roboto";

              @media screen and (max-width: 768px) {
                font-size: 1.3rem;
              }
            }
          }
        }
        .mid {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .right {
          display: grid;
          grid-template-rows: 1fr 1fr 1fr;

          @media screen and (max-width: 1000px) {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr;
          }

          @media screen and (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
          }

          .top {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 10vw;
              height: 10vw;
              object-fit: cover;
              border-radius: 500px;
              @media screen and (max-width: 1000px) {
                width: 15vw;
                height: 15vw;
              }
            }

            @media screen and (max-width: 768px) {
              display: none;
            }
          }

          .mid {
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-size: 1.1rem;
              font-weight: 300;
              font-family: "roboto";

              @media screen and (max-width: 768px) {
                font-size: 1.3rem;
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 15vw;
              height: 15vw;
              object-fit: contain;
              border-radius: 10px;
              @media screen and (max-width: 1000px) {
                width: 25vw;
                height: 25vw;
              }
            }
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5rem;

        h1 {
          font-size: 6.5rem;
          font-weight: 100;
          font-family: "kurdasan";
          text-align: center;

          @media screen and (max-width: 768px) {
            font-size: 3rem;
          }
        }

        .icons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5rem;
          color: #111;

          @media screen and (max-width: 768px) {
            gap: 4rem;
          }

          img {
            width: 2.5rem;
            height: 2.5rem;
            object-fit: cover;
          }

          .playstore {
            width: 15rem;
            height: 5rem;
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            padding: 1rem 2rem;
            border-radius: 100px;
            opacity: 1;
            cursor: not-allowed;
          }
          .applestore {
            width: 15rem;
            height: 5rem;
            background: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            padding: 1rem 2rem;
            border-radius: 100px;
            opacity: 1;
            cursor: not-allowed;
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
        duration: 1,
        ease: "easeInOut",
        stiffness: 100,
        damping: 5,
      },
    },
  };

  return (
    <SecondContainer variants={variants} initial="hidden" animate="visible">
      <div className="content">
        <div className="top">
          <div className="left">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="top"
            >
              <p>
                {" "}
                show your funky sense of fashion to people and learn about
                fashion and do everything fashion without being judged.
              </p>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="mid"
            >
              <Image src={svg3} alt="Fad-about-image" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="bottom"
            >
              {" "}
              <p>
                {" "}
                show your funky sense of fashion to people and learn about
                fashion and do everything fashion without being judged.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="mid"
          >
            <ImageScaleAnime imgUrl={svg1} />
          </motion.div>
          <div className="right">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="top"
            >
              <Image src={fad4} alt="Fad-about-image" />
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="mid"
            >
              {" "}
              show your funky sense of fashion to people and learn about fashion
              and do everything fashion without being judged.
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="bottom"
            >
              <Image src={svg2} alt="Fad-about-image" />
            </motion.div>
          </div>
        </div>
        <div className="bottom">
          <h1>We are launching our app very soon ...</h1>
          <div className="icons">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="playstore"
            >
              <Image src={playstore} alt="playstore" />
              <h3>Play Store</h3>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              className="applestore"
            >
              <Image src={applestore} alt="app store" />
              <h3>App Store</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </SecondContainer>
  );
}

export default Second;
