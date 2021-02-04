import React from "react";

const Form = (props) => {
  const [formData, setFormData] = React.useState(props.song);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    props.handleSubmit(formData); // Submit to Parents desired function
    setFormData(props.song);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <h3 className="add-song">Add a song. No fishy business.</h3>
      <form className="form-body" onSubmit={handleSubmit}>
        <div>Song name</div>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Never Gonna Give You Up"
          onChange={handleChange}
        />
        <div>Artist name</div>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          placeholder="Rick Astley"
          onChange={handleChange}
        />
        <div>Album name</div>
        <input
          type="text"
          name="album"
          value={formData.album}
          placeholder="Whenever You Need Somebody"
          onChange={handleChange}
        />
        <div>Song length</div>
        <input
          type="text"
          name="time"
          value={formData.time}
          placeholder="3:32"
          onChange={handleChange}
        />
        <input className="btn-submit" type="submit" value="Krillin' It" />
      </form>
    </div>
  );
};

export default Form;
