import { Dropdown, Menu, message } from "antd";
import { useContext, useEffect, useState } from "react";
import { GenreModel } from "../../../Types";
import { getData } from "./../../../helpers/getData";
import { GENRES_URL } from "./../../../Url/URL";
import { moviesContext } from "./../../../Context/contextMovies";
export interface GenrsProps {}

const Genrs: React.FC<GenrsProps> = () => {
  const [genres, setGenres] = useState<GenreModel[]>();
  const { changeGenre, setgenreId, getAllMovies } = useContext(moviesContext);

  useEffect(() => {
    async function getgenres() {
      const data = await getData(GENRES_URL);
      setGenres(data);
    }
    getgenres();
  }, []);

  function handleButtonClick(e: any) {
    message.info("All genre selected.");
    console.log("click left button", e);
    setgenreId(0);
    getAllMovies();
  }

  function handleMenuClick(e: any) {
    console.log(e.domEvent.target.textContent);
    const genreId = genres?.find(
      (genre) => genre.name === e.domEvent.target.textContent
    );
    const genreIdAs = genreId as GenreModel;

    changeGenre(genreIdAs.id);

    setgenreId(genreIdAs.id);

    message.info(`${genreIdAs.name} selected.`);
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      style={{ overflow: "overlay", maxHeight: "10em" }}
    >
      {genres?.map((genre: GenreModel) => (
        <Menu.Item key={genre.id}>{genre.name}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <div>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Genres
      </Dropdown.Button>
    </div>
  );
};

export default Genrs;
