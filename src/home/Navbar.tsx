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

  render() {
    return (
      <AppBar position="static">
        <Toolbar className="classes.color">
          <Typography
            variant="h6"
            id="navTitle"
            className="classes.title"
          ></Typography>
          {this.logoutBtn()}
        </Toolbar>
      </AppBar>
    );
  }
}
