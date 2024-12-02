export interface Movie {
    id: number;
    title: string;
    name?: string; // Diziler için
    poster_path: string;
    release_date?: string;
    first_air_date?: string;
  }
  
  export interface TMDBResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
  