import { useState, useEffect } from 'react';
import { fetchFromOMDB } from '../../../utils/omdb';

interface MoviePageProps {
  params: { id: string };
}

const MoviePage = async ({ params }: MoviePageProps) => {
  const [movieData, setMovieData] = useState<any>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  
  // API'den film verilerini çekme
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFromOMDB(`i=${params.id}&plot=full`);
      if (data) {
        setMovieData(data);
        // Fragman verisini YouTube API'sinden al
        const trailerResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data.Title} trailer&key=YOUR_YOUTUBE_API_KEY`);
        const trailerData = await trailerResponse.json();
        if (trailerData.items && trailerData.items.length > 0) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailerData.items[0].id.videoId}`);
        }
      }
    };

    fetchData();
  }, [params.id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{movieData.Title}</h1>
      <p className="text-xl my-2">{movieData.Plot}</p>
      
      {/* Film poster */}
      <img src={movieData.Poster} alt={movieData.Title} className="w-1/3 rounded" />
      
      {/* Actors */}
      <div className="my-4">
        <h2 className="text-2xl font-semibold">Actors:</h2>
        <p>{movieData.Actors}</p>
      </div>

      {/* Genre */}
      <div className="my-4">
        <h2 className="text-2xl font-semibold">Genre:</h2>
        <p>{movieData.Genre}</p>
      </div>

      {/* Trailer */}
      {trailerUrl && (
        <div className="my-4">
          <h2 className="text-2xl font-semibold">Watch Trailer:</h2>
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Benzer Filmler */}
      <div className="my-4">
        <h2 className="text-2xl font-semibold">Similar Movies:</h2>
        <p>Coming soon...</p>
        {/* Buraya benzer filmleri gösterecek kodu ekleyebilirsiniz */}
      </div>
    </div>
  );
};

export default MoviePage;
