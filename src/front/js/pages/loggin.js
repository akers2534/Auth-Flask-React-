import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Loggin = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Loggin</h1>
      <input type="text" />
      <input type="password" />
      <button>Loggin</button>
    </div>
  );
};
