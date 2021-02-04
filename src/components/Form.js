import React from "react";

const Form = (props) => {
  return (
    <div className="add-a-song">
      <h3>Add a song. No fishy business.</h3>
      <form>
        <input type="text" name="title" />
        <input type="text" name="artist" />
        <input type="text" name="time" />
        <input type="submit" value="Krillin' It" />
      </form>
    </div>
  );
};

export default Form;
