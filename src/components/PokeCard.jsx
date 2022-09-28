import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);

  return (
    <div onClick={() => navigate(`/pokedex/${character.id}`)} className="a1">
      <div>
        <h3 className="a3">{character.name}</h3>
        <img
          src={character.sprites?.front_shiny}
          alt=""
          className="imgpokemon"
        />
      </div>

      <div className="a2">
        <hr />
        <h3>{character.name}</h3>
      </div>
    </div>
  );
};

export default PokeCard;
