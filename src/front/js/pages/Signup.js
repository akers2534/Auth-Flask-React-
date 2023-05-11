import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  function HandelSubmit(e) {
    e.preventDefault();
    fetch(
      "https://3001-akers2534-authflaskreac-7a016vk2oii.ws-us97.gitpod.io/api/signup",
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
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <form onSubmit={HandelSubmit} className="text-center mt-5">
      <h1>Signup</h1>
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
