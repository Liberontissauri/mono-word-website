import './App.css';
import Home from "./pages/Home/Home.js"
import Docs from "./pages/Docs/Docs.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact="true">
            <Home></Home>
          </Route>
          <Route path="/docs" exact="true">
            <Docs></Docs>
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
