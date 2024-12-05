"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchFromOMDB } from "../utils/omdb";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<any[]>([]); // Popüler filmler listesi

  // Birden fazla popüler film setini yükle
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const movieQueries = ["batman", "marvel", "harry potter", "star wars"]; // Farklı film serileri
      const allMovies: any[] = [];

      try {
        for (const searchQuery of movieQueries) {
          const data = await fetchFromOMDB<{ Search: any[] }>(`s=${searchQuery}`);
          if (data.Search) {
            allMovies.push(...data.Search);
          }
        }
        setPopularMovies(allMovies); // Popüler filmleri kaydet
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="p-4">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-800 p-4 text-white">
        <h1 className="text-2xl font-bold">Film Takip Uygulaması</h1>
        <div className="space-x-4">
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition">
              Giriş Yap
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition">
              Kayıt Ol
            </button>
          </Link>
        </div>
      </nav>

      {/* Popüler Filmler */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Popüler Filmler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularMovies.map((movie) => (
            <div key={movie.imdbID} className="bg-gray-700 text-white p-4 rounded shadow">
              <img src={movie.Poster} alt={movie.Title} className="rounded" />
              <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
              <p className="text-sm">{movie.Year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
