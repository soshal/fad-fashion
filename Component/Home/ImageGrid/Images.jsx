"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Images({ imagesRef }) {
  const handleDistortionAnimation = (element) => {
    const tl = gsap.timeline({
      paused: true,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1,
    });

    // Set up the initial state of the animation
    tl.set(element, { filter: "blur(0) distort(0)" });

    // Define the distortion animation
    tl.to(
      element,
      {
        duration: 1,
        filter: "blur(3px) distort(0.1)",
        ease: "power2.inOut",
      },
      // Iterate over each pixel in the image and distort it
      (_, i) => {
        const pixel = element.getContext("2d").getImageData(i, 0, 1, 1);
        pixel.data[0] = pixel.data[0] + Math.random() * 255;
        pixel.data[1] = pixel.data[1] + Math.random() * 255;
        pixel.data[2] = pixel.data[2] + Math.random() * 255;
        element.getContext("2d").putImageData(pixel, i, 0);
      }
    );

    // Attach event handlers for hover animation
    element.addEventListener("mouseenter", () => {
      tl.play();
    });

    element.addEventListener("mouseleave", () => {
      tl.reverse();
    });
  };

  useEffect(() => {
    imagesRef.current.forEach((element) => {
      handleDistortionAnimation(element);

      // Define the event listener functions for mouseenter and mouseleave
      const handleMouseEnter = () => {
        gsap.to(element, { duration: 0.2, scale: 1.2 });
      };

      const handleMouseLeave = () => {
        gsap.to(element, { duration: 0.2, scale: 1 });
      };
    });
  }, [imagesRef]);

  return (
    <div className="intro-grid-wrap">
      <div className="intro-grid intro-grid--images">
        <div
          className="intro-grid__img pos-11"
          ref={(el) => (imagesRef.current[0] = el)}
          style={{
            backgroundImage:
            "url(https://i.ibb.co/f4bwkYK/sexy1.png)"
          }}
        ></div>

        <div
          className="intro-grid__img pos-9"
          ref={(el) => (imagesRef.current[1] = el)}
          style={{
            backgroundImage:
             "url(https://i.ibb.co/F4ySbh7/sexy2.png)"
          }}
        ></div>

        <div
          className="intro-grid__img pos-17"
          ref={(el) => (imagesRef.current[2] = el)}
          style={{
            backgroundImage:
              "url(https://i.ibb.co/TwXtfFh/sexy3.png)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-21"
          ref={(el) => (imagesRef.current[3] = el)}
          style={{
            backgroundImage:
              "url(https://i.ibb.co/7y9jqLM/sexy4.png)",
          }}
        ></div>
        <div
          className="intro-grid__img pos-13"
          ref={(el) => (imagesRef.current[4] = el)}
          style={{
            backgroundImage:
            "url(https://i.ibb.co/y6zjNJ7/sexy5.png)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-18"
          ref={(el) => (imagesRef.current[5] = el)}
          style={{
            backgroundImage:
              "url(https://i.ibb.co/PzNR3qq/sexy6.png)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Images;
