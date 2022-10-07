import { Component } from "react";
import "./styles/App.css";
import Navigation from "./routes/Navigation";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <Navigation />;
      </div>
    );
  }
}

export default App;
