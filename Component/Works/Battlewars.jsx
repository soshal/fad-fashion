import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const BattleContainer = styled.div`
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
      font-family: 'kurdasan';

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
      color: #fff;
      font-family: 'kurdasan';

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
    title: "Weekly Fashion Clashes:",
    description:
      "Join the action-packed battle week where communities and influencers compete head-to-head in a weekly showdown of fashion prowess.",
  },
  {
    title: "Earn Battle Points:",
    description:
      "Every engagement, participation, and achievement in the Community Battles earns your community valuable Battle Points.",
  },
  {
    title: "Community Recognition:",
    description:
      "The community that accumulates the highest Battle Points emerges as the victor, gaining exclusive recognition and rewards.",
  },
  {
    title: "Exclusive Rewards:",
    description:
      "Claim unparalleled rewards and benefits for your community's victory, ranging from brand collaborations to special titles.",
  },
  {
    title: "Individual Impact:",
    description:
      "Your individual contributions significantly impact your community's performance, enhancing your standing within the fashion hierarchy.",
  },
  {
    title: "Top Achiever Title:",
    description:
      'The highest point achiever within the winning community earns the coveted "Super Fan" title, an acknowledgment of their exceptional support.',
  },
  {
    title: "Fashionable Camaraderie:",
    description:
      "Forge meaningful connections with fellow fashion enthusiasts and influencers while collaborating towards victory.",
  },
  {
    title: "Stairway to Fame:",
    description:
      "Community Battles provide a dynamic platform for emerging influencers to rise, stand out, and unlock higher tiers of influence.",
  },
  {
    title: "Community Empowerment:",
    description:
      "Rally your community, strategize, and celebrate collective achievements as you conquer the fashion battleground.",
  },
];

function BattleWars() {
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
    <BattleContainer>
      <div className="left">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          BATTLE WARS: Enter the Fashion Battle Arena
        </motion.h1>
        <motion.p variants={variants} initial="hidden" whileInView="visible">
          Engage in the exhilarating world of Fashion Battle Wars at FAD, where
          communities and influencers clash in a spectacular showcase of style
          supremacy. Prepare for a riveting experience as you enter the
          battleground of fashion where every triumph and contribution counts
          Here's what you can expect from our Community Battles
        </motion.p>
      </div>
      <div className="right">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          Battle Wars
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
    </BattleContainer>
  );
}

export default BattleWars;
