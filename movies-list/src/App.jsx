import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieForm from "./components/MovieForm";
import MovieFilter from "./components/MovieFilter";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

function App() {
  const STORAGE_KEY = "moviesList:v1";
  const [movies, setMovies] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  function handleAddMovie(movie) {
    const withId = movie.id ? movie : { ...movie, id: Date.now() };
    setMovies((prev) => [withId, ...prev]);
  }

  function handleRemoveMovie(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  return (
    <div className="bg-black-100 min-h-screen flex flex-col">
      <Header />
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieFilter />
      <MovieList movies={movies} onRemove={handleRemoveMovie} />
      <Footer />
    </div>
  )
}

export default App;