import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Experiences from "./components/Experiences";
import About from "./components/About";
import PackageDetails from "./components/PackageDetails";
import Message from "./components/Message";
import Signin from "./components/Signin";
import SignUp from "./components/Signup";
import HomeStay from "./components/HomeStay";
import Guide from "./components/Guide";
import GuidePackage from "./components/GuidePackage";
import HomeStayPackage from "./components/HomeStayPackage";

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
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={SignUp} />
            <Route path="/hire/guide" component={Guide} />
            <Route path="/guide-package" component={GuidePackage} />
            <Route path="/home-package" component={HomeStayPackage} />
            <Route path="/hire/homestay" component={HomeStay} />
          </Switch>
        </Route>
        <Message />
      </Router>
    </div>
  );
}

export default App;
