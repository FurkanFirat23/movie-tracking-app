"use client";  

import { useState } from 'react';
import { fetchFromOMDB } from '../utils/omdb';

export default function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const searchMovies = async () => {
    const data = await fetchFromOMDB<{ Search: any[] }>(`s=${query}`);
    setResults(data.Search || []);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Film ara..."
        className="p-2 border border-gray-400 rounded text-black bg-white" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies} className="ml-2 p-2 bg-blue-500 text-white rounded">Ara</button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {results.map((movie) => (
          <div key={movie.imdbID} className="bg-gray-700 text-white p-4 rounded shadow">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="rounded"
            />
            <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
            <p className="text-sm">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
