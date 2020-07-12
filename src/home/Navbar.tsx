import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

type acceptedProps = {
  clearToken: any;
};

export default class Navbar extends React.Component<acceptedProps, {}> {
  constructor(props: acceptedProps) {
    super(props);
  }
  logoutBtn() {
    return localStorage.getItem("token") === null ? (
      ""
    ) : (
      <Button
        onClick={this.props.clearToken}
        color="inherit"
        id="navLog"
        style={{ marginLeft: "90vw" }}
      >
        Logout
      </Button>
    );
  }

  // welcomeMessage() {
  //   return localStorage.getItem("message") === null ? (
  //     <p>Please Register or Login.</p>
  //   ) : localStorage.getItem("message") === "You have succesfully logged in" ? (
  //     <h6>
  //       <b>Welcome back,</b>
  //       {localStorage.getItem("username")}
  //     </h6>
  //   ) : localStorage.getItem("message") === "user created" ? (
  //     <h6>
  //       <b>Welcome,</b>
  //       {localStorage.getItem("username")}
  //     </h6>
  //   ) : (
  //     "null"
  //   );
  // }

  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "darkgray" }}>
        <Toolbar className="classes.color">
          <Typography
            variant="h6"
            id="navTitle"
            className="classes.title"
            style={{ marginLeft: "60px" }}
          >
            {/* {this.welcomeMessage()} */}
          </Typography>
          {this.logoutBtn()}
        </Toolbar>
      </AppBar>
    );
  }
}
