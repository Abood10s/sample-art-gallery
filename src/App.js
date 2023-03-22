import GalleryItem from "./components/GalleryItem";
import { Grid, Music } from "./components/GalleryItem/style";
import audioUrl from "./audio/themesong.mp3";
import { MdMusicOff } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { useState } from "react";
import { images, Sound } from "./imports";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className="App">
      <Grid>
        <Music onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
        </Music>
        <Sound
          url={audioUrl}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          loop={true}
          // playFromPosition={300 /* in milliseconds */}
        />
        {images.map((img, index) => {
          return <GalleryItem src={img} key={img} num={index + 1} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
