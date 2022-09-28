import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import PokeCard from "./PokeCard";

const Pokedex = () => {
  const name = useSelector((state) => state.userName);
  const [characterList, setCharacterList] = useState([]);
  const [locationsList, setLocationList] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setCharacterList(res.data.results));

    axios
      .get("https://pokeapi.co/api/v2/location/")
      .then((res) => setLocationList(res.data.results));
  }, []);
  const searchName = () => {
    navigate(`/pokedex/${nameInput}`);
  };
  const searchLocations = (locationUrl) => {
    axios.get(locationUrl)
    .then(res => setCharacterList(res.data.region.url));
  };
  console.log(characterList)

  return (
    <div>
      <h1>Pokedex</h1>
      <p>Bienvenido {name}</p>
      <div>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button onClick={searchName}>Search</button>
      </div>
      <div>
        <select onChange={(e) => searchLocations(e.target.value)}>
          <option value="">Selecciona</option>
          {locationsList.map((location) => (
            <option value={location.url} key={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {characterList.map(character => (
            
          <PokeCard 
          url={character.url ? character.url :  character} 
          key={character.url ? character.url : character} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
