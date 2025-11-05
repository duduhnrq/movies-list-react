import MovieCard from "./MovieCard";

function MovieList({ movies = [], onRemove }) {
  return (
    <div className="w-6xl m-auto">
      <div className="flex flex-wrap gap-5">
        {movies.length === 0 ? (
          <p className="text-black-400 text-center m-auto my-15">Nenhum filme adicionado.</p>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onRemove={onRemove} />
          ))
        )}
      </div>
    </div>
  );
}

export default MovieList;