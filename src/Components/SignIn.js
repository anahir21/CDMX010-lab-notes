import React from "react";
import { useState } from "react";
import { auth } from "../Config";
import "../Components/SignIn.css";

const initialValues = {
  user: "",
  email: "",
  password: "",
};

export const SignIn = () => {
  const [inputs, setInputs] = useState(initialValues);

  function handleOnChange(e) {
    const { id, value } = e.target;
    const newUser = { ...inputs, [id]: value };
    setInputs(newUser);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(inputs.email, inputs.password)
      .then((user) => console.log("Iniciado"));
  }

  return (
    <div className="signInForm">
      <div>
        <form onSubmit={handleSubmit} className="form">
          <h1> ¿Ya tienes cuenta?</h1>
          <input
            type="text"
            id="user"
            value={inputs.user}
            onChange={handleOnChange}
            placeholder="Usuario"
          ></input>
          <input
            type="password"
            value={inputs.email}
            onChange={handleOnChange}
            id="password"
            placeholder="Contraseña"
          ></input>
          <button
            type="submit"
            value="signUp"
            value={inputs.password}
            onChange={handleOnChange}
            className="buttonRForm"
          >
            {" "}
            Ingresa
          </button>
        </form>
      </div>
    </div>
  );
};
