import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Card from "./Components/FirstPage/Cards/card";
import FirstPage from "./Components/FirstPage/firstPage";
import ContextMovies from "./Context/contextMovies";
import { getDataThunk } from "./Redux/reducer";

function App() {
  console.log("first page");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataThunk());
    console.log("redux done");
  }, []);

  return (
    <ContextMovies>
      <Route path="/" component={FirstPage} exact />
      <Route path="/:name/:id" component={Card} exact />
    </ContextMovies>
  );
}

export default App;
