import { Movie } from '../../types/tmdb';

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => (
  <div className="bg-gray-700 text-white p-4 rounded shadow">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title || movie.name}
      className="rounded"
    />
    <h2 className="text-lg font-bold mt-2">{movie.title || movie.name}</h2>
    <p className="text-sm">{movie.release_date || movie.first_air_date}</p>
  </div>
);

export default Card;
