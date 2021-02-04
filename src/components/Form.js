import React from "react";

const Form = (props) => {
  return (
    <div className="form-container">
      <h3 className="add-song">Add a song. No fishy business.</h3>
      <form className="form-body">
        <input type="text" name="title" />
        <input type="text" name="artist" />
        <input type="text" name="time" />
        <input className="btn-submit" type="submit" value="Krillin' It" />
      </form>
    </div>
  );
};

export default Form;
