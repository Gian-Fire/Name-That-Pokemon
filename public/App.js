import React, { useState, useEffect } from "react";
import './styles.css';
import styled from "styled-components";

function App() {
  const [ searchPokemon, setSearchPokemon ] = useState('');
  const [ pocketMonster, setPocketMonster ] = useState({});
  const [ stats, setStats ] = useState([]);
  const [ sprites, setSprites ] = useState({});

  const randomNumbers = () =>  Math.floor(Math.random() * (965 - 1) + 1);
  
  useEffect(() => caughtPokemonSprite(randomNumbers()), []);

  const caughtPokemonSprite = (caughtPokemon) => {
    fetch(`/sprites/${caughtPokemon}`)
    .then(res => res.json())
    .then((caughtPokemonSprites) => { 
      setSprites(caughtPokemonSprites);
    })
    .catch(err => console.log(err))
  }

  const CatchPocketMonster = (Catch, e) => {
    e.preventDefault();

    fetch('/pokemon')
      .then(res => res.json())
      .then(pokemon => pokemon.results.filter(pocketMonster => pocketMonster.name === Catch))
      .then(filteredPokemon => setPocketMonster(filteredPokemon[0]))
      .catch(err => console.log(err));

    caughtPokemonSprite(Catch);
  };


  return (
    <>
      <Title>Name That Pokemon!</Title>

      <div>
        <Sprite src={sprites.back_default}/>
      </div>

      <Table>
        <tr>
          <th>
            <button>
              Catch It!
            </button>
          </th>
          <th>
            <button>
              Catch It!
            </button>
          </th>
        </tr>
        <tr>
          <th>
            <button>
              Catch It!
            </button>
          </th>
          <th>
            <button>
              Catch It!
            </button>
          </th>
        </tr>
      </Table>

    </>
  );
};

export default App;

const Title = styled.h1`
  text-align: center;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const Sprite = styled.img`
  border: 2px solid black;
  display: block;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
`;

const Table = styled.table`
  th {
    color: white;
    font-size: 1.5em;
    border: 2px solid black;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 10%
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  td {
    color: white;
    font-size: 1.75em;
    border: 2px solid black;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 10%
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  button {
    border: 2px solid black;
    color: black;
    display: block;
    margin-top: 1px;
    margin-bottom: 1px;
    margin-left: auto;
    margin-right: auto;
  }

  border: 2px solid black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%
`;
