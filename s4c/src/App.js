import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import Footer from "../src/components/Footer/index";
import NoMatch from "./pages/NoMatch/index";
import Index from "./pages/Index/index";
import AboutUs from "./pages/AboutUs/index";
import Donate from "./pages/Donate/index";

function App() {
  return (
    <Router>
      <div>
        <Nav links={[{href: "/", text: "ABOUT S4C", id: "home-link"},{href: "/about", text: "ABOUT US", id: "abt-link"},{href: "/donate", text: "DONATE", id: "donate-link"}]} />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/donate" component={Donate} />
          {/* <Route exact path="/saved" component={Saved} /> */}
          <Route component={NoMatch} />
        </Switch>
        <Footer>
          <div class="prim-text" id="od-quote">Legacy is based on the impact you make and the moments you etch into memory
            <br/>-Odlin Sainvilus
          </div>
          <div id="social-links">
            <a href="/"><i class="fa fa-facebook"></i></a>
            <a href="/"><i class="fa fa-instagram"></i></a>
            <a href="/"><i class="fa fa-twitter"></i></a>
          </div>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
