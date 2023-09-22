import Link from "next/link";
import React from "react";
import styled from "styled-components";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Image from "next/image";
import logo from "@/Assets/Images/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterContainer = styled.div`
  position: relative;
  width: calc(100% - 10rem);
  min-height: 85vh;
  height: 100%;
  z-index: 0;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 3rem 0;

  @media screen and (max-width: 1000px) {
    min-height: 50vh;
    height: 100%;
    width: 100%;
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    min-height: 90vh;
    height: 100%;
    width: 100%;
    margin-top: 0;
  }

  @media screen and (max-width: 376px) {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    margin: 0;
    margin-top: 0;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;

    @media screen and (max-width: 768px) {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 2;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;

    @media screen and (max-width: 768px) {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10rem;
    flex-direction: column;
    gap: 10rem;

    @media screen and (max-width: 768px) {
      padding: 3rem;
      gap: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
    }

    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;

      .left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5rem;

        @media screen and (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
          gap: 3rem;
        }

        a {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-decoration: none;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: #ff005c;
          }
        }
      }

      .right {
        cursor: pointer;
        padding: 3rem;
        background: #fff;
        border-radius: 100px;

        @media screen and (max-width: 768px) {
          padding: 1.5rem;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
        align-items: flex-start;
      }

      .left {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 3rem;
        flex-direction: column;
        .top {
          img {
            height: 10rem;
            width: 10rem;

            @media screen and (max-width: 768px) {
              height: 7rem;
              width: 7rem;
            }
          }
        }

        .mid {
          width: 70%;

          @media screen and (max-width: 768px) {
            width: 100%;
          }

          p {
            color: #eee;
            font-size: 1.5rem;
            font-weight: 500;
            letter-spacing: 1px;
            line-height: 2.5rem;
          }
        }

        .bottom {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          gap: 2rem;

          a {
            text-decoration: none;
            p {
              font-size: 1.3rem;
              color: #eee;
              font-weight: 300;
            }
          }
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .icons {
          display: flex;
          gap: 3rem;

          a {
            color: #fff;
            transition: all 0.5s ease-in-out;

            &:hover {
              color: #ff005c;
            }
          }
        }

        p {
          white-space: nowrap;
          color: #fff;
          font-size: 1.2rem;

          a {
            text-decoration: none;

            span {
              font-family: "roboto";
              font-weight: 700;
              color: #ff005c;
              font-size: 2rem;
              margin: 0 0.5rem;
            }
          }
        }
      }
    }
  }
`;

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <video
        autoPlay
        loop
        muted
        playsInline
        // src="https://res.cloudinary.com/divbobkmd/video/upload/v1690836829/trial004_crtrci.mp4"
        src="https://res.cloudinary.com/divbobkmd/video/upload/v1692699848/fad-exm1_qdqp2e.mp4"
        className="bgvideo"
      />
      <div className="overlay" />
      <div className="content">
        <div className="top">
          <div className="left">
           <Link href="/fadfabsquad"></Link>
            <Link href="/about"></Link>
            <Link href="/howfadworks"></Link>
          </div>
          <div onClick={scrollToTop} className="right">
            <KeyboardDoubleArrowUpIcon
              style={{
                color: "#ff005c",
                fontSize: "3rem",
              }}
            />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="top">
              <Image src={logo} alt={"fad logo"} />
            </div>
            <div className="mid">
              <p>
                Fad is more than a platform – it's a movement that empowers
                fashion enthusiasts and influencers. Our mission is to provide a
                space where your style shines, and your influence grows.
              </p>
            </div>
            <div className="bottom">
              <Link href="mailto:dhirajg934@gmail.com">
                {" "}
                <p>businessteamfad@gmail.com </p>
              </Link>

              <Link href="tel:+919904392992">
                {" "}
                <p>+91-8287637236 </p>
                <p>+91-9821211763 </p>
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <a href="https://www.instagram.com/fad__in" target="_blank">
                <InstagramIcon
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </a>
              {/* <Link href="/"> */}
              <FacebookIcon
                style={{
                  fontSize: "2rem",
                  cursor: "not-allowed",
                }}
              />

              <TwitterIcon
                style={{
                  fontSize: "2rem",
                  cursor: "not-allowed",
                }}
              />

              <YouTubeIcon
                style={{
                  fontSize: "2rem",
                  cursor: "not-allowed",
                }}
              />
            </div>
            <p>© 2023 FAD. All rights reserved.</p>
            <p>
              Created by{" "}
              <a
                href="https://www.linkedin.com/company/cyper-studio/?viewAsMember=true"
                target="_blank"
              >
                <span>Cyper Studio</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
