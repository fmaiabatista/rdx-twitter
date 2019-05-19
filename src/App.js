import React from "react";
import "./styles/App.scss";
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
  faSearch
} from "@fortawesome/free-solid-svg-icons";
// Related Components
import Header from "./Header";
import Page from "./Page";

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
    faSearch
  );

  return (
    <div className="app">
      <Header />
      <Page type="profile" />
    </div>
  );
}

export default App;
