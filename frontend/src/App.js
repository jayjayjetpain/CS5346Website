import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";

// pages
import LandingPage from "pages/LandingPage.js";
import AboutUsPage from "pages/AboutUsPage.js";
import ProfilePage from "pages/ProfilePage.js";
import SearchPage from "pages/SearchPage.js";
import LoginPage from "pages/LoginPage.js";

export default function App() {

    return (
        <Switch>
            <Route path="/index" render={(props) => <LandingPage {...props} />} />
            <Route path="/about-us" render={(props) => <AboutUsPage {...props} />} />
            <Route path="/login" render={(props) => <LoginPage {...props} />} />
            <Route
                path="/apartment/:id"
                render={(props) => <ProfilePage {...props} />}
            />
            <Route
                path="/search"
                render={(props) => <SearchPage {...props} />}
            />
            <Redirect to="/index" />
        </Switch>
    );
  }

