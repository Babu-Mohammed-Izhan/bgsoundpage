import React, { useRef, useState } from "react";

const AudioPlayer = ({ src }) => {
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
      <button
        onClick={() => soundtoggle()}
        className={isplaying ? `Pause` : `Play`}
      >
        {isplaying ? `Pause` : `Play`}
      </button>
    </div>
  );
};

export default AudioPlayer;
