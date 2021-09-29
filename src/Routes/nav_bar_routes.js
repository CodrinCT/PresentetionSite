import { Route, Switch } from "react-router-dom";
import Servicii from "../pages/Servicii.js";
import Home from "../pages/Home.js";
import Solutii from "../pages/Solutii.js";
import Despre from "../pages/Despre_noi.js";
import Contact from "../pages/Contact.js";
import Team from "../components/meet_the_team/Meet_Team.js";
function NavigationLinks() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/servicii" component={Servicii} />

      <Route path="/solutii">
        <Solutii></Solutii>
      </Route>
      <Route path="/despre_noi">
        <Despre></Despre>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/team">
        <Team></Team>
      </Route>
    </Switch>
  );
}

export default NavigationLinks;
