import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import About from "./components/About";
import PackageDetails from "./components/PackageDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/about" component={About} />
            <Route path="/package" component={PackageDetails} />
          </Switch>
        </Route>
      </Router>
    </div>
  );
}

export default App;
