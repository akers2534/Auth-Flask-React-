import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  let isLogin = store.isLogin;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        {!isLogin ? (
          <div className="ml-auto">
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-primary">Signup</button>
            </Link>
          </div>
        ) : (
          <Link to="/" onClick={actions.logOut}>
            <button className="btn btn-primary">Log Out</button>
          </Link>
        )}{" "}
      </div>
    </nav>
  );
};
