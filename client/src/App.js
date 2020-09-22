import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Auth from "./Components/Pages/Admin/Auth";
import Home from "./Components/Pages/Home/Home";
import AdminState from "./context/Admin/AdminState";
import EnquiryState from "./context/Enquiry/EnquiryState";
import AdminPage from "./Components/Pages/Admin/AdminPage/AdminPage";
import About from "./Components/Pages/About/About";
import Footer from "./Components/Layout/Footer/Footer";

class App extends Component {
  render() {
    return (
      <AdminState>
        <EnquiryState>
          <Router>
            <div>
              <Navbar />
              <div style={{ marginTop: "80px" }}>
                <Fragment>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/admin' component={Auth} />
                    <Route exact path='/admin/page' component={AdminPage} />
                    <Route exact path='/about' component={About} />
                  </Switch>
                </Fragment>
              </div>
              <Footer />
            </div>
          </Router>
        </EnquiryState>
      </AdminState>
    );
  }
}

export default App;
