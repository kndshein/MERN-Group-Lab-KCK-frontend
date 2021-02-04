import React from "react";

const Display = (props) => {
  return (
    <div className="display-container">
      <div className="header-container">
        <h1 className="display-title">
          {" "}
          <span className="tuna">tuna</span>.tunr
        </h1>
        <p className="catch-phrase">
          "Drop the <span className="bass">bass"</span>
        </p>
      </div>
      <div className="playlist-container">
        <h2>
          <strong>Playlist</strong>
        </h2>
        <div className="song-container">
          <div className="song-title">
            <strong>DummyTitle</strong>{" "}
          </div>
          <div className="artist">
            <strong>DummyArtist</strong>{" "}
          </div>
          <div className="song-time">4:30</div>
        </div>
      </div>
    </div>
  );
};

export default Display;
