import React from "react";
import { useState } from "react";
import "../Components/SignUpForm.css";
import { auth } from "../Config";

export const SignUpForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    try {
      auth.signInWithEmailAndPassword(user, email, password);
      alert("¡Registrado");
    } catch {
      console.error();
    }

    return (
      <div className="signUpForm">
        <form onSubmit={registerUser} className="form">
          <h1> Crea tu cuenta </h1>
          <input
            type="text"
            id="user"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Crea un nombre de usuario"
          ></input>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
          ></input>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Crea una contraseña"
          ></input>
          <button type="submit" value="signUp" className="buttonRForm">
            {" "}
            ¡Crear ahora!
          </button>
        </form>
      </div>
    );
  };
};
