import React from "react";
import { GiTechnoHeart } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";

const SongList = (props) => {
  const loaded = () => {
    return (
      <>
        <div className="content-container-title">
          <ul>
            <li>Song Title</li>
            <li>Artist Name</li>
            <li>Album Title</li>
            <li>Duration</li>
          </ul>
        </div>
        <div className="content-container-container">
          {props.songs.map((song, index) => {
            return (
              <div className="song-container" key={index}>
                <div className="song-title">{song.name}</div>
                <div className="song-artist">{song.artist}</div>
                <div className="song-album">{song.album}</div>
                <div className="song-time">{song.time}</div>
                <GiTechnoHeart
                  className={`heart${song.favorite ? " active" : ""}`}
                  onClick={() => props.handleFavorite(song)}
                />
                <RiDeleteBin5Line
                  className="song-delete"
                  onClick={() => props.handleDelete(song)}
                  style={{ fontSize: "23px", cursor: "pointer" }}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  };

  const loading = () => {
    return (
      <div id="loading-icon">
        <div class="cssload-dots">
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
          <div class="cssload-dot"></div>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="12"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7"
                result="goo"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </div>
    );
  };

  return props.songs.length > 0 ? loaded() : loading();
};

export default SongList;
