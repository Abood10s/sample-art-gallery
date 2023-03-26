import GalleryItem from "./components/GalleryItem";
import { Grid, Music } from "./components/GalleryItem/style";
import { MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { useEffect, useState } from "react";
import { images } from "./Mock";
import { ThemeProvider } from "styled-components";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const theme = {
    main: "mediumseagreen",
  };
  useEffect(() => {
    setIsPlaying(true);
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid>
          <Music onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
          </Music>
          {/* <Sound
            url={audioUrl}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            loop={true}
            volume={45}
            // playFromPosition={300 /* in milliseconds />*/}

          {images.map((img, index) => {
            return <GalleryItem src={img} key={img} num={index + 1} />;
          })}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
