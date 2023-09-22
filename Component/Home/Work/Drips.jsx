import React from "react";
import img2 from "@/Assets/Images/gfgg.png";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

const DrpisContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 10rem;

  @media screen and (max-width: 1000px) {
    padding: 5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 5rem;
  }

  .top {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.3rem;
      width: 50%;
      text-align: center;
      font-weight: 300;
      line-height: 1.5;
      letter-spacing: 0.5px;
      color: #ccc;

      @media screen and (max-width: 1000px) {
        width: 100%;
        text-align: left;
      }
    }
  }

  .bottom {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    grid-template-rows: 1fr;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 5fr 1fr;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr 1fr;
    }

    .left {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
      }

      p {
        font-size: 1.3rem;
        color: #ccc;
        letter-spacing: 0.5px;
        line-height: 1.5;
        font-weight: 500;
      }
    }

    .middle {
      width: 100%;
      height: 90vh;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 30vw;
        height: 90vh;
        object-fit: cover;
        border-top-left-radius: 1000px;
        border-top-right-radius: 1000px;
        border: #ccc 2px solid;
        padding: 1rem;

        @media screen and (max-width: 1000px) {
          width: 90vw;
          height: 90vh;
        }
      }
    }

    .right {
      width: 100%;
      height: 100%;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 2rem;

      h3 {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
      }

      p {
        font-size: 1.3rem;
        color: #ccc;
        letter-spacing: 0.5px;
        line-height: 1.5;
        font-weight: 500;
      }
    }
  }
`;

function Drips() {
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
    <DrpisContainer>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="top"
      >
        <h1>Earning Drips and Leveling Up</h1>
        <p>
          At Fad, we've gamified the experience with our unique point system
          known as 'Drips.' Every engagement, from posting content to
          participating in community activities, earns you Drips. As your Drips
          accumulate, you level up and unlock exclusive rewards, including
          coupons from your favorite fashion brands.
        </p>
      </motion.div>
      <div className="bottom">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="left"
        >
          <h3>How to Earn Drips</h3>
          <p>
            The more you engage, the more Drips you earn. Post content, comment
            on others' posts, participate in challenges, and connect with fellow
            community members. Your Drips reflect your involvement and passion
            for fashion.
          </p>
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="middle"
        >
          <Image src={img2} alt="How Fad Works" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className="right"
        >
          <h3>Level Up and Reap Rewards</h3>
          <p>
            Climbing the levels at Fad is both rewarding and exciting. With each
            level, you gain access to more perks, including premium features,
            exclusive content, and even brand collaborations. It's a journey of
            growth and recognition within our vibrant fashion community
          </p>
        </motion.div>
      </div>
    </DrpisContainer>
  );
}

export default Drips;
