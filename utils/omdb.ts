export const fetchFromOMDB = async <T>(query: string): Promise<T> => {
  const apiKey = process.env.OMDB_API_KEY;  
  if (!apiKey) {
    throw new Error('OMDB API key is missing');  
  }
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&${query}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
