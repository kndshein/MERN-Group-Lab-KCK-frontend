import React from "react";

const Display = (props) => {
  console.log("Display Props", props);
  return (
    <div className="display-container">
      <div className="header-container">
        <h1 className="display-title">
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
        {props.songs.map((song) => {
          return (
            <div className="song-container">
              <div className="song-title">
                <strong>{song.title}</strong>
              </div>
              <div className="artist">
                <strong>{song.artist}</strong>
              </div>
              <div className="song-album">{song.album}</div>
              <div className="song-time">{song.time}</div>
              <div className="song-favorite">O</div>
              <div
                className="song-delete"
                onClick={() => props.handleDelete(song)}
              >
                X
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Display;
