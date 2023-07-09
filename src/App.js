import GalleryItem from "./components/GalleryItem";
import { Grid } from "./components/GalleryItem/style";
import { images } from "./Mock";
import { ThemeProvider } from "styled-components";
import ArtCarousel from "./components/carousel/index";
function App() {
  const theme = {
    main: "mediumseagreen",
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ArtCarousel />
        <Grid>
          {images.map((img, index) => {
            return <GalleryItem src={img} key={img} num={index + 1} />;
          })}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
