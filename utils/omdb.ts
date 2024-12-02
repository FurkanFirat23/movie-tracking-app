const BASE_URL = 'https://www.omdbapi.com/';

export const fetchFromOMDB = async <T>(params: string): Promise<T> => {
  const response = await fetch(`${BASE_URL}?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data from OMDB API');
  }
  return response.json();
};
