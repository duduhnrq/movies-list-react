function MovieFilter({
  filters = { query: "", genre: "" },
  onChange = () => {},
}) {
  function handleQuery(e) {
    onChange({ ...filters, query: e.target.value });
  }

  function handleGenre(e) {
    onChange({ ...filters, genre: e.target.value });
  }

  function handleClear() {
    onChange({ query: "", genre: "" });
  }

  return (
    <div className="w-6xl bg-black-200 text-sm m-auto my-0 p-5 rounded-lg border border-black-300 text-white flex gap-5">
      <div className="flex flex-col w-full">
        <label htmlFor="title-search" className="mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-4 w-4 mr-1 mb-1 text-blue-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Buscar por título:
        </label>
        <input
          type="text"
          id="title-search"
          placeholder="Digite o título do filme"
          value={filters.query}
          className="bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out"
          onChange={handleQuery}
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="genre-search" className="mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-4 w-4 mr-1 mb-1 text-blue-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-7.172a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filtrar por gênero:
        </label>
        <select
          name="genre-search"
          id="genre-search"
          value={filters.genre}
          className="bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out"
          onChange={handleGenre}
        >
          <option value="">Todos os gêneros</option>
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
          <option value="sci-fi">Ficção científica</option>
          <option value="sport">Esporte</option>
          <option value="thriller">Suspense</option>
          <option value="war">Guerra</option>
          <option value="western">Faroeste</option>
          <option value="short">Curta-metragem</option>
          <option value="other">Outro</option>
        </select>
      </div>
    </div>
  );
}

export default MovieFilter;
