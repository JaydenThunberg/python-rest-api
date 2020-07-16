import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Manage from '../Manage/Manage';
import Dashboard from '../Dashboard/Dashboard'
class Nav extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <div className="nav-bar">
              <div>
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <Link to="/manageowners">Manage Owners</Link>
            </div>
          </>
          <div>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/manageowners" component={Manage} />
          </div>
        </Router>
      </div>
    );
  }
}
export default Nav;