import React from "react";
import styled from "styled-components";
import TextReveal from "./TextReveal";
import Image from "next/image";
import fad1 from "@/Assets/Images/fad-about-2.png";

const ThirdContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 5rem 10rem;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 3rem 0rem;
  }

  .third-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 1000px) {
      gap: 2rem;
    }

    .top {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 3rem;
      }

      .left {
        width: 100%;
        height: 100%;

        h1 {
          font-size: 7rem;
          font-weight: 700;
          line-height: 1.2;
          font-family: "roboto";

          span {
            font-family: "kurdasan";
            font-size: 7rem;
            font-weight: 300;
          }
        }
      }

      .right {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;

        p {
          width: 50%;
          font-size: 1.5rem;
          font-weight: 400;
          line-height: 1.5;
          font-family: "roboto";
          letter-spacing: 0.5px;

          @media screen and (max-width: 1000px) {
            width: 50%;
            min-height: 10vh;
            font-size: 2rem;
          }
          @media screen and (max-width: 1000px) {
            width: 100%;
            min-height: 10vh;
          }
        }
      }
    }

    .bottom {
      width: 100%;
      min-height: 85vh;
      height: 100%;
      background: linear-gradient(#a078cf, #fbc7d4);
      padding: 2rem;
      border-radius: 30px;
      display: flex;
      gap: 3rem;
      position: relative;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
        padding: 0 2rem;
        padding-top: 2rem;
        padding-bottom: 0;
        overflow-y: hidden;
        gap: 0;
      }

      .left {
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }

      .mid {
        width: 33%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 100vh;
          width: 100%;
          object-fit: contain;
          position: absolute;
          bottom: 0;
          right: 0;

          @media screen and (max-width: 1000px) {
            height: 90vh;
            bottom: -9rem;
            position: relative;
          }
        }

        @media screen and (max-width: 1000px) {
          width: 100%;
          height: 100%;
          justify-content: flex-end;
          align-items: flex-end;
        }
      }

      .right {
        width: 33%;
        height: 90vh;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
    }
  }
`;

function Third() {
  return (
    <ThirdContainer>
      <div className="third-container">
        <div className="top">
          <div className="left">
            <h1>
              Let's Talk <br />
              <span>About FAD</span>
            </h1>
          </div>
          <div className="right">
            <p>
              FAD is one of the best social media platform to show your fashion
              skills to people and earn money and fame from it.
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <TextReveal
              para={`FAD is not just a platform; it's a revolution that breaks the chains of conventional fashion and social media norms. It is an enchanting world where fashion enthusiasts from all walks of life gather to express their unique style without fear of judgment. FAD's purpose is to provide an open and inclusive environment, fostering creativity and connection among fashionistas worldwide. Here, you'll explore a vibrant fashion fiesta, learning from style innovators, and embarking on exciting fashion adventures.

What sets FAD apart is its revolutionary tier system, rewarding your fashion journey as you ascend through different levels. Starting as a Beginner, you'll unlock marvelous fashion perks with each tier, from brand coupons to exclusive previews of upcoming products. The tier system also paves the way for fashion influencers to emerge, monetize their accounts, and create their own fashion communities.

Beyond its innovative fashion offerings, FAD brings together a community of like-minded individuals who celebrate diverse styles and ideas. It is a social media haven where authenticity reigns, empowering you to connect and collaborate with fellow fashion mavens.

`}
            />
          </div>
          <div className="mid">
            <Image src={fad1} alt="Fad-about" />
          </div>
          <div className="right">
            <TextReveal
              para={`   FAD isn't just a fleeting trend,
    It's a fashion realm where talents ascend.
    A social platform where styles take flight,
    And creativity sparkles with pure delight.
  
    Unleash your passion, break every chain,
    In this vibrant community's terrain.
    Express without judgment, be your own star,
    Fashion's playground, no limits to how far.
  
    Connect with fashionistas, a global array,
    Learn from innovators, in your own way.
    A revolutionary blend of fashion and more,
    A social haven where talents galore.
  
    Earn for your skills, your art on display,
    A true trendsetter, come what may.
    FAD's purpose is clear, a pathway so grand,
    To turn your love for fashion into something grand.
  
    Revolutionizing the social media sphere,
    Where fashion's the language, loud and clear.
    Join the movement, seize the stage,
    Let your style and skills engage.
  
    In the Fashion Odyssey, a world so divine,
    FAD creates magic, let your talent shine.
    Come, embrace this platform, trend and friend,
    FAD, where your fashion journey knows no end.`}
            />
          </div>
        </div>
      </div>
    </ThirdContainer>
  );
}

export default Third;
