import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import bird from "./logos/bird.svg";
import rain from "./logos/rain.svg";
import crickets from "./logos/crickets.svg";
import fire from "./logos/fire.svg";
import people from "./logos/people.svg";
import thunder from "./logos/thunder.svg";
import waves from "./logos/waves.svg";
import whitenoise from "./logos/whitenoise.svg";
import wind from "./logos/wind.svg";

function App() {
  return (
    <div className="App">
      <div className="audios">
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
            "https://st2.asoftmurmur.com/assets/p/content/fire/main-bird.mp4"
          }
          Icon={bird}
        />
        <AudioPlayer
          src={
            "https://st2.asoftmurmur.com/assets/p/content/fire/main-crickets.mp4"
          }
          Icon={crickets}
        />
        <AudioPlayer
          src={
            "https://st2.asoftmurmur.com/assets/p/content/fire/main-people.mp4"
          }
          Icon={people}
        />
        <AudioPlayer
          src={
            "https://st2.asoftmurmur.com/assets/p/content/fire/main-whitenoise.mp4"
          }
          Icon={whitenoise}
        />
      </div>
    </div>
  );
}

export default App;
