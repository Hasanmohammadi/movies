import { useContext } from "react";
import style from "./../firstPage.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { moviesContext } from "../../../Context/contextMovies";
import { DataModel, MoviesModel } from "../../../Types";
import { Link } from "react-router-dom";
export interface CardsProps {}

const Cards: React.FC<CardsProps> = () => {
  const { movies, nextPage, setMovieIdFn } = useContext(moviesContext);
  const { data } = movies as MoviesModel;

  return (
    <InfiniteScroll
      dataLength={data.length}
      hasMore={true}
      next={nextPage}
      loader={<p>Loading...</p>}
      endMessage={<p>end</p>}
    >
      <div className={style.container}>
        {data.map((movies: DataModel) => (
          <Link
            to={`./${movies.title.replaceAll(" ", "-")}/${movies.id}`}
            key={movies.id}
            onClick={() => setMovieIdFn(movies.id)}
          >
            <div className={style.card}>
              <img className={style.image} alt="poster" src={movies.poster} />
              <div className={style.information}>
                <h3>Title: {movies.title}</h3>
                <p>Genres: {movies.genres}</p>
                <p>Year: {movies.year}</p>
                <p>Imdb rating: {movies.imdb_rating}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Cards;
