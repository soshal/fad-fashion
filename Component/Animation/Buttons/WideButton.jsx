import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const WideButton = ({
  text,
  fontsize,
  mpaddingy,
  mpaddingx,
  mfontsize,
  color,
  bg,
  hoverbg,
  hovercolor,
  bordercolor,
  mbordercolor,
  mheight,
  mwidth,
  height,
  width,
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const handleMouseMove = (event) => {
      const buttonRect = button.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      const offsetX = (x - buttonRect.left - buttonRect.width / 2) / 2;
      const offsetY = (y - buttonRect.top - buttonRect.height / 2) / 2;
      button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    button.addEventListener("mousemove", handleMouseMove);
    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const buttonElement = buttonRef.current;

    const resetTransform = () => {
      buttonElement.style.transform = "none";
    };

    const handleMouseLeave = () => {
      resetTransform();
    };

    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const ButtonWrapper = styled.div`
    background: #00000000;
    border: none;
  `;

  const Button = styled.button`
    font-weight: 500;
    font-size: ${fontsize};
    text-decoration: none;
    height: ${height};
    width: ${width};
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    transition: all 0.5s cubic-bezier(0.25, 0.5, 0.75, 1);
    overflow: hidden;
    font-family: "tenon";
    background: ${bg};
    border-radius: 500px !important;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
      padding: ${mpaddingy} ${mpaddingx};
      font-size: ${mfontsize};
      height: ${mheight};
      width: ${mwidth};
    }

    &.c-button--gooey {
      color: ${color};
      letter-spacing: .5px;
      border: 0.5px solid ${bordercolor};
      position: relative;
      transition: all 0.5s cubic-bezier(0.25, 0.5, 0.75, 1);
      outline: none;

      &:hover {
        border: 0.5px solid ${hoverbg};
      }

      @media (max-width: 768px) {
        border-color: ${mbordercolor};
      }
      .c-button__blobs {
        height: 100%;
        filter: url(#goo);
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        bottom: -3px;
        right: -1px;
        z-index: -1;

        div {
          background-color: ${hoverbg};
          width: 34%;
          height: 100%;
          border-radius: 100%;
          position: absolute;
          transform: scale(1.4) translateY(125%) translateZ(0);
          transition: all 0.7s cubic-bezier(0.25, 0.5, 0.75, 1);
        }

        div:nth-child(1) {
          left: -5%;
        }

        div:nth-child(2) {
          left: 30%;
          transition-delay: 60ms;
        }

        div:nth-child(3) {
          left: 66%;
          transition-delay: 25ms;
        }
      }

      &:hover {
        color: ${hovercolor};

        .c-button__blobs div {
          transform: scale(1.4) translateY(0) translateZ(0);
        }
      }
    }
  `;

  return (
    <ButtonWrapper>
      <Button ref={buttonRef} className="c-button c-button--gooey">
        {text}
        <div className="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "block", height: 0, width: 0 }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </ButtonWrapper>
  );
};

export default WideButton;
