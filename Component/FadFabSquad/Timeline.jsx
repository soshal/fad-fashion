import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: #101010;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    text-align: center;
    width: 100%;
    color: rgba(255, 255, 255, 0.9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
    }
  }
`;

const Timelines = styled.div`
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
    background-color: #ff895e;
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
      border: medium solid rgb(255, 219, 206);
      border-width: 10px 10px 10px 0;
      border-color: transparent #8f0034 transparent transparent;
      border-color: transparent rgb(255, 219, 206) transparent transparent;
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
      border: medium solid rgb(255, 219, 206);
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #8f0034;
      border-color: transparent transparent transparent rgb(255, 219, 206);
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
  background: linear-gradient(
    120deg,
    bisque 20%,
    rgb(255, 219, 206) 88%,
    rgb(251, 159, 126) 40%,
    rgb(255, 142, 101, 0.8) 78%
  );
  position: relative;
  border-radius: 20px;
  color: #111;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 1rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    font-family: "roboto";
  }

  p {
    font-size: 1.3rem;
    font-weight: 400;
    font-family: "roboto";
    line-height: 1.3;
    color: rgba(1, 1, 1, 0.7);
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

function Timeline() {
  return (
    <TimelineContainer>
      <h1>Start your FadFabSquad Journey from here</h1>
      <Timelines>
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
      </Timelines>
    </TimelineContainer>
  );
}

export default Timeline;
