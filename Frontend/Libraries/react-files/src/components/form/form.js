import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <input placeholder="Movie name:" />
        <input placeholder="Movie views:" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
