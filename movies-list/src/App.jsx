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

  const [filters, setFilters] = useState({ query: "", genre: "" });

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

  function handleEditMovie(editedMovie) {
    if (!editedMovie?.id || editedMovie.id == null) return;
    setMovies((prev) =>
      prev.map((m) => (m.id === editedMovie.id ? editedMovie : m))
    );
  }

  const filteredMovies = movies.filter((movie) => {
    const title = (movie?.title || "").toLowerCase();
    const q = (filters.query || "").trim().toLowerCase();
    if (q && !title.includes(q)) {
      return false;
    }
    if (
      filters.genre &&
      filters.genre !== "" &&
      (movie?.genre || "") !== filters.genre
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-black-100 min-h-screen flex flex-col">
      <Header />
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieFilter filters={filters} onChange={setFilters} />
      <MovieList
        movies={filteredMovies}
        onRemove={handleRemoveMovie}
        onEdit={handleEditMovie}
      />
      <Footer />
    </div>
  );
}

export default App;
