import React from "react";
import { CaroContainer } from "../GalleryItem/style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouselImages } from "../../Mock";
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ArtCarousel = () => {
  return (
    <CaroContainer>
      <Carousel
        className="carouselCont"
        responsive={responsive}
        swipeable={true}
        showDots={true}
        arrows={true}
        focusOnSelect={true}
        minimumTouchDrag={30}
      >
        {carouselImages.map((img, index) => {
          return (
            <img
              src={img}
              key={img}
              alt="image"
              style={{
                display: "block",
                margin: "0.5rem auto",
                maxHeight: "400px",
                objectFit: "cover",
                width: "auto",
              }}
            />
          );
        })}
      </Carousel>
    </CaroContainer>
  );
};

export default ArtCarousel;
