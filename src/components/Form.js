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
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="album"
          value={formData.album}
          onChange={handleChange}
        />
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <input className="btn-submit" type="submit" value="Krillin' It" />
      </form>
    </div>
  );
};

export default Form;
