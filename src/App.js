import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/UI/Navbar/Navbar";
import RickandMorty from "./Pages/index/RickAndMorty";
import CharacterDetails from "./Pages/characterDetails/CharacterDetails";
import Search from "./Pages/search/Search";
import Footer from "./components/UI/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={RickandMorty} exact />
        <Route path="/:characterId" exact>
          <CharacterDetails />
        </Route>
        <Route path="/search/:searchTerm" exact>
          <Search />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
