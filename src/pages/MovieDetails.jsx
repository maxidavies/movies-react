import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>{movie.title}</strong>
        </p>
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        <p>Description: {movie.overview}</p>
        <p>Critica de pape: Texto a manopla</p>
      </div>
    </div>
  );
}
