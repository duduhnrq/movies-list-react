import MovieIcon from '../assets/movie.svg?react';
import StarIcon from '../assets/star.svg?react';

function MovieForm() {
    return (
        <div className='w-6xl bg-black-200 m-auto mt-30 p-5 rounded-lg border border-black-300 text-white'>
            <div className='flex items-center mb-5'>
                <MovieIcon className="w-8 h-8 mr-2" />
                <h2 className='text-2xl font-medium'>Adicionar Filme</h2>
            </div>
            <div>
                <form className='text-sm'>
                    <div className='flex gap-5 items-center justify-center mb-5'>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="title" className='mb-2'>Título: *</label>
                            <input type="text" id="title" name="title" placeholder='Digite o título do filme' className='bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out' required/>
                        </div>
                        <div className='flex flex-col w-full'>
                            <label htmlFor="year" className='mb-2'>Ano: *</label>
                            <input type="number" id="year" name="year" placeholder='2025' className='bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out' required/>
                        </div>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="genre" className='mb-2'>Gênero: *</label>
                        <select name="genre" id="genre" className='bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out' required>
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
                            <option value="sci-fi">Ficção científica</option>
                            <option value="sport">Esporte</option>
                            <option value="thriller">Suspense</option>
                            <option value="war">Guerra</option>
                            <option value="western">Faroeste</option>
                            <option value="short">Curta-metragem</option>
                            <option value="other">Outro</option>
                        </select>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="rating" className='mb-2'>Avaliação: *</label>
                        <div>
                            <StarIcon className="w-7 h-7 inline-block cursor-pointer transition-all duration-200 ease-in-out hover:scale-120" />
                            <StarIcon className="w-7 h-7 inline-block cursor-pointer transition-all duration-200 ease-in-out hover:scale-120" />
                            <StarIcon className="w-7 h-7 inline-block cursor-pointer transition-all duration-200 ease-in-out hover:scale-120" />
                            <StarIcon className="w-7 h-7 inline-block cursor-pointer transition-all duration-200 ease-in-out hover:scale-120" />
                            <StarIcon className="w-7 h-7 inline-block cursor-pointer transition-all duration-200 ease-in-out hover:scale-120" />
                        </div>
                    </div>
                    <div className='flex flex-col mb-5'>
                        <label htmlFor="poster" className='mb-2'>URL do pôster:</label>
                        <input type="text" id="poster" name="poster" placeholder='https://exemplo.com/poster.jpg' className='bg-black-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-light transition-all duration-200 ease-in-out' />
                    </div>
                    <div>
                        <button className='w-full bg-blue-light p-3 rounded-lg font-medium hover:bg-blue-dark cursor-pointer transition-all duration-200 ease-in-out'>Adicionar Filme</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MovieForm;