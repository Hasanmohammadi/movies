import { Route } from "react-router-dom";
import Card from "./Components/FirstPage/Cards/card";
import FirstPage from "./Components/FirstPage/firstPage";
import ContextMovies from "./Context/contextMovies";

function App() {
  return (
    <ContextMovies>
      <Route path="/" component={FirstPage} exact/>
      <Route path="/:id" component={Card} exact/>
    </ContextMovies>
  );
}

export default App;
