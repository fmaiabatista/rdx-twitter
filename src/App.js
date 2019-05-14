import React from "react";
import "./App.scss";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBolt,
  faBell,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";

function App() {
  library.add(fab, faHome, faBolt, faBell, faEnvelope);

  return (
    <div className="App">
      <Header className="App-header" />
    </div>
  );
}

export default App;
