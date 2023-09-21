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
              "url(https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=2000)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-9"
          ref={(el) => (imagesRef.current[1] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1627577279474-b87fe8490617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=2000)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-17"
          ref={(el) => (imagesRef.current[2] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1619789332426-00fc137633d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=2000)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-21"
          ref={(el) => (imagesRef.current[3] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=2000)",
          }}
        ></div>
        <div
          className="intro-grid__img pos-13"
          ref={(el) => (imagesRef.current[4] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1622281587418-f2f4fc06ae7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=2000)",
          }}
        ></div>

        <div
          className="intro-grid__img pos-18"
          ref={(el) => (imagesRef.current[5] = el)}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1599146604986-9e3071a41060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=2000)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Images;
