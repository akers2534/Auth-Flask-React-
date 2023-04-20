import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Private = () => {
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  useEffect(() => {
    if (!store.isLogin) {
      navigate("/login");
    }
  }, []);
  return <div>Private</div>;
};

export default Private;
