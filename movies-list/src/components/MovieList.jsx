import MovieCard from "./MovieCard";

function MovieList({ movies = [], onRemove, onEdit }) {
  return (
    <div className="max-w-6xl mx-auto">
        {movies.length === 0 ? (
          <p className="text-black-400 text-center m-auto my-15">Nenhum filme adicionado.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 my-5">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onRemove={onRemove} onEdit={onEdit} />
            ))}
          </div>
        )}
      </div>
  );
}

export default MovieList;