import MovieCard from "./MovieCard";

export default function MovieLayout({ movies }) {
  return (
    <div className="movies">
      <div className="container movies__container">
        {movies?.results &&
          movies.results.map(
            ({
              id,
              media_type,
              name,
              original_language,
              original_title,
              backdrop_path,
              poster_path,
              vote_average,
            }) => {
              return (
                <MovieCard
                  key={id}
                  rating={vote_average}
                  mediaType={media_type}
                  original_language={original_language}
                  original_title={original_title}
                  name={name}
                  backdrop_path={backdrop_path}
                  poster_path={poster_path}
                />
              );
            }
          )}
      </div>
    </div>
  );
}
