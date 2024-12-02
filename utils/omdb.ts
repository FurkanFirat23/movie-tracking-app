// utils/omdb.ts
export const fetchFromOMDB = async (id: string) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=YOUR_API_KEY`);
  const data = await response.json();
  return data;
};
