import { useState } from "react";
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
  { value: "sci-fi", label: "Ficção Científica" },
  { value: "sport", label: "Esporte" },
  { value: "thriller", label: "Suspense" },
  { value: "war", label: "Guerra" },
  { value: "western", label: "Faroeste" },
  { value: "short", label: "Curta-metragem" },
  { value: "other", label: "Outro" },
];

function Star({ filled, className = "" }) {
  return (
    <StarIcon
      className={`w-6 h-6 ${
        filled ? "fill-blue-light" : "stroke-gray-400 opacity-40"
      } ${className}`}
    />
  );
}

function MovieCard({ movie, onRemove, onEdit }) {
  const rating = movie?.rating || 0;
  const posterStyle = movie?.poster
    ? {
        backgroundImage: `url(${movie.poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  const [isOpen, setIsOpen] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [editForm, setEditForm] = useState({
    title: movie?.title || "",
    year: movie?.year || "",
    genre: movie?.genre || "",
    rating: movie?.rating || 0,
    poster: movie?.poster || "",
  });

  function openModal() {
    setEditForm({
      title: movie?.title || "",
      year: movie?.year || "",
      genre: movie?.genre || "",
      rating: movie?.rating || 0,
      poster: movie?.poster || "",
    });
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSave() {
    const genreValue = (editForm.genre || movie?.genre || "").trim();
    const genreObj = GENRES.find((g) => g.value === genreValue);
    const genreLabel = genreObj
      ? genreObj.label
      : editForm.genreLabel || movie?.genreLabel || genreValue;

    const updated = {
      ...movie,
      title: (editForm.title || "").trim(),
      year: Number(editForm.year) || movie?.year,
      genre: genreValue,
      genreLabel,
      rating: Number(editForm.rating) || 0,
      poster: (editForm.poster || "").trim(),
    };
    if (typeof onEdit === "function") onEdit(updated);
    closeModal();
  }

  return (
    <div className="bg-black-200 border border-black-300 rounded-lg text-white w-auto">
      <div
        className="h-100 w-auto bg-black-300 rounded-t-lg"
        style={posterStyle}
      >
        {/* imagem do cartão */}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-medium text-md truncate">{movie?.title ?? "Filme Teste"}</h3>
        <div>
          <p className="text-black-400 text-sm">
            {movie?.year ?? "----"} • {movie?.genreLabel ?? movie?.genre ?? "—"}
          </p>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((n) => (
            <StarIcon
              key={n}
              className={`w-6 h-6 ${
                n <= rating ? "fill-blue-light" : "stroke-gray-400 opacity-40"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2 mt-2 text-sm">
          <button
            type="button"
            onClick={openModal}
            className="flex-1 bg-black-400 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-black-300 cursor-pointer transition"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
              />
            </svg>
            Editar
          </button>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="w-full max-w-lg bg-black-200 rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-1">
                    <svg
                      className="w-5 h-5 text-blue-light"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
                      />
                    </svg>
                    Editar filme
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
                  >
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  <div>
                    <label className="text-sm block mb-1 text-white">
                      Título
                    </label>
                    <input
                      value={editForm.title}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, title: e.target.value }))
                      }
                      className="w-full rounded-lg p-3 bg-black-300 focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    <label className="text-sm block mb-1 text-white">Ano</label>
                    <input
                      value={editForm.year}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, year: e.target.value }))
                      }
                      type="number"
                      className="w-full rounded-lg p-3 bg-black-300 focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-300 ease-in-out"
                    />
                  </div>
                  <div>
                    <label className="text-sm block mb-1 text-white">
                      Gênero
                    </label>
                    <select
                      name="genre"
                      id="genre"
                      value={editForm.genre}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, genre: e.target.value }))
                      }
                      className="w-full rounded-lg p-3 bg-black-300 focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-300 ease-in-out"
                    >
                      <option value="">Selecione um gênero</option>
                      <option value="action">Ação</option>
                      <option value="adventure">Aventura</option>
                      <option value="animation">Animação</option>
                      <option value="biography">Biografia</option>
                      <option value="comedy">Comédia</option>
                      <option value="crime">Crime</option>
                      <option value="documentary">Documentário</option>
                      <option value="drama">Drama</option>
                      <option value="family">Família</option>
                      <option value="fantasy">Fantasia</option>
                      <option value="history">Histórico</option>
                      <option value="horror">Terror</option>
                      <option value="music">Música</option>
                      <option value="musical">Musical</option>
                      <option value="mystery">Mistério</option>
                      <option value="romance">Romance</option>
                      <option value="sci-fi">Ficção Científica</option>
                      <option value="sport">Esporte</option>
                      <option value="thriller">Suspense</option>
                      <option value="war">Guerra</option>
                      <option value="western">Faroeste</option>
                      <option value="short">Curta-metragem</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm block mb-1 text-white">
                      Avaliação
                    </label>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          type="button"
                          onClick={() =>
                            setEditForm((s) => ({ ...s, rating: n }))
                          }
                          className="inline-block"
                          aria-label={`${n} estrelas`}
                        >
                          <Star
                            filled={n <= (editForm.rating || 0)}
                            className={`w-7 h-7 transition-all duration-300 cursor-pointer  ${
                              n <= (editForm.rating || 0)
                                ? "opacity-100 scale-110 fill-blue-light"
                                : "opacity-40 stroke-gray-400 hover:opacity-70"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm block mb-1 text-white">
                      URL do pôster
                    </label>
                    <input
                      value={editForm.poster}
                      onChange={(e) =>
                        setEditForm((s) => ({ ...s, poster: e.target.value }))
                      }
                      className="w-full rounded-lg p-3 bg-black-300 focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-300 ease-in-out"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 p-4">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg bg-black-400 hover:bg-black-300 transition-all duration-300 ease-in-out cursor-pointer w-full"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 rounded-lg bg-blue-light text-white hover:bg-blue-dark transition-all duration-300 ease-in-out cursor-pointer w-full"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowRemoveConfirm(true)}
            className="flex-1 bg-blue-light py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-blue-dark cursor-pointer transition"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
            Remover
          </button>
        </div>
      </div>
      {showRemoveConfirm && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md bg-black-200 rounded-lg overflow-hidden border border-black-300">
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center gap-1">
                <svg
                  className="w-5 h-5 text-blue-light"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                  />
                </svg>
                Remover filme
              </h3>
              <button
                onClick={() => setShowRemoveConfirm(false)}
                className="text-gray-400 hover:text-gray-500 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 text-sm text-white">
              <p>
                Tem certeza que deseja remover{" "}
                <strong>{movie?.title ?? "este filme"}</strong> da sua lista?
              </p>
            </div>
            <div className="flex justify-end gap-2 p-4">
              <button
                onClick={() => setShowRemoveConfirm(false)}
                className="px-4 py-2 rounded-lg bg-black-400 hover:bg-black-300 transition-all duration-300 ease-in-out cursor-pointer w-full"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  if (typeof onRemove === "function") onRemove(movie?.id);
                  setShowRemoveConfirm(false);
                }}
                className="px-4 py-2 rounded-lg bg-blue-light text-white hover:bg-blue-dark transition-all duration-300 ease-in-out cursor-pointer w-full"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
