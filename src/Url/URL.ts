export const BASE_URL = "http://www.moviesapi.ir/api/v1/movies?page=";

export const GENRES_URL = "https://www.moviesapi.ir/api/v1/genres";

export const createSearchUrl = (name: string) => {
  return `http://www.moviesapi.ir/api/v1/movies?q=${name}`;
};

export const createGenreUrl = (id: number, page: number) => {
  return `https://www.moviesapi.ir/api/v1/genres/${id}/movies?page=${page}`;
};

export const getMovieInfoUrl = (id: number) => {
  return `http://www.moviesapi.ir/api/v1/movies/${id}`;
};
