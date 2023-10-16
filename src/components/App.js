import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovieForm from './AddMovieForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // État local pour la liste de films
  const [movies, setMovies] = useState([]);
  // État local pour la liste de films filtrés
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Fonction appelée lorsqu'un filtre est appliqué
  const handleFilter = ({ title, rating }) => {
    // Filtrage des films en fonction du titre et de la note
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = rating === '' || movie.rating.toString().includes(rating);

      return titleMatch && ratingMatch;
    });

    setFilteredMovies(filtered); // Met à jour la liste de films filtrés avec les résultats du filtrage
  };

  // Fonction appelée lorsqu'un nouveau film est ajouté
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // Ajoute le nouveau film à la liste de films
    handleFilter({ title: '', rating: '' }); // Réapplique les filtres pour mettre à jour la liste de films filtrés
  };

  // Fonction appelée lorsqu'un film est supprimé
  const handleDeleteMovie = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId); // Filtrage des films pour supprimer celui avec l'ID correspondant
    setMovies(updatedMovies); // Met à jour la liste de films avec les films restants
    handleFilter({ title: '', rating: '' }); // Réapplique les filtres pour mettre à jour la liste de films filtrés
  };

  return (
    <div className="App">
      <h1 className="mb-4">Movie Library</h1>
      {/* Composant Filter pour les champs de filtrage */}
      <Filter onFilter={handleFilter} />
      {/* Composant MovieList pour afficher la liste de films filtrés */}
      <MovieList movies={filteredMovies} onDeleteMovie={handleDeleteMovie} />
      {/* Composant AddMovieForm pour ajouter de nouveaux films */}
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;