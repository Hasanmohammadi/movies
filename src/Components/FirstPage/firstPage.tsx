import { useContext } from "react";
import { moviesContext } from "./../../Context/contextMovies";
import Cards from "./Cards/cards";
import style from "./firstPage.module.css";
import Genrs from "./Genrs/Genrs";
import ModalMovie from "./Modal/modalMovie";

export interface FirstPageProps {}

const FirstPage: React.FC<FirstPageProps> = () => {
  const { onSearch } = useContext(moviesContext);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Movies</h1>
      <input className={style.searchInput} onChange={(e) => onSearch(e)} placeholder={"search Your movie..."}/>
      <Genrs />
      <br />
      <ModalMovie />
      <Cards />
    </div>
  );
};

export default FirstPage;
