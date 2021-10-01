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
    <div className="audio-player">
      <audio
        controls="controls"
        preload="none"
        autobuffer="true"
        style={{ display: "none" }}
        loop={true}
        ref={audioRef}
        src={src}
      ></audio>
      <div
        onClick={() => soundtoggle()}
        className={` icon ${isplaying ? "Pause" : "Play"}`}
      >
        <img src={Icon} alt="icon" />
      </div>
    </div>
  );
};

export default AudioPlayer;
