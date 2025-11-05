import StarIcon from "../assets/star.svg?react";

function MovieCard({ movie, onRemove }) {
  const rating = movie?.rating || 0;
  const posterStyle = movie?.poster
    ? { backgroundImage: `url(${movie.poster})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {};

  return (
    <div className="bg-black-200 border border-black-300 rounded-lg text-white w-60 my-5">
      <div className="h-80 w-auto bg-black-300 rounded-t-lg" style={posterStyle}>
        {/* imagem do cartão */}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-medium text-md">{movie?.title ?? "Filme Teste"}</h3>
        <div>
          <p className="text-black-400 text-sm">
            {movie?.year ?? "----"} • {movie?.genreLabel ?? movie?.genre ?? "—"}
          </p>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((n) => (
            <StarIcon key={n} className={`w-6 h-6 ${n <= rating ? "fill-blue-light" : "stroke-gray-400 opacity-40"}`} />
          ))}
        </div>

        <div className="flex gap-2 mt-2 text-sm">
          <button type="button" className="flex-1 bg-black-400 py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-black-300 cursor-pointer transition">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
            </svg>
            Editar
          </button>

          <button
            type="button"
            onClick={() => onRemove(movie.id)}
            className="flex-1 bg-blue-light py-2 rounded-lg flex justify-center items-center gap-1 hover:bg-blue-dark cursor-pointer transition"
          >
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
            </svg>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;