import { fetchFromTMDB } from '../../../utils/omdb';
import { Movie } from '../../../types/tmdb';

interface MoviePageProps {
  params: { id: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await fetchFromTMDB<Movie>(`/movie/${params.id}`);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{movie.title || movie.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name}
        className="rounded my-4"
      />
      <p>{movie.release_date || movie.first_air_date}</p>
      <p>{movie.overview}</p>
    </div>
  );
}
