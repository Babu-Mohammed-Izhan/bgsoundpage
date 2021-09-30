import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className="App">
      <AudioPlayer
        src={"https://st2.asoftmurmur.com/assets/p/content/rain/main-rain.mp4"}
      />
      <AudioPlayer />
      <AudioPlayer />
      <AudioPlayer />
      <AudioPlayer />
      <AudioPlayer />
      <AudioPlayer />
      <AudioPlayer />
    </div>
  );
}

export default App;
