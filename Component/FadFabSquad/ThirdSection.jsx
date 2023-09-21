import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Items = [
  {
    title: "Exclusive Badge",
    content:
      "Receive the 'FadFabSquad' badge on our platform, setting you apart from other users. Exclusive Badge",
    info: "Receive the 'FadFabSquad' badge on our platform, setting you apart from other users.",
  },
  {
    title: "Premium Plan",
    content:
      "Enjoy our premium subscription pack for two months, giving you access to exclusive features. Premium Plan",
    info: "Enjoy our premium subscription pack for two months, giving you access to exclusive features.",
  },
  {
    title: "Product Giveaway",
    content:
      "Receive a free product from us as a token of appreciation for collaborating with us. *Only applicable for select members. Product Giveaway",
    info: "Receive a free product from us as a token of appreciation for collaborating with us. *Only applicable for select members.",
  },
  {
    title: "Early Access",
    content:
      "Get a sneak peek at India's First Fashion Community Platform and be part of our beta testing. Early Access",
    info: "Get a sneak peek at India's First Fashion Community Platform and be part of our beta testing.",
  },
  {
    title: "Promotion",
    content:
      "We will advertise you on our social platform for collaborating with us, helping you gain more followers. Promotion",
    info: "We will advertise you on our social platform for collaborating with us, helping you gain more followers.",
  },
  {
    title: "Enhanced Reach",
    content:
      "Experience the recognition you've earned as we boost your visibility within the fashion community. Enhanced Reach",
    info: "Experience the recognition you've earned as we boost your visibility within the fashion community.",
  },
  {
    title: "Brand Collaborations",
    content:
      "Access exciting opportunities to collaborate with brands seeking partnerships with fashion influencers like you. Brand Collaborations",
    info: "Access exciting opportunities to collaborate with brands seeking partnerships with fashion influencers like you.",
  },
];

const ThirdSectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5rem;
  padding: 10rem;

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
    gap: 3rem;
    padding-bottom: 5rem;
  }

  h1 {
    font-size: 5rem;
    font-weight: 100;
    color: #eee;
    font-family: 'kurdasan';

    @media screen and (max-width: 768px) {
      font-size: 3rem;
      text-align: center;
    }
  }

  .content {
    width: 100%;
    min-height: 80vh;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5rem;

    .item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem;

      h2 {
        font-size: 2rem;
        font-weight: 100;
        color: #eee;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-family: "roboto" !important;
        span {
          font-size: 2rem;
          font-weight: 100;
          color: #eee;
          background: #e00052;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          height: 4rem;
          width: 4rem;
          text-align: center;
        }
      }

      p {
        font-size: 1.5rem;
        line-height: 1.5;
        font-weight: 400;
        font-family: "roboto";
        text-align: center;
        letter-spacing: 0.5px;
        color: rgba(255, 255, 255, 0.8);
      }
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(7, 1fr);
      gap: 1rem;

      .item {
      }
    }
  }
`;

function ThirdSection() {
  return (
    <ThirdSectionContainer>
      <h1>Perks and Benefits of Joining FadFabSquad!</h1>
      <div className="content">
        {Items.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
            className="item"
            key={index}
          >
            <h2>
              {" "}
              <span>{index + 1}.</span> {item.title}
            </h2>
            <p>{item.content}</p>
          </motion.div>
        ))}
      </div>
    </ThirdSectionContainer>
  );
}

export default ThirdSection;
