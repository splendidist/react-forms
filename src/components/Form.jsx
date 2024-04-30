import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  //handlesubmit function
  function handleSubmit(event) {
    event.preventDefault();
  }

  //handleinputchange function
  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Input Form</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
      <p>Current value is: {name}</p>
    </form>
  );
}
