import { Route, Switch } from "react-router-dom";
import Servicii from "../pages/Servicii.js";
import Home from "../pages/Home.js";
import Solutii from "../pages/Solutii.js";
import Despre from "../pages/Despre_noi.js";
import ContactPage from "../pages/ContactPage.js";
function NavigationLinks() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/servicii" component={Servicii}></Route>
      <Route exact path="/solutii" component={Solutii}></Route>
      <Route exact path="/despre_noi" component={Despre}></Route>
      <Route exact path="/contact" component={ContactPage}></Route>
    </Switch>
  );
}

export default NavigationLinks;
