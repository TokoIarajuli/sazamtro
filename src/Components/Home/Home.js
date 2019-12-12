import * as React from "react";
import Map from "../Map/Map";
import Navbar from "../Navbar/Navbar";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Map />
        <Navbar />
      </div>
    );
  }
}

export default Home;
