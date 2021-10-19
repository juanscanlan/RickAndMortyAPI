import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/UI/Navbar/Navbar";
import RickandMorty from "./Pages/index/RickAndMorty";
import CharacterDetails from "./Pages/character/CharacterDetails";
import Search from "./Pages/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={RickandMorty} exact />
        <Route path="/:characterId" exact>
          <CharacterDetails />
        </Route>
        <Route path="/search/:searchId" exact>
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
