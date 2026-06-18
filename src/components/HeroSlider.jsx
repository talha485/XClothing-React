import React, { useState, useEffect, useRef } from "react";
import ArrowButton  from "./ArrowButton";

const slideData = [
  { id: 1, image: "/Banner.png", title: "New Arrival", subtitle: "Shop Now", hasText: true },
  { id: 2, image: "/banner2.png", hasText: false },
  { id: 3, image: "/banner3.png", hasText: false },
  { id: 4, image: "/banner4.png", hasText: false },
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isPaused = useRef(false);

  useEffect(function () {
    const timer = setInterval(function () {
      if (!isPaused.current) {
        setCurrentIndex(function (prev) {
          return prev === slideData.length - 1 ? 0 : prev + 1;
        });
      }
    }, 3000);
    return function () { clearInterval(timer); };
  }, []);

  function goNext() {
    setCurrentIndex(function (prev) { return prev === slideData.length - 1 ? 0 : prev + 1; });
  }
  function goPrev() {
    setCurrentIndex(function (prev) { return prev === 0 ? slideData.length - 1 : prev - 1; });
  }

  return (
    <div
      className="relative w-full h-[600px] overflow-hidden"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <SliderTrack slides={slideData} currentIndex={currentIndex} />
      <ArrowButton direction="left" onClick={goPrev} />
      <ArrowButton direction="right" onClick={goNext} />
    </div>
  );
}

function SliderTrack({ slides, currentIndex }) {
  return (
    <div
      className="flex w-full h-full transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {slides.map(function (slide) {
        return (
          <Slide
            key={slide.id}
            image={slide.image}
            title={slide.title}
            subtitle={slide.subtitle}
            hasText={slide.hasText}
          />
        );
      })}
    </div>
  );
}

function Slide({ image, title, subtitle, hasText }) {
  return (
    <div className="min-w-full h-[600px] relative shrink-0">
      <img src={image} alt="banner" className="absolute inset-0 w-full h-full object-cover" />
      {hasText && <SlideText title={title} subtitle={subtitle} />}
    </div>
  );
}

function SlideText({ title, subtitle }) {
  return (
    <>
      <h1 className="absolute top-[5%] left-1/2 -translate-x-1/2 text-black text-[60px] z-10 whitespace-nowrap">
        {title}
      </h1>
      <h2 className="absolute top-[18%] left-1/2 -translate-x-1/2 text-[#9e0a0a] text-[60px] z-10 whitespace-nowrap">
        {subtitle}
      </h2>
    </>
  );
}


export default HeroSlider;
