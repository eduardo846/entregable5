import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserInput from "./components/UserInput";
import Pokedex from "./components/Pokedex";
import PokedesDetail from "./components/PokedesDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserInput />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokedesDetail />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
