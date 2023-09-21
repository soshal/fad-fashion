"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import First from "@/Component/Works/First";
import TierSystem from "@/Component/Works/TierSystem";
import BattleWars from "@/Component/Works/Battlewars";
import Footer from "@/Component/Common/Footer/Footer";
import Influencer from "@/Component/Works/Influencer";
import Loader1 from "@/Component/Common/Loaders/Loader1";
import Header from "@/Component/Common/Header/Header";

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background: linear-gradient(#101010, #151515);
  padding: 0 10rem;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;
  overflow-x: hidden;

  @media screen and (max-width: 1000px) {
    padding: 0 5rem;
    padding-top: 15vh;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    padding-top: 17vh;
  }
`;

function page() {
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
          <Container>
            <First />
            <TierSystem />
            <BattleWars />
            <Influencer />
            <Footer />
          </Container>
        </>
      )}
    </div>
  );
}

export default page;
