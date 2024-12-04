"use client";

import { useState, useEffect } from "react";
import { fetchFromOMDB } from "../utils/omdb";

export default function Home() {
  const [query, setQuery] = useState(""); // Kullanıcının arama sorgusu
  const [results, setResults] = useState<any[]>([]); // Film listesi

  // Birden fazla popüler film setini çekmek için varsayılan yükleme
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movieQueries = ["batman", "marvel", "harry potter", "star wars"]; // Farklı film serileri
      const allMovies: any[] = [];

      try {
        for (const searchQuery of movieQueries) {
          const data = await fetchFromOMDB<{ Search: any[] }>(`s=${searchQuery}`);
          if (data.Search) {
            allMovies.push(...data.Search); // Her sorgudan gelen filmleri listeye ekle
          }
        }
        setResults(allMovies); // Sonuçları güncelle
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []); // Bileşen yüklendiğinde çalışır

  // Arama yapıldığında çağrılan fonksiyon
  const searchMovies = async () => {
    const data = await fetchFromOMDB<{ Search: any[] }>(`s=${query}`);
    setResults(data.Search || []);
  };

  return (
    <div className="p-4">
      {/* Arama girişi */}
      <input
        type="text"
        placeholder="Film ara..."
        className="p-2 border border-gray-400 rounded text-black bg-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Ara
      </button>

      {/* Film listesi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {results.map((movie) => (
          <div key={movie.imdbID} className="bg-gray-700 text-white p-4 rounded shadow">
            <img src={movie.Poster} alt={movie.Title} className="rounded" />
            <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
            <p className="text-sm">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
