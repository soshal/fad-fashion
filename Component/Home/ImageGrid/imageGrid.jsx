"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/all";
import "./(css)/style.css";
import Images from "./Images";
import Slider from "./Slider";

gsap.registerPlugin(Flip);
gsap.registerPlugin(Draggable);

const ImageGrid = () => {
  const imagesRef = useRef([]);
  const closeBtnRef = useRef(null);
  let isAnimating = false;
  let mode = "grid";

  const [showSlider, setShowSlider] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    const dragCursor = document.querySelector(".dragcursor");
    const body = document.body;
    const images = document.querySelectorAll(".intro-grid__img");
    const main = document.querySelector(".main");

    if (showSlider) {
      dragCursor.classList.add("dragcursor--active");
      body.style.cursor = "none";
      images.forEach((image) => {
        image.style.cursor = "none";
        image.style.borderRadius = "500px";
      });
      main.style.position = "fixed";
      main.style.overflow = "hidden";
      main.style.width = "100vw";
      main.style.height = "100vh";
      main.style.top = "0";
      main.style.left = "0";
      main.style.zIndex = "10000";
      main.style.background = "#101010";
      main.style.transitionDuration = "1s";
      main.style.transitionEase = "ease-in-out";
      body.style.overflow = "hidden";
      body.style.width = "100vw";
      body.style.height = "100vh";
      body.style.scrollbar = "none";
      closeBtnRef.current.style.cursor = "pointer";
    } else {
      dragCursor.classList.remove("dragcursor--active");
      body.style.cursor = "none";
      images.forEach((image) => {
        image.style.cursor = "pointer";
        image.style.borderRadius = "100px";
      });
      main.style.position = "inherit";
      main.style.overflow = "visible";
      main.style.zIndex = "inherit";
      main.style.background = "inherit";
      body.style.overflow = "visible";
      body.style.width = "inherited";
      body.style.height = "inherited";
      body.style.scrollbar = "inherit";
    }

    const updateDragCursor = (x, y) => {
      dragCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      updateDragCursor(x, y);
    };

    const handleMouseEnter = () => {
      if (showSlider) {
        dragCursor.classList.add("dragcursor--active");
      }
    };

    const handleMouseLeave = () => {
      dragCursor.classList.remove("dragcursor--active");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showSlider]);

  useEffect(() => {
    const gridImages = imagesRef.current;
    const closeCtrl = closeBtnRef.current;

    gsap.set(gridImages, { perspective: 800 });

    const showSlider = (image) => {
      if (image.classList.contains("intro-grid__img--current")) return;
      if (isAnimating || mode === "slider") return;
      isAnimating = true;
      mode = "slider";

      const DURATION = 1;
      const EASE = "power4.inOut";

      gsap
        .timeline({
          defaults: {
            duration: DURATION,
            ease: EASE,
          },
          onComplete: () => (isAnimating = false),
        })
        .addLabel("start", 0)
        .to(
          ".intro-title",
          {
            ease: EASE,
            autoAlpha: 0,
            yPercent: (pos) => (pos ? 0 : 100),
            opacity: (pos) => (pos ? 1 : 0),
            onComplete: () => gsap.set(".intro-title", { opacity: 0 }),
            delay: 1,
          },
          "start"
        )
        .to(
          ".grid-title",
          {
            yPercent: -100,
            ease: EASE,
          },
          "start"
        )
        .to(
          ".grid-labels",
          {
            yPercent: -100,
            ease: EASE,
          },
          "start"
        )
        .to(image, { filter: "brightness(100%) hue-rotate(0deg)" }, "start")
        .add(() => {
          document
            .querySelector(".intro-grid")
            .classList.add("intro-grid--scatter");
          image.classList.add("intro-grid__img--current");
          gsap.to(".intro-grid", {
            x:
              window.innerWidth / 2 -
              (image.getBoundingClientRect()["left"] + image.offsetWidth / 2),
            y:
              window.innerHeight / 2 -
              (image.getBoundingClientRect()["top"] + image.offsetHeight / 2),
            ease: EASE,
            duration: 2,
          });
        }, "start")
        .set(
          ".slider-title",
          {
            opacity: 1,
            delay: 2,
            ease: EASE,
          },
          "start"
        )
        .fromTo(
          [".slider-title__main", ".slider-title__desc"],
          {
            yPercent: (pos) => (pos ? 240 : 100),
            opacity: (pos) => (pos ? 0 : 1),
            delay: 2,
          },
          {
            yPercent: 0,
            opacity: 1,
            ease: EASE,
            duration: DURATION,
            delay: 2,
          },
          "start"
        )
        .add(() => {
          document.querySelector(".controls").classList.add("controls--open");
        }, "start")
        .fromTo(
          [closeCtrl],
          {
            scale: 0,
            opacity: 0,
          },
          {
            opacity: 1,
            scale: 1,
            delay: 0,
          },
          "start"
        );
    };

    const hideSlider = () => {
      if (isAnimating || mode === "grid") return;
      isAnimating = true;
      mode = "grid";

      const DURATION = 1;
      const EASE = "power4.inOut";

      let current = gridImages.indexOf(
        document.querySelector(".intro-grid__img--current")
      );

      gsap
        .timeline({
          defaults: {
            duration: DURATION,
            ease: EASE,
          },
          onComplete: () => (isAnimating = false),
        })
        .to(
          ".intro-title",
          {
            autoAlpha: 1,
            delay: 2,
            duration: DURATION,
            yPercent: (pos) => (pos ? 100 : 0),
            opacity: (pos) => (pos ? 0 : 1),
            onComplete: () => gsap.set(".intro-title", { opacity: 1 }),
          },
          "start"
        )
        .to(
          [closeCtrl],
          {
            opacity: 0,
            scale: 0,
            delay: 2,
          },
          "start"
        )
        .add(() => {
          document
            .querySelector(".controls")
            .classList.remove("controls--open");
        }, "start")
        .to(
          [".slider-title__main", ".slider-title__desc"],
          {
            yPercent: (pos) => (pos ? 150 : 100),
            opacity: (pos) => (pos ? 0 : 1),
            onComplete: () => gsap.set(".slider-title", { opacity: 0 }),
            delay: 0,
          },
          "start"
        )
        .add(() => {
          document
            .querySelector(".intro-grid")
            .classList.remove("intro-grid--scatter");
          gridImages[current].classList.remove("intro-grid__img--current");
          gsap.to(gridImages[current], {
            filter: "brightness(100%) hue-rotate(0deg)",
            duration: DURATION,
            ease: EASE,
          });
          gsap.to(".intro-grid", {
            x: 0,
            y: 0,
            duration: DURATION,
            ease: EASE,
          });
        }, "start")
        .to(
          [".grid-labels", ".grid-title"],
          {
            yPercent: 0,
          },
          "start"
        );
    };

    const dragGrid = () => {
      Draggable.create(".intro-grid", {
        type: "x,y",
        inertia: true,
        edgeResistance: 0.1,
        dragResistance: 0.1,
        throwProps: true,
        cursor: "none",
        onDrag: function () {
          gsap.set(".intro-grid", {
            x: this.x,
            y: this.y,
          });
        },
      });
    };

    gridImages.forEach((image, index) => {
      image.addEventListener("click", () => {
        showSlider(image, index);
        dragGrid();
        setShowSlider(true);
        setCurrentImageIndex(index);
      });

      image.addEventListener("mouseenter", () => {
        if (mode === "slider") return;
        gsap.fromTo(
          image,
          {
            filter: "brightness(100%) hue-rotate(0deg)",
          },
          {
            duration: 1,
            ease: "power4",
            filter: "brightness(150%) hue-rotate(120deg)",
          }
        );
      });

      image.addEventListener("mouseleave", () => {
        if (mode === "slider") return;
        gsap.to(image, {
          duration: 1,
          ease: "power4",
          filter: "brightness(100%) hue-rotate(0deg)",
        });
      });
    });

    closeCtrl.addEventListener("click", () => {
      hideSlider();
      !dragGrid();
      setShowSlider(false);
      setCurrentImageIndex(null);
    });
  }, []);

  return (
    <>
      <p className="click-title"> </p>
      <main className="main">
        <Images imagesRef={imagesRef} />
        <div className="intro-title">
          <h2 className="intro-title__main oh">
            <span className="oh__inner">FAD</span>
          </h2>
          <span className="intro-title__sub oh">
            <span className="oh__inner">
              Join Fad, The Ultimate Fashion Community Platform!
            </span>
          </span>
        </div>

        <Slider currentImageIndex={currentImageIndex} />
        <div className="controls">
          <button className="unbutton close" ref={closeBtnRef}>
            X
          </button>
        </div>
        <div className="dragcursor">
          <div className="dragcursor__inner">Drag</div>
        </div>
      </main>
    </>
  );
};

export default ImageGrid;
