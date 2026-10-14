import React, { useState } from 'react';
import './App.css';

const movies = [
  {
    id: 'inception',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi · Thriller',
    rating: '8.8',
    poster:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=85',
    description:
      'A skilled thief who steals secrets through dream-sharing technology is offered a chance to erase his past by planting an idea in someone’s mind.',
    trailerLink: 'https://www.youtube-nocookie.com/embed/YoHD9XEInc0',
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi · Adventure',
    rating: '8.7',
    poster:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=85',
    description:
      'As Earth becomes increasingly difficult to inhabit, a former pilot joins a mission through a wormhole to search for a new home for humanity.',
    trailerLink: 'https://www.youtube-nocookie.com/embed/zSWdZVtXT7E',
  },
  {
    id: 'dark-knight',
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action · Crime',
    rating: '9.0',
    poster:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85',
    description:
      'Batman faces a criminal mastermind whose escalating attacks push Gotham City and its people to their limits.',
    trailerLink: 'https://www.youtube-nocookie.com/embed/EXeTwQWrcwY',
  },
  {
    id: 'spider-verse',
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Animation · Action',
    rating: '8.4',
    poster:
      'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=900&q=85',
    description:
      'Teenager Miles Morales discovers that he is not the only Spider-Man and teams up with heroes from across the multiverse.',
    trailerLink: 'https://www.youtube-nocookie.com/embed/g4Hbz2jLxvQ',
  },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const returnHome = () => {
    setSelectedMovie(null);
  };

  return (
    <main className="app-shell">
      <header className="site-header">
        <button className="brand" type="button" onClick={returnHome}>
          <span className="brand-mark" aria-hidden="true">C</span>
          <span>CineScope</span>
        </button>
        <span className="header-note">A little more movie magic</span>
      </header>

      {selectedMovie ? (
        <section className="detail-page" aria-labelledby="movie-title">
          <button className="back-button" type="button" onClick={returnHome}>
            <span aria-hidden="true">←</span> Back to all movies
          </button>
          <div className="detail-layout">
            <div className="detail-copy">
              <p className="eyebrow">Movie spotlight</p>
              <h1 id="movie-title">{selectedMovie.title}</h1>
              <p className="movie-meta">
                {selectedMovie.year} <span aria-hidden="true">·</span>{' '}
                {selectedMovie.genre} <span aria-hidden="true">·</span>{' '}
                <span className="rating">★ {selectedMovie.rating}</span>
              </p>
              <h2>About the movie</h2>
              <p className="movie-description">{selectedMovie.description}</p>
            </div>
            <img
              className="detail-poster"
              src={selectedMovie.poster}
              alt={`${selectedMovie.title} movie artwork`}
            />
          </div>
          <section className="trailer-section" aria-labelledby="trailer-title">
            <div className="section-heading">
              <p className="eyebrow">Watch the preview</p>
              <h2 id="trailer-title">Official trailer</h2>
            </div>
            <div className="trailer-frame">
              <iframe
                src={selectedMovie.trailerLink}
                title={`${selectedMovie.title} trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        </section>
      ) : (
        <section className="home-page" aria-labelledby="page-title">
          <div className="hero">
            <p className="eyebrow">Find your next favorite</p>
            <h1 id="page-title">Stories worth staying in for.</h1>
            <p className="hero-copy">
              Explore a hand-picked collection of films and their trailers.
            </p>
          </div>
          <section className="movie-section" aria-labelledby="movies-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">The collection</p>
                <h2 id="movies-title">Featured movies</h2>
              </div>
              <span className="movie-count">{movies.length} films</span>
            </div>
            <div className="movie-grid">
              {movies.map((movie) => (
                <button
                  className="movie-card"
                  type="button"
                  key={movie.id}
                  onClick={() => setSelectedMovie(movie)}
                  aria-label={`View ${movie.title} details`}
                >
                  <span className="poster-wrap">
                    <img src={movie.poster} alt="" className="movie-poster" />
                    <span className="card-rating">★ {movie.rating}</span>
                    <span className="play-indicator" aria-hidden="true">▶</span>
                  </span>
                  <span className="card-copy">
                    <span className="card-title">{movie.title}</span>
                    <span className="card-meta">
                      {movie.year} <span aria-hidden="true">·</span> {movie.genre}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </section>
        </section>
      )}

      <footer className="site-footer">Made for movie nights.</footer>
    </main>
  );
}

export default App;
