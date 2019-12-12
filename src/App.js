import * as React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Map from "./Components/Map/Map";
import WhyNotLead from "./Components/WhyNotLead/WhyNotLead";
import About from "./Components/About/About";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Map} />
          <Route path="/consists" component={WhyNotLead} />
          <Route path="/about" component={About} />
          <Route path="/whynot" component={WhyNotLead} />
        </Switch>
      </div>
    );
  }
}

export default App;
