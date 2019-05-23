import React from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBolt,
  faBell,
  faEnvelope,
  faMapMarkerAlt,
  faLink,
  faCalendarAlt,
  faBirthdayCake,
  faTimes,
  faMailBulk,
  faChevronDown,
  faGlobeAmericas,
  faComment,
  faRetweet,
  faHeart,
  faChartBar,
  faSearch,
  faImage,
  faFilm
} from "@fortawesome/free-solid-svg-icons";
// Related Components
import Page from "./Page";
import Welcome from "./Welcome";

function App() {
  library.add(
    fab,
    faHome,
    faBolt,
    faBell,
    faEnvelope,
    faMapMarkerAlt,
    faLink,
    faCalendarAlt,
    faBirthdayCake,
    faTimes,
    faMailBulk,
    faChevronDown,
    faGlobeAmericas,
    faComment,
    faRetweet,
    faHeart,
    faChartBar,
    faSearch,
    faImage,
    faFilm
  );

  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={props => <Welcome {...props} />} />
        <Route
          path="/:username"
          component={props => <Page type="profile" {...props} />}
        />
      </div>
    </Router>
  );
}

export default App;
