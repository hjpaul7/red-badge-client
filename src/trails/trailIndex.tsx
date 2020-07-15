import React from "react";
import TrailTable from "./trailTable";
import TrailCreate from "./trailCreate";
import TrailEdit from "./trailEdit";

import { Container, Row, Col } from "reactstrap";
import APIURL from "../helpers/environment";

type acceptedProps = {
  token: any;
  updateUsername: any;
};

type valueTypes = {
  trails: [];
  updateActive: boolean;
  trailToUpdate: string;
};

export default class TrailIndex extends React.Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      trails: [],
      updateActive: false,
      trailToUpdate: "",
    };
  }

  welcomeMessage() {
    return localStorage.getItem("message") === null ? (
      <h2>Please Register or Login.</h2>
    ) : localStorage.getItem("message") === "You have succesfully logged in" ? (
      <h2>
        <b>Welcome back, </b>
        {localStorage.getItem("username")}
      </h2>
    ) : localStorage.getItem("message") === "user created" ? (
      <h2>
        <b>Welcome, </b>
        {localStorage.getItem("username")}
      </h2>
    ) : (
      "null"
    );
  }

  editUpdateTrail = (trail: string) => {
    this.setState({ trailToUpdate: trail });
    console.log(trail);
  };

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({
      updateActive: false,
    });
  };

  componentWillMount() {
    console.log("Trail Index Mounted");
  }

  getTrails = () => {
    fetch(`${APIURL}/trail/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.props.token,
      },
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        this.setState({ trails: logData.trails });
      });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgray",
          borderRadius: "10px",
          paddingTop: "50px",
          marginTop: "50px",
          marginRight: "20px",
          marginLeft: "10%",
          maxWidth: "75%",
        }}
      >
        {this.welcomeMessage()}
        <Container>
          <Row>
            <Col md="12">
              <TrailCreate
                token={this.props.token}
                updateUsername={this.props.updateUsername}
                getTrails={this.getTrails}
              />
            </Col>
            <Col md="12">
              <TrailTable
                Trail={this.state.trails}
                editUpdateTrail={this.editUpdateTrail}
                updateOn={this.updateOn}
                getTrails={this.getTrails}
                token={this.props.token}
                updateUsername={this.props.updateUsername}
              />
            </Col>
            {this.state.updateActive ? (
              <TrailEdit
                trailsToUpdate={this.state.trailToUpdate}
                updateOff={this.updateOff}
                token={this.props.token}
                updateUsername={this.props.updateUsername}
                fetchTrails={this.getTrails}
              />
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
