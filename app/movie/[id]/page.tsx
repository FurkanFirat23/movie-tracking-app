// app/movie/[id]/page.tsx
import { fetchFromOMDB } from '../../../utils/omdb';
import { Movie } from '../../../types/omdb';

interface MoviePageProps {
  params: { id: string };
}

const MoviePage = async ({ params }: MoviePageProps) => {
  // API'den veri çekme
  const movieData = await fetchFromOMDB(params.id);

  if (!movieData) {
    return <div>Movie not found</div>;  // Hata durumu
  }

  return (
    <div>
      <h1>{movieData.Title}</h1>
      <img src={movieData.Poster} alt={movieData.Title} />
      <p>{movieData.Plot}</p>
      <p>{movieData.Year}</p>
    </div>
  );
};

export default MoviePage;
