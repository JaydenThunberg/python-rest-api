import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import {HashRouter as Router, Route} from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/dashboard" />
          {/* component={Dashboard} /> */}
          <Route path="/manageowners" />
          {/* component={ManageOwners} /> */}

          <>
            <div className="nav-bar">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/manageowners">Manage Owners</Link>
            </div>
          </>
        </Router>
      </div>
    );
  }
}
export default Nav;