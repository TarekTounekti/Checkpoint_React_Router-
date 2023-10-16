import React from 'react';

const MovieCard = ({ movie, onDeleteMovie }) => {
  // Fonction qui gère la suppression d'un film
  const handleDelete = () => {
    onDeleteMovie(movie.id); // Appelle la fonction onDeleteMovie avec l'ID du film en paramètre
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt="Movie" className="movie-image" /> {/* Affiche l'image du film */}
      <h3>{movie.title}</h3> {/* Affiche le titre du film */}
      <p>{movie.description}</p> {/* Affiche la description du film */}
      <p>Rating: {movie.rating}</p> {/* Affiche la note du film */}
      <button onClick={handleDelete} className="btn btn-danger">Delete</button> {/* Bouton "Delete" qui appelle la fonction handleDelete lorsqu'il est cliqué */}
    </div>
  );
};

export default MovieCard;