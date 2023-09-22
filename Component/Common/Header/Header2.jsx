"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/Assets/Images/logo-dark.png";
import Link from "next/link";
import styled from "styled-components";
import WideButton from "@/Component/Animation/Buttons/WideButton";

const HeaderContainer = styled(motion.div)`
  height: 12vh;
  width: 100%;
  color: #111;
  cursor: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: auto;
  top: 0;
  left: 0;
  z-index: 998;
  background: #fff;

  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    height: 17vh;
    gap: 1rem;
  }
`;

const LeftContainer = styled.div`
  .logo {
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 7vh;
    }
  }
`;

const LogoImage = styled(Image)`
  height: 60px;
  width: 60px;
  object-fit: contain;
  position: relative;
  margin-left: 10rem;

  @media screen and (max-width: 768px) {
    width: 150px;
    bottom: -1rem;
    margin-left: 0;
  }
`;

const RightContainer = styled.div`
  display: flex;
  gap: 5rem;
  position: absolute;
  right: 10rem;
  justify-content: center;
  align-items: center;

  .a {
    color: #111;
    text-decoration: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    letter-spacing: 1px;
    font-family: "roboto";
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
      margin: 0 0.5rem;
    }
  }

  .a:hover {
    color: #ff005c;
  }

  @media screen and (max-width: 768px) {
    margin: auto;
    position: relative;
    right: 0;
    height: 7vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

function Header2() {
  return (
    <HeaderContainer
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      <LeftContainer>
        <div className="logo">
          <Link href="/" className="logoa">
            <LogoImage src={logo} alt="logo" />
          </Link>
        </div>
      </LeftContainer>
      <RightContainer>
        <Link className="a" href="/">
          
        </Link>
        <Link className="a" href="/about">
          
        </Link>
        <Link className="a" href="/fadfabsquad">
          
        </Link>
      </RightContainer>
    </HeaderContainer>
  );
}

export default Header2;
