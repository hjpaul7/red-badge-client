import React from "react";
import { Form, FormGroup, Label, Container, Row, Col } from "reactstrap";

import { Button, Input } from "antd";
import APIURL from "../helpers/environment";

type acceptedProps = {
  token: any;
  updateUsername: any;
  getTrails: any;
};

type valueTypes = {
  nameOfPark: string;
  address: string;
  length: string;
  trailOptions: string;
};

export default class TrailCreate extends React.Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      nameOfPark: "",
      address: "",
      length: "",
      trailOptions: "",
    };
  }

  componentWillMount() {
    console.log("Trail Create Mounted");
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${APIURL}/trail/`, {
      method: "POST",
      body: JSON.stringify({
        nameOfPark: this.state.nameOfPark,
        address: this.state.address,
        length: this.state.length,
        trailOptions: this.state.trailOptions,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        this.setState({
          nameOfPark: "",
          address: "",
          length: "",
          trailOptions: "",
        });
        this.props.getTrails();
      });
  };

  render() {
    return (
      <Container>
        <h2
          style={{
            textAlign: "center",
            letterSpacing: "1px",
            marginTop: "5px",
          }}
        >
          Add Trails
        </h2>
        <Form onSubmit={this.handleSubmit} style={{ marginBottom: "40px" }}>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="name of park" />
                <h5 style={{ letterSpacing: "1px" }}>Name of Park</h5>
                <Input
                  name="nameOfPark"
                  style={{ maxWidth: "250px" }}
                  value={this.state.nameOfPark}
                  required
                  onChange={(e) =>
                    this.setState({ nameOfPark: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="address" />
                <h5 style={{ letterSpacing: "1px" }}>Address</h5>
                <Input
                  name="address"
                  style={{ maxWidth: "250px" }}
                  value={this.state.address}
                  required
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="length" />
                <h5 style={{ letterSpacing: "1px" }}>Length</h5>
                <Input
                  name="length"
                  style={{ maxWidth: "250px" }}
                  value={this.state.length}
                  required
                  onChange={(e) => this.setState({ length: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="trailOptions" />
                <h5 style={{ letterSpacing: "1px" }}>Trail Options</h5>
                <Input
                  name="trailOptions"
                  style={{ maxWidth: "250px" }}
                  value={this.state.trailOptions}
                  required
                  onChange={(e) =>
                    this.setState({ trailOptions: e.target.value })
                  }
                />
              </FormGroup>
            </Col>
          </Row>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
