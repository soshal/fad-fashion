import { useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import astro from "@/Assets/Images/astro-ilu.png";

const ResponseContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  transition: all 1s ease-in-out;
  background: #c5c5fe;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  .responseleft {
    flex: 1;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;

      @media screen and (max-width: 768px) {
        width: 100%;
        height: 50vh;
        object-fit: cover;
      }
    }
  }

  .responseright {
    flex: 1;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: linear-gradient(to right, #c5c5fe, #c8a6ff);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;
    gap: 3rem;
    font-family: "roboto";

    @media screen and (max-width: 768px) {
      width: 100%;
      min-height: 50vh;
      height: 50vh;
      background: #c5c5fe;
    }

    h1 {
      font-size: 5rem;
      font-weight: 300;
      color: #111 !important;
      text-align: center;

      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 1.5rem;
      font-weight: 300;
      color: #333;
    }

    .close {
      position: fixed;
      top: 5rem;
      right: 10rem;
      z-index: 1001;

      button {
        font-size: 5rem;
        font-weight: 300;
        color: #333;
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.5s ease-in-out;

        &:hover {
          color: #ffffff;
          rotate: 360deg;
        }
      }

      @media screen and (max-width: 768px) {
        top: 3rem;
        right: 5rem;
      }
    }
  }
`;

function Response() {
  const containerRef = useRef(null);

  const responseClose = () => {
    containerRef.current.style.transform = "translateX(-100%)";
  };

  return (
    <ResponseContainer ref={containerRef}>
      <div className="responseleft">
        <Image src={astro} alt="FabFadSquad Form Submitted" />
      </div>
      <div className="responseright">
        <h1>Thank you for submitting the form!</h1>
        <p>
          We will get back to you as soon as possible. You can close this window
          now.
        </p>
        <div className="close">
          <button
            onClick={() => {
              responseClose();
              window.location.reload();
            }}
          >
            &#x2715;
          </button>
        </div>
      </div>
    </ResponseContainer>
  );
}

export default Response;
