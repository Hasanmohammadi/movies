import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MoviesModel } from "../Types";
import { BASE_URL, createGenreUrl, createSearchUrl } from "../Url/URL";
import { getData } from "./../helpers/getData";

export const moviesContext = createContext({
  movies: {},
  nextPage: () => {},
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => {},
  changeGenre: (id: number) => {},
  setgenreId: (id: number) => {},
  getAllMovies: () => {},
  setMovieIdFn: (id: number) => {},
  movieId: 0,
});

export interface ContextMoviesProps {}

const ContextMovies: React.FC<ContextMoviesProps> = (props) => {
  const [movies, setMovies] = useState<MoviesModel | {}>({});
  const [page, setPage] = useState<number>(2);
  const [genreId, setgenreId] = useState<number>(0);
  const [movieId, setMovieId] = useState<number>(0);

  useEffect(() => {
    async function getMovies() {
      const data = await getData(BASE_URL);
      setMovies(data);
    }
    getMovies();
  }, []);

  const getAllMovies = async () => {
    const data = await getData(BASE_URL);
    setMovies(data);
  };

  const nextPage = async () => {
    if (genreId) {
      const url = createGenreUrl(genreId, page + 1);
      const data = await getData(url);
      setMovies((pre: any) => ({
        ...data,
        data: pre.data.concat(data.data),
      }));
    } else {
      const data = await getData(`${BASE_URL}${page}`);
      setMovies((pre: any) => ({
        ...data,
        data: pre.data.concat(data.data),
      }));
    }

    setPage((pre) => pre + 1);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      async function getMovies() {
        const data = await getData(createSearchUrl(e.target.value));
        setMovies(data);
      }
      getMovies();
    }, 1000);
  };

  const changeGenre = async (id: number) => {
    const url = createGenreUrl(id, 1);
    const data = await getData(url);
    setMovies(data);
  };

  const setMovieIdFn = (id: number) => {
    setMovieId(id);
  };

  if (!("data" in movies)) {
    return <p>loading...</p>;
  }

  return (
    <moviesContext.Provider
      value={{
        movies,
        nextPage,
        onSearch,
        changeGenre,
        setgenreId,
        getAllMovies,
        setMovieIdFn,
        movieId,
      }}
    >
      <Router>{props.children}</Router>
    </moviesContext.Provider>
  );
};

export default ContextMovies;
