import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import history from "./history";
import Landing from "./layout/Landing";
import Navbar from "./sass/components/Navbar";

function App() {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
