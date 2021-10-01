import React, { useRef, useState } from "react";

const AudioPlayer = ({ src, Icon }) => {
  const [isplaying, setisplaying] = useState(false);
  const audioRef = useRef();

  const soundtoggle = () => {
    if (isplaying) {
      setisplaying(false);
      audioRef.current.pause();
    } else {
      setisplaying(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="audio-player col-6 col-sm-6 col-md-4 col-xl-3">
      <audio
        controls="controls"
        preload="none"
        autobuffer="true"
        style={{ display: "none" }}
        loop={true}
        ref={audioRef}
        src={src}
      ></audio>
      <div className={` icon ${isplaying ? "Pause" : "Play"}`}>
        <img src={Icon} alt="icon" onClick={() => soundtoggle()} />
        {isplaying ? (
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="100"
              value="75"
              className="slider"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
