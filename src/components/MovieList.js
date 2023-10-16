import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onDeleteMovie }) => {
  return (
    <div className="movie-list">
      {/* Parcourt chaque film dans la liste "movies" et génère un composant MovieCard pour chaque film */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} />
      ))}
    </div>
  );
};

export default MovieList;