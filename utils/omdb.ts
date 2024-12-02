export const fetchFromOMDB = async <T>(query: string): Promise<T> => {
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;  // API anahtarınız
  const response = await fetch(`https://www.omdbapi.com/?${query}&apikey=${apiKey}`);
  const data = await response.json();
  return data;
};
