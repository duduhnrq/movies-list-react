// ...existing code...
import { useState } from "react";
import MovieIcon from "../assets/movie.svg?react";
import StarIcon from "../assets/star.svg?react";

const GENRES = [
  { value: "", label: "Selecione um gênero" },
  { value: "action", label: "Ação" },
  { value: "adventure", label: "Aventura" },
  { value: "animation", label: "Animação" },
  { value: "biography", label: "Biografia" },
  { value: "comedy", label: "Comédia" },
  { value: "crime", label: "Crime" },
  { value: "documentary", label: "Documentário" },
  { value: "drama", label: "Drama" },
  { value: "family", label: "Família" },
  { value: "fantasy", label: "Fantasia" },
  { value: "history", label: "Histórico" },
  { value: "horror", label: "Terror" },
  { value: "music", label: "Música" },
  { value: "musical", label: "Musical" },
  { value: "mystery", label: "Mistério" },
  { value: "romance", label: "Romance" },
  { value: "sci-fi", label: "Ficção científica" },
  { value: "sport", label: "Esporte" },
  { value: "thriller", label: "Suspense" },
  { value: "war", label: "Guerra" },
  { value: "western", label: "Faroeste" },
  { value: "short", label: "Curta-metragem" },
  { value: "other", label: "Outro" },
];

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [poster, setPoster] = useState("");

  function resetForm() {
    setTitle("");
    setYear("");
    setGenre("");
    setRating(0);
    setPoster("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !year || !genre) {
      alert("Preencha título, ano e gênero.");
      return;
    }

    const genreObj = GENRES.find((g) => g.value === genre);
    const movie = {
      id: Date.now(),
      title: title.trim(),
      year: Number(year),
      genre,
      genreLabel: genreObj ? genreObj.label : genre,
      rating,
      poster: poster.trim(),
    };

    if (typeof onAddMovie === "function") {
      onAddMovie(movie);
    }
    resetForm();
  }

  return (
    <div className="w-6xl bg-black-200 m-auto mt-28 mb-5 p-5 rounded-lg border border-black-300 text-white">
      <div className="flex items-center mb-5">
        <MovieIcon className="w-8 h-8 mr-2" />
        <h2 className="text-2xl font-medium">Adicionar Filme</h2>
      </div>

      <form className="text-sm" onSubmit={handleSubmit}>
        <div className="flex gap-5 items-center justify-center mb-5">
          <div className="flex flex-col w-full">
            <label htmlFor="title" className="mb-2">
              Título: *
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              name="title"
              placeholder="Digite o título do filme"
              className="bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="year" className="mb-2">
              Ano: *
            </label>
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              type="number"
              id="year"
              name="year"
              placeholder="2025"
              className="bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="genre" className="mb-2">
            Gênero: *
          </label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            name="genre"
            id="genre"
            className="bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out"
            required
          >
            {GENRES.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-5">
          <label className="mb-2">Avaliação: *</label>
          <div>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                className="inline-block mr-1"
                aria-label={`${n} estrelas`}
              >
                <StarIcon
                  className={`w-7 h-7 transition-all duration-300 cursor-pointer  ${n <= rating ? "opacity-100 scale-110 fill-blue-light" : "opacity-40 stroke-gray-400 hover:opacity-70"}`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="poster" className="mb-2">
            URL do pôster:
          </label>
          <input
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            type="text"
            id="poster"
            name="poster"
            placeholder="https://exemplo.com/poster.jpg"
            className="bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-light p-3 rounded-lg font-medium hover:bg-blue-dark cursor-pointer transition-all duration-200 ease-in-out"
          >
            Adicionar Filme
          </button>
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
// ...existing code...