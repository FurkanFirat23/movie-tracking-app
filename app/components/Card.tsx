import { Movie } from '../../types/omdb';  // OMDB tipini kullanıyoruz

interface CardProps {
  movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => (
  <div className="bg-gray-700 text-white p-4 rounded shadow">
    <img
      src={movie.Poster}  // OMDB'nin Poster alanını kullanıyoruz
      alt={movie.Title}  // OMDB'nin Title alanını kullanıyoruz
      className="rounded"
    />
    <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>  // OMDB'den gelen başlık
    <p className="text-sm">{movie.Year}</p>  {/* OMDB'den gelen yıl */}
  </div>
);

export default Card;
