// app/movie/[id]/page.tsx
import { fetchFromOMDB } from '../../../utils/omdb';
import { Movie } from '../../../types/omdb';

interface MoviePageProps {
  params: { id: string };  // URL parametresi olarak film ID'si
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const movieData = await fetchFromOMDB(params.id);  // OMDB API'den veri çekme

  if (!movieData || movieData.Response === 'False') {
    return <div>Movie not found</div>;  // Film bulunamadıysa mesaj
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
