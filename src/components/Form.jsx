import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  //handlesubmit function
  function handleSubmit(event) {
    event.preventDefault();
    console.log("The form values are", formValues);
  }

  //handleinputchange function
  function handleInputChange(event) {
    setFormValues({
      ...formValues, // the spread operator will add all existing values
      [event.target.name]: event.target.value, // then we add the new value using the form field "name" attribute and the value
    });
  }

  //multiple inputs
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        placeholder="name"
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        placeholder="email"
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <p>Current value is: {formValues.name}</p>
      <p>Current value is: {formValues.email}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

//console log when hit submit -> the form values are {name: 'Lucy', email: 'Lucyholmes08@hotmail.com'}. When you open object -> email:"lucyholmes08@hotmail.com" name:"lucy"
