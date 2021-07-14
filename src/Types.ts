export interface DataModel {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  genres: string[];
  images: string[];
}

export interface MetadataModel {
  current_page: string;
  per_page: number;
  page_count: number;
  total_count: number;
}

export interface MoviesModel {
  data: DataModel[];
  metadata: MetadataModel;
}

export interface addMovieBody {
  Title: string;
  IMDBID: string;
  Country: string;
  Year: number;
  Director: string | undefined;
  ImdbRating: string | undefined;
  ImdbVotes: string | undefined;
  Poster: string;
}

export interface GenreModel {
  id: number;
  name: string;
}

export interface MoviesContextModel {
  movies: MoviesModel | {};
  nextPage: Function;
  onSearch: Function;
  changeGenre: Function;
  setgenreId: Function;
  getAllMovies: Function;
  movieId: number;
}

export interface MovieInfoModel {
  title: string;
  images: string[];
  actors:string;
  awards:string;
  country:string;
  director:string;
  plot:string
  runtime:string
  year:string
}
