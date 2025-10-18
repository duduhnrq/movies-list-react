import StarIcon from "../assets/star.svg?react";

function MovieCard() {
  return (
    <div className="bg-black-200 border border-black-300 rounded-lg text-white w-60 my-5">
      <div className="h-80 w-auto bg-black-300 rounded-t-lg">
        {/* Movie card image goes here */}
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-medium text-md">Filme Teste</h3>
        <div>
          <p className="text-black-400 text-sm">2015 • Ação</p>
        </div>
        <div>
          <StarIcon className="w-6 h-6 inline-block" />
          <StarIcon className="w-6 h-6 inline-block" />
          <StarIcon className="w-6 h-6 inline-block" />
          <StarIcon className="w-6 h-6 inline-block" />
          <StarIcon className="w-6 h-6 inline-block" />
        </div>
        <div className="flex gap-2 mt-2 text-sm">
          <button className="bg-black-400 px-3 py-2 rounded-lg w-full flex justify-center items-center gap-1 hover:bg-black-300 cursor-pointer transition">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28"
              />
            </svg>
            Editar
          </button>
          <button className="bg-blue-light px-3 py-2 rounded-lg w-full flex justify-center items-center gap-1 hover:bg-blue-dark cursor-pointer transition">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
              />
            </svg>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
