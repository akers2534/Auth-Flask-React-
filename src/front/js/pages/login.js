import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const [password, setPassword] = useState("");
  function HandelSubmit(e) {
    e.preventDefault();
    fetch(
      "https://3001-akers2534-authflaskreac-teu0acz5vwx.ws-us94.gitpod.io/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        sessionStorage.setItem("token", result.access_token);
        navigate("/private");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <form onSubmit={HandelSubmit} className="text-center mt-5">
      <h1>Login</h1>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
