import { useContext, useEffect, useState } from "react";
import { MovieInfoModel } from "../../../Types";
import { moviesContext } from "./../../../Context/contextMovies";
import { getData } from "./../../../helpers/getData";
import { getMovieInfoUrl } from "./../../../Url/URL";
import PhotoSlider from "./photoSlider";
import style from "./style.module.css";
export interface CardProps {}

const Card: React.FC<CardProps> = () => {
  const [movieInfo, setMovieInfo] = useState<MovieInfoModel | {}>({});
  const { movieId } = useContext(moviesContext);
  const movieIdAs = movieInfo as MovieInfoModel;

  useEffect(() => {
    const getInfo = async () => {
      const data = await getData(getMovieInfoUrl(movieId));

      setMovieInfo(data);
    };
    getInfo();
  }, [movieId]);

  return (
    <div className={style.container}>
      {"images" in movieInfo ? (
        <PhotoSlider photos={movieIdAs.images} />
      ) : (
        <h1>Loading...</h1>
      )}
      <h1 className={style.title}>{movieIdAs.title}</h1>
      <p>Actors :{movieIdAs.actors}</p>
      <p>Awards :{movieIdAs.awards}</p>
      <p>Country :{movieIdAs.country}</p>
      <p>Director :{movieIdAs.director}</p>
      <p>Plot :{movieIdAs.plot}</p>
      <p>Runtime :{movieIdAs.runtime}</p>
      <p>Year :{movieIdAs.year}</p>
    </div>
  );
};

export default Card;
