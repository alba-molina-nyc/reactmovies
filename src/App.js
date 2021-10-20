import { useState } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const API_KEY = "98e3fb1f";

  const [ movie, setMovie ] = useState(null);
  const getMovie = async (searchTerm) => {

    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    );
    const data = await response.json();
    setMovie(data);
  };

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay />
    </div>
  );
}

export default App;