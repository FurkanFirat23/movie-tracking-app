"use client";

import { useState } from 'react';
import { fetchFromOMDB } from '../../utils/omdb';
import Card from '../components/Card';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const searchMovies = async () => {
    if (!query) return;
    const data = await fetchFromOMDB<{ Search: any[] }>(`s=${query}`);
    setResults(data.Search || []);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Film ara..."
        className="p-2 border border-gray-400 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={searchMovies}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Ara
      </button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {results.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}
