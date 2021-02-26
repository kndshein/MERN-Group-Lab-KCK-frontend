import "./App.css";
import React from "react";
import axios from "axios";

import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  // Url variable
  const url = "https://tunatunr.herokuapp.com";

  // State that hold the songs
  const [songs, setSongs] = React.useState([]);

  // Empty API
  const emptySong = {
    name: "",
    album: "",
    artist: "",
    time: "",
  };

  // Function to get list of songs
  const getSongs = () => {
    axios.get(url + "/tunatunr").then((response) => {
      setSongs(response.data);
    });
  };

  const handleCreate = (song) => {
    axios.post(url + "/tunatunr", song).then(() => {
      getSongs();
    });
  };

  const handleDelete = (song) => {
    axios.delete(url + "/tunatunr/id/" + song._id).then(() => {
      getSongs();
    });
  };

  // const handleFavorite = (song) => {
  //   setFavoritedSong({ ...favoritedSong }, song);
  // };

  React.useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="App">
      <Display songs={songs} handleDelete={handleDelete} />
      <div className="bottom-container">
        <div className="favorite-container">Poop</div>
        <Form song={emptySong} handleSubmit={handleCreate} />
      </div>
    </div>
  );
}

export default App;
