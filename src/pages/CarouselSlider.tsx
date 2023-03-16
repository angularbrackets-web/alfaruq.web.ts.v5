import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  slides: JSX.Element[];
}

const CarouselSlider = ({ slides }: CarouselProps): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [slidePaused, setSlidePaused] = useState(false);
  

  useEffect(() => {
    if(!slidePaused){
    intervalRef.current = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slides?.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }
  }, [slides?.length]);

  const pauseSlide = (() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSlidePaused(true);
  });


  const handleClick = (direction: "prev" | "next") => {

    if (intervalRef.current) clearInterval(intervalRef.current);

    setIndex((currentIndex) => {
      let nextIndex = 0;
      if (direction === "next") {
        nextIndex = (currentIndex + 1) % slides?.length;
      } else if (direction === "prev") {
        nextIndex =
          currentIndex === 0 ? slides?.length - 1 : currentIndex - 1;
      }
      return nextIndex;
    });

    intervalRef.current = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % slides?.length);
    }, 3000);
    
  };
  



  return (
    <div className="flex relative h-full">
      {slides?.map((slide, i) => (
        <div
          key={i}
          className={` carousel-slide ${
            i === index ? "block carousel-slide-active" : "hidden"
          } absolute top-0 left-0 w-full h-full`}
          onMouseEnter={pauseSlide}
          onMouseLeave={() => handleClick("next")}
        >
          {slide}
        </div>
      ))}

      <div className="Absolute-Center left-0 flex items-center" 
      >
        <button className="w-10 h-10" onClick={() => handleClick("prev")}>
          <div className="bg-gray-600 text-white bg-opacity-50 rounded-full h-10 w-10 p-2 flex items-center justify-center">
            <svg width={32} height={32} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#fff"
                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
              />
            </svg>
          </div>
        </button>
      </div>
      <div className="Absolute-Center right-0 flex items-center"
      >
        <button className="w-10 h-10" onClick={() => handleClick("next")}>
          <div className="bg-gray-600 text-white bg-opacity-50 rounded-full h-10 w-10 p-2 flex items-center justify-center">
            <svg width={32} height={32} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="none"
                stroke="#fff"
                d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
