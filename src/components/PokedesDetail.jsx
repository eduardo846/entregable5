import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokedesDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setCharacter(res.data));
  }, []);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.sprites?.front_default} alt="" />
      <p>
        Mostrando personaje con id: <b>{id}</b>
      </p>
    </div>
  );
};

export default PokedesDetail;
