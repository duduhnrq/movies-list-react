import MovieIcon from '../assets/movie.svg?react';

function Header() {
    return (
        <header className="w-full fixed p-7 shadow-sm bg-black-100/85 backdrop-blur-sm text-white text-center text-2xl font-medium border-b border-black-300 flex items-center justify-center">
            <MovieIcon className="w-8 h-8 mr-2" />
            <h1>Meu Catálogo de Filmes</h1>
        </header>
    )
}

export default Header;