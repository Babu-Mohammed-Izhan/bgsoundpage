import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import bird from "./logos/bird.svg";
import rain from "./logos/rain.svg";
import crickets from "./logos/crickets.svg";
import fire from "./logos/fire.svg";
import people from "./logos/people.svg";
import thunder from "./logos/thunder.svg";
import waves from "./logos/waves.svg";
import wind from "./logos/wind.svg";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className=" container audios_wrapper">
        <body className="audios row">
          <AudioPlayer
            src={
              "https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4"
            }
            Icon={rain}
          />
          <AudioPlayer
            src={
              "https://st2.asoftmurmur.com/assets/p/content/thunder/main-thunder.mp4"
            }
            Icon={thunder}
          />
          <AudioPlayer
            src={
              "https://st3.asoftmurmur.com/assets/p/content/waves/main-waves.mp4"
            }
            Icon={waves}
          />
          <AudioPlayer
            src={
              "https://st2.asoftmurmur.com/assets/p/content/wind/main-wind.mp4"
            }
            Icon={wind}
          />
          <AudioPlayer
            src={
              "https://st2.asoftmurmur.com/assets/p/content/fire/main-fire.mp4"
            }
            Icon={fire}
          />
          <AudioPlayer
            src={
              "https://st3.asoftmurmur.com/assets/p/content/birds/main-birds.ogg"
            }
            Icon={bird}
          />
          {/* <AudioPlayer
            src={"https://cdn2.noisli.com/hls/forest/hls_3.ts"}
            Icon={crickets}
          /> */}
          <AudioPlayer
            src={
              "https://st3.asoftmurmur.com/assets/p/content/people/main-people.mp4"
            }
            Icon={people}
          />
        </body>
      </div>
    </div>
  );
}

export default App;
