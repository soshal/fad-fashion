"use client";

import First from "@/Component/About/First";
import Loader1 from "@/Component/Common/Loaders/Loader1";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../../app/globals.css";
import Second from "@/Component/About/Second";
import Footer from "@/Component/Common/Footer/Footer";
import Header2 from "@/Component/Common/Header/Header2";
import Third from "@/Component/About/Third";

const AboutConatiner = styled.div`
  background: #ffffff;
  color: #111;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 10rem;
  padding-top: 5vh;

  @media screen and (max-width: 1000px) {
    padding: 0 5rem;
    padding-top: 5vh;
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 10vh;
  }

  .first-section {
    width: 100%;
  }

  .last {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 10rem;

    @media screen and (max-width: 1000px) {
      padding: 5rem 5rem;
    }

    @media screen and (max-width: 768px) {
      padding: 3rem 1rem;
    }
    h1 {
      font-size: 6rem;
      text-align: center;
      font-weight: 500;

      @media screen and (max-width: 1000px) {
        font-size: 5rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }

      span {
        color: #ff005c;
        font-family: "kurdasan";
        font-weight: 100;
      }
    }
  }
`;

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader1 />
      ) : (
        <>
          <Header2 />
          <AboutConatiner className="about">
            <div className="first-section">
              <First />
            </div>
            <div className="second-section">
              <Second />
            </div>
            <div className="about-section">
              <Third />
            </div>
            <div className="last">
              <h1>
                An innovative platform that facilitates the{" "}
                <span> sharing</span> of <span>photos</span> and{" "}
                <span>videos</span> in various formats, Designed to be a conduit
                for expressing your <span> passion for fashion</span> and
                emerging trends.
              </h1>
            </div>
            <div className="footer">
              <Footer />
            </div>
          </AboutConatiner>
        </>
      )}
    </div>
  );
}

export default Page;
