import React, { Component } from "react";
import "./App.css";
import { Col } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";


// import components

import SignUp from "./components/signup";
import Showcase from './components/showcase'; // Page that features product
import Explore from './components/explore';
import Form from './components/profileForm/form';
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import EmployeeDirectory from "./components/employeeDirectory";
import ProfilePage from "./components/profilePage";
import {HashRouter} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact={true} path="/" component={Showcase} />
          <Route path="/explore" component={Explore} />
          <Route path="/my_profile" />

          <Route path="/david" component={SignUp}/>
          <Route path="/form" component={Form}/>



        </div>
      </HashRouter>
    );
  }
}

export default App;
