import GalleryItem from "./components/GalleryItem";
import { CaroContainer, Grid } from "./components/GalleryItem/style";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { carouselImages, images } from "./Mock";
import { ThemeProvider } from "styled-components";
import { responsive } from "./components/carousel";
function App() {
  const theme = {
    main: "mediumseagreen",
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid>
          {images.map((img, index) => {
            return <GalleryItem src={img} key={img} num={index + 1} />;
          })}
        </Grid>
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
                  style={{
                    display: "block",
                    margin: "0.5rem auto",
                    maxHeight: "450px",
                    objectFit: "cover",
                  }}
                />
              );
            })}
          </Carousel>
        </CaroContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
