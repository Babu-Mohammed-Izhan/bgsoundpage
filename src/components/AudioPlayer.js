import React, { useRef } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef();

  return (
    <div className="audio-player">
      <audio
        controls="controls"
        preload="none"
        autobuffer="true"
        style={{ display: "none" }}
        loop="true"
        ref={audioRef}
        src={src}
      ></audio>
      <button onClick={() => audioRef.current.play()}>Play</button>
    </div>
  );
};

export default AudioPlayer;
