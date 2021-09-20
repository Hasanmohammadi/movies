import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { MovieInfoModel } from "../../../Types";
import { getData } from "./../../../helpers/getData";
import { getMovieInfoUrl } from "./../../../Url/URL";
import PhotoSlider from "./photoSlider";
import style from "./style.module.css";
export interface CardProps {}

const Card: React.FC<CardProps> = () => {
  const [movieInfo, setMovieInfo] = useState<MovieInfoModel | {}>({});
  const { id }: { name: string; id: string } = useParams();
  const movieIdAs = movieInfo as MovieInfoModel;
  const state = useSelector((state) => state);
  console.log(state);

  useEffect(() => {
    const getInfo = async () => {
      const data = await getData(getMovieInfoUrl(id));
      setMovieInfo(data);
    };
    getInfo();
  }, [id]);

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
      {/* <p>Year :{state.}</p>  */}
    </div>
  );
};

export default Card;
