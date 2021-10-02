import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import history from "./history";
import Landing from "./layout/Landing";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
