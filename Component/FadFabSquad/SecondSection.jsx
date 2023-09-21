import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Card from "./Card";

const SecondSectionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5rem 0;

  @media screen and (max-width: 768px) {
    margin: 3rem 0;
  }

  .top {
    h1 {
      font-size: 5rem;
      text-align: center;
      font-weight: 100;
      font-family: 'kurdasan';

      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }
    }
  }

  .bottom {
    width: 100%;
    min-height: 90vh;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
    margin: 5rem 0;

    @media screen and (max-width: 768px) {
      margin: 3rem 0;
    }

    .first {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    .second {
      grid-column: 2/3;
      grid-row: 1/2;
    }

    .third {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    .fourth {
      grid-column: 2/3;
      grid-row: 2/3;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);

      .first {
        grid-column: 1/2;
        grid-row: 1/2;
      }

      .second {
        grid-column: 1/2;
        grid-row: 2/3;
      }

      .third {
        grid-column: 1/2;
        grid-row: 3/4;
      }

      .fourth {
        grid-column: 1/2;
        grid-row: 4/5;
      }
    }
  }
`;

function SecondSection() {
  return (
    <SecondSectionContainer>
      <div className="top">
        <h1>Your Role in the FadFabSquad!</h1>
      </div>
      <div className="bottom">
        <div className="first">
          {" "}
          <Card
            title="Creating Reels"
            content="Unleash your creativity and collaborate with Fad to create reels that promote Fad and FadFabSquad. Share your unique vision with the world and be a part of something great!"
          />
        </div>
        <div className="second">
          {" "}
          <Card
            title="Shoots"
            content="Get ready to shine! Participate in photo and video shoots with Fad and other members of the community. Create visually stunning and diverse content that showcases your talent and makes a difference!"
          />
        </div>
        <div className="third">
          {" "}
          <Card
            title="Authentic Storytelling"
            content="Your story is important to us! Share your personal experiences and insights about Fad, and inspire fashion enthusiasts everywhere with your passion and authenticity. We can't wait to hear from you!"
          />
        </div>
        <div className="fourth">
          {" "}
          <Card
            title="Selection Process"
            content="Be a part of the selection process of future applicants of FadFabSquad!"
          />
        </div>
      </div>
    </SecondSectionContainer>
  );
}

export default SecondSection;
