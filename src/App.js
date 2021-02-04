import "./App.css";
import React from "react";
import axios from "axios";

import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  // Url variable
  const url = "http://localhost:3000";

  // States
  const [songs, setSongs] = React.useState([]);

  // Function to get list of songs
  const getSongs = () => {
    axios.get(url + "/tunatunr").then((response) => {
      setSongs(response.data);
    });
  };

  React.useEffect(() => {
    getSongs();
  }, []);

  return (
    <div className="App">
      <Display />
      <Form />
    </div>
  );
}

export default App;
