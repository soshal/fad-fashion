"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: #101010;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 5px;
    background-color: #fff;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 100px;
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;

  &::after {
    content: "";
    position: absolute;
    width: 27px;
    height: 27px;
    right: -19px;
    background-color: #8f0034;
    border: 2px solid #fff;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  ${(props) =>
    props.isRight
      ? `
    left: 50%;
    &::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid #8f0034;
      border-width: 10px 10px 10px 0;
      border-color: transparent #8f0034 transparent transparent;
    }
    &::after {
      right: auto;
      left: -17px;
    }
  `
      : `
    &::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid #8f0034;
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #8f0034;
    }
    &::after {
      left: auto;
      right: -17px;
    }
  `}

  @media screen and (max-width : 768px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  padding: 20px;
  background-color: #8f0034;
  position: relative;
  border-radius: 20px;
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 1rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    font-family: "tenon";
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    font-family: "tenon";
    letter-spacing: 0.5px;
    line-height: 1.3;
    color: #ffdde9;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    gap: 0.5rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const timelineItems = [
  {
    title: "Step I : Apply to Join",
    content:
      "Fill out our application form and tell us why you're the perfect fit for the FadFab Squad. We'll review your application and let you know if you're selected.",
  },
  {
    title: "Step II : Verdict",
    content:
      "If you're selected, you'll receive an email for the same, containing more info about the program. Ask any questions you may have about the FadFab Squad.",
  },
  {
    title: "Step III : Create and Collaborate",
    content:
      "Once you have completed all the necessities and you're officially part of the FadFab Squad, it's time to get creative! Collaborate with us to create unique and engaging content that showcases your talent and helps us promote Fad.",
  },
  {
    title: "Step IV : Perks and Benefits",
    content:
      "As a member of the FadFab Squad, you'll enjoy exclusive perks and benefits, including access to our network of fashion influencers, early access to Fad products, and more.",
  },
];

function Page() {
  return (
    <TimelineContainer>
      <Timeline>
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            isRight={index % 2 !== 0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Content>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineContainer>
  );
}

export default Page;
