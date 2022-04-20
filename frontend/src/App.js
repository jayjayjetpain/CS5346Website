/*!

=========================================================
* Paper Kit PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
// import "assets/demo/demo.css";
// import "assets/demo/react-demo.css";
// pages
import LandingPage from "pages/LandingPage.js";
import AboutUsPage from "pages/AboutUsPage.js";
// import ProductPage from "pages/ProductPage.js";
import ProfilePage from "pages/ProfilePage.js";
import SearchPage from "pages/SearchPage.js";

// import NucleoIcons from "views/NucleoIcons.js";
// import Sections from "views/Sections.js";
// import Presentation from "views/Presentation.js";
// import AddProduct from "views/examples/AddProduct.js";
// import BlogPost from "views/examples/BlogPost.js";
// import BlogPosts from "views/examples/BlogPosts.js";
// import ContactUs from "views/examples/ContactUs.js";
// import Discover from "views/examples/Discover.js";
// import Ecommerce from "views/examples/Ecommerce.js";
// import Error404 from "views/examples/Error404.js";
// import Error422 from "views/examples/Error422.js";
// import Error500 from "views/examples/Error500.js";
// import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "pages/LoginPage.js";
// import RegisterPage from "views/examples/RegisterPage.js";
// import Settings from "views/examples/Settings.js";
// import TwitterRedesign from "views/examples/TwitterRedesign.js";
// others

export default function App() {

    return (
        <Switch>
            <Route path="/index" render={(props) => <LandingPage {...props} />} />
            {/* <Route
                path="/nucleo-icons"
                render={(props) => <NucleoIcons {...props} />}
            />
            <Route path="/sections" render={(props) => <Sections {...props} />} />
            <Route
                path="/presentation"
                render={(props) => <Presentation {...props} />}
            /> */}
            <Route path="/about-us" render={(props) => <AboutUsPage {...props} />} />
            {/* <Route
                path="/add-product"
                render={(props) => <AddProduct {...props} />}
            />
            <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
            <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
            <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
            <Route path="/discover" render={(props) => <Discover {...props} />} />
            <Route path="/e-commerce" render={(props) => <Ecommerce {...props} />} />
            <Route path="/error-404" render={(props) => <Error404 {...props} />} />
            <Route path="/error-422" render={(props) => <Error422 {...props} />} />
            <Route path="/error-500" render={(props) => <Error500 {...props} />} /> */}
            {/* <Route
                path="/landing-page"
                render={(props) => <LandingPage {...props} />}
            /> */}
            <Route path="/login" render={(props) => <LoginPage {...props} />} />
            {/* <Route
                path="/product-page"
                render={(props) => <ProductPage {...props} />}
            /> */}
            <Route
                path="/apartment/:id"
                render={(props) => <ProfilePage {...props} />}
            />
            {/* <Route
                path="/register-page"
                render={(props) => <RegisterPage {...props} />}
            /> */}
            <Route
                path="/search"
                render={(props) => <SearchPage {...props} />}
            />
            {/* <Route path="/settings" render={(props) => <Settings {...props} />} />
            <Route
                path="/twitter-redesign"
                render={(props) => <TwitterRedesign {...props} />}
            /> */}
            <Redirect to="/index" />
        </Switch>
    );
  }

// ReactDOM.render(
//   <BrowserRouter>
//     <Switch>
        
      
//     </Switch>
//   </BrowserRouter>,
//   document.getElementById("root")
// );