import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const TierContainer = styled.div`
  min-height: 80vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 5rem;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  .left {
    width: 80%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    h1 {
      font-size: 5rem;
      color: #fff;
      font-family: "kurdasan";

      @media screen and (max-width: 1000px) {
        font-size: 5rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 3.5rem;
      }
    }

    p {
      font-size: 1.5rem;
      color: #ddd;
      line-height: 1.5;
    }
  }

  .right {
    width: 80%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
      align-items: center;
    }

    h1 {
      font-size: 7rem;
      font-family: "kurdasan";
      color: #fff;

      @media screen and (max-width: 1000px) {
        font-size: 5rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 3.5rem;
      }
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 3rem;

      li {
        font-size: 1.5rem;
        color: #ddd;
        line-height: 1.5;
        text-align: left;
        list-style: none;

        strong {
          color: #fff;
        }
      }
    }
  }
`;

const items = [
  {
    title: "Beginner (Tier 1: Level 1 to 5) :",
    description:
      "As a Beginner, dive into the world of fashion by redeeming coupons for trendy clothes, accessories, and more!",
  },
  {
    title: "Amateur (Tier 2: Level 5 to 10) :",
    description:
      "Step up your fashion game as an Amateur, where you can monetize your account and create your own fashion community!",
  },
  {
    title: "Intermediate (Tier 3: Level 10 to 15) :",
    description:
      "Elevate your fashion presence and unlock exclusive previews of upcoming products, getting a taste of what's to come!",
  },
  {
    title: "Advanced (Tier 4: Level 15 to 20) :",
    description:
      "The Advanced tier opens doors to join up to five communities for free, along with access to premium brand coupons.",
  },
  {
    title: "Semi-Influencer (Tier 5: Level 20 to 25) :",
    description:
      "Reach the cusp of fashion influence as a Semi-Influencer! Monetize your account at an accelerated rate and stand out among the fashion crowd.",
  },
];

function TierSystem() {
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
    <TierContainer>
      <div className="left">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          Reach New Fashion Heights Ascend the Tiers
        </motion.h1>
        <motion.p variants={variants} initial="hidden" whileInView="visible">
          At FAD, our app is designed around an exciting tier system that
          rewards your fashion journey. From the moment you join, you begin at
          Level 1 as a Beginner, and with every like on your posts and each
          profile visit, you'll earn points to level up! It's a thrilling climb
          to unlock marvelous fashion perks:
        </motion.p>
      </div>
      <div className="right">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          Tier System
        </motion.h1>

        <motion.ul>
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.1, // Staggered delay of 0.5 seconds for each item
                duration: 0.5,
                ease: "easeInOut",
                stiffness: 100,
                damping: 5,
              }}
            >
              <strong>{item.title}</strong> {item.description}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </TierContainer>
  );
}

export default TierSystem;
