import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Servicii from "./pages/Servicii";
import Despre from "./pages/Despre_noi";
import ContactPage from "../src/pages/ContactPage";
import { Switch, Route } from "react-router-dom";
import Solutii from "./pages/Solutii";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/servicii" component={Servicii}></Route>
        <Route exact path="/solutii" component={Solutii}></Route>
        <Route path="/despre_noi" component={Despre}></Route>
        <Route path="/contact" component={ContactPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
