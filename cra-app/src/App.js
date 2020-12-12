import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router basename="/app">
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a className="App-link" href="./">
                Home
              </a>
              <Link to="/test">Test</Link>
            </header>
          </div>
        </Route>
        <Route path="/test" exact>
          <h1>TEST</h1>
          <Link to="/">App Home</Link>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
