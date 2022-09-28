import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/userName.slice";

const UserInput = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatchUserName = () => {
    dispatch(changeName(userName));
    navigate("/pokedex");
  };
  return (
    <div>
      <h1>Ingresa</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={dispatchUserName}>Ingresar</button>
    </div>
  );
};

export default UserInput;
