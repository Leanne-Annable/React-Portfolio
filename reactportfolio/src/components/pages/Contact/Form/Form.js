import React, { useState } from "react";
import "./Form.css";

function Form() {
    // Setting the component's initial state
  const [formData, setFormData] = useState({ Name: "", email: "", comments: "" });
  const handleInputChange = function(event) {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;
    
    if (name === "Name") {
      setFormData({ Name: value, email: formData.email, comments: formData.comments });
    } else if (name === "email") {
      setFormData({ Name: formData.Name, email: value, comments: formData.comments });
    } else {
      setFormData({ Name: formData.Name, email: formData.email, comments: value });
    }
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if ((formData.Name === "" || formData.Name === " ")||(formData.email === "" || formData.email === " ")){
      alert("Fill out your name and email, please!")
      return
    }

    // Alert the user their first and last name, clear `firstName` and `lastName` and `password`, clearing the inputs
    alert(`Hello ${formData.Name}. Thank you for your message!`);
    setFormData({
      Name: "",
      email: "",
      comments: ""
    });
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <form className="form">
        <input
          value={formData.Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="Name formSect"
        />
        <br/>
        <input
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email address"
          className="email formSect"
        />
        <br/>
        <input
          value={formData.comments}
          name="comments"
          onChange={handleInputChange}
          type="text"
          placeholder="Please write any comments or questions here."
          className="comments formSect"
        />
        <button onClick={handleFormSubmit} className="btn formButton">Submit</button>
      </form>
    </div>
  );
};

export default Form;