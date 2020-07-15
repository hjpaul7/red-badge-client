import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./Sidebar.css";
// import UserPanel from "../UserPanel/UserPanel";
import Jeopardy from './MichelleJeopardy/MichelleApi';

import Taco from "../../components/api/taco";
import Bored from "../../components/apiJustin/bored";

type acceptedProps = {
  token: any;
  updateUsername: any;
  protectedViews: any;
  protectedViewsAdmin: any;
  protectedViewsTrails: any;
  protectedViewsShops: any;
  clearToken: any;
  
};

export default class Sidebar extends React.Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {};
  }

  adminPortal() {
    if (localStorage.getItem("userRole") === "Admin") {
      return (
        <li className="nav-item">
          <Link to="/AdminPanel" className="nav-link">
            <span className="link-text">Admin</span>
          </Link>
        </li>
      );
    }
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="logo">
              <span className="link-text logo-text">MB Trails</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <span className="link-text">Home</span>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/AdminPanel" className="nav-link">
                <span className="link-text">Admin</span>
              </Link>
            </li> */}
            {this.adminPortal()}
            <li className="nav-item">
              <Link to="/times" className="nav-link">
                <span className="link-text">Trail Times</span>
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/UserPanel" className="nav-link">
                <span className="link-text">User</span>
              </Link>
            </li> */}

            <li className="nav-item">
              <Link to="/Shops" className="nav-link">
                <span className="link-text">Bike Shops</span>
              </Link>
            </li>

            <li className="jeopardy-item">
              <Link to="/Jeopardy" className="jeopardyapi-link">
                <span className="link-text">Ask Trebek</span>
              </Link>

            <li className="nav-item">
              <Link to="/Taco" className="nav-link">
                <span className="link-text">Let's Taco</span>

              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Bored" className="nav-link">
                <span className="link-text">If You're Bored</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-route">
          <Switch>
            <Route exact path="/">
              {this.props.protectedViewsTrails()}
            </Route>
            <Route exact path="/times">
              {this.props.protectedViews()}
            </Route>
            <Route exact path="/AdminPanel">
              {this.props.protectedViewsAdmin()}
            </Route>

            {/* <Route exact path="/UserPanel">
              <UserPanel
                token={this.props.token}
                updateUsername={this.props.updateUsername}
              />
            </Route> */}

            <Route exact path="/Shops">
              {this.props.protectedViewsShops()}
              {/* <ShopIndex
                token={this.props.token}
                updateUsername={this.props.updateUsername}
              /> */}
            </Route>
            <Route exact path="/Taco">
              <Taco />
            </Route>

            <Route exact path="/Bored">
              <Bored />
            </Route>

            <Route exact path="/Jeopardy">
              <Jeopardy 
                token={this.props.token}
                updateUsername={this.props.updateUsername}
              />

            </Route>
          </Switch>
        </div>
        {/* </div> */}
      </>
    );
  }
}
