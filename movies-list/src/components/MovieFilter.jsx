function MovieFilter() {
    return (
        <div className="w-6xl bg-black-200 text-sm m-auto mt-5 p-5 rounded-lg border border-black-300 text-white flex gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="title-search" className='mb-2'>Buscar por título:</label>
                <input type="text" id="title-search" placeholder="Digite o título do filme" className='bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out' />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="genre-search" className='mb-2'>Filtrar por gênero:</label>
                <select name="genre-search" id="genre-search" className='bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out' required>
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
    )
}

export default MovieFilter;