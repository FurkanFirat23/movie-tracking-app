// app/movie/[id]/page.tsx
import { fetchFromOMDB } from '../../../utils/omdb';

interface MoviePageProps {
  params: {
    id: string;
  };
  movieData: any;
}

const MoviePage = ({ params, movieData }: MoviePageProps) => {
  return (
    <div>
      <h1>{movieData?.Title}</h1>
      <p>{movieData?.Plot}</p>
      <img src={movieData?.Poster} alt={movieData?.Title} />
    </div>
  );
};

export const getServerSideProps = async ({ params }: { params: { id: string } }) => {
  const data = await fetchFromOMDB(params.id);
  return {
    props: {
      movieData: data,
    },
  };
};

export default MoviePage;
