import React from "react";

const Display = (props) => {
  return (
    <div className="display">
      <div className="header">
        <h1>tunatunr</h1>
        <p>Drop the bass</p>
      </div>
      <div className="playlist">
        <h3>Playlist</h3>
        <div className="title">DummyTitle</div>
        <div className="artist">DummyArtist</div>
        <div className="time">4:30</div>
      </div>
    </div>
  );
};

export default Display;
