import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  
  const repApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);    //Aca le estamos diciendo, la data que vamos a utilizar del json que viene de la API
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {/* INICIO TERNARIOS - Nos permitira ver si el objeto character viene vacio y realizar una funcion especifica */}
        {characters ? (
          <Characters character={characters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={repApi} className="btn-search">
              Ver todos los personajes
            </button>
          </>
        )}
        {/* FIN TERNARIOS */}
      </header>
    </div>
  );
}

export default App;
