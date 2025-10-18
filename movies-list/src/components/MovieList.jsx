import MovieIconMuted from '../assets/movie-muted.svg?react';
import MovieCard from './MovieCard';

function MovieList() {
    return (
        <div className='w-6xl m-auto mt-5'>
            <div className='text-white font-medium text-2xl'>
                {/* <h2>Nenhum filme encontrado</h2> */}
                <h2>1 filme</h2>
            </div>

            {/* <div className='text-center py-16'>
                <MovieIconMuted className="w-16 h-16 mb-2 m-auto" />
                <p className='text-black-300 font-medium'>Comece adicionando seu primeiro filme!</p>
            </div> */}

            <div>
                <MovieCard />
            </div>
        </div>
    )
}

export default MovieList;