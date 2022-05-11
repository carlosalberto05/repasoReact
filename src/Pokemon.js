import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemones, setPokemones] = useState([]);

  const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

  const getPokemons = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemones(data.results))
      .catch((err) => console.log(err));
  };

  // const getPokemons = async() => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   setPokemones(data.results)
  // }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      <h4>Desde los Pokemones</h4>
      <ol style={{ textAlign: "left" }}>
        {pokemones.map((pokemon, i) => {
          return <li key={pokemon + i}>{pokemon.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default Pokemon;
