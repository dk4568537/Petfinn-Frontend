'use client'
import React, { useEffect, useRef } from "react";
import Slider from "react-elastic-carousel";

function SlickCarousel({ children }) {
  const carouselRef = useRef(null);

  // Custom Autoplay logic
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       carouselRef.current.slideNext();
  //     }
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <Slider
        ref={carouselRef}
        itemsToScroll={1}
        itemsToShow={1}
        showArrows={false}
        itemPadding={[0, 0]}
        infiniteLoop={true}
      >
        {children}
      </Slider>
    </div>
  );
}

export default SlickCarousel;
