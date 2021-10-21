import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/UI/Navbar/Navbar";
import Index from "./Pages/Index/Index";
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails";
import Search from "./Pages/Search/Search";
import Footer from "./components/UI/Footer/Footer";
import Error from "./Pages/Error/Error";

import fetchData from "./Helpers/fetchData";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Index fetchData={fetchData} />
        </Route>
        <Route path="/:characterId" exact>
          <CharacterDetails fetchData={fetchData} />
        </Route>
        <Route path="/search/:searchTerm" exact>
          <Search fetchData={fetchData} />
        </Route>
        <Route path="/error/:errorCode" exact>
          <Error />
        </Route>
        <Route path="*">
          <Redirect to="/error/404" />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
