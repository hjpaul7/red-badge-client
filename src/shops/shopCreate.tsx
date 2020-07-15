import React from "react";
import { Form, FormGroup, Label, Container, Row, Col } from "reactstrap";
import APIURL from "../helpers/environment";

import { Button, Input } from "antd";

type acceptedProps = {
  token: any;
  updateUsername: any;
  getShops: any;
};

type valueTypes = {
  nameOfShop: string;
  address: string;
  closestTrail: string;
  hours: string;
};

export default class ShopCreate extends React.Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      nameOfShop: "",
      address: "",
      closestTrail: "",
      hours: "",
    };
  }
  componentWillMount() {
    console.log("Shop Create Mounted");
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`${APIURL}/shop/`, {
      method: "POST",
      body: JSON.stringify({
        nameOfShop: this.state.nameOfShop,
        address: this.state.address,
        closestTrail: this.state.closestTrail,
        hours: this.state.hours,
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
          nameOfShop: "",
          address: "",
          closestTrail: "",
          hours: "",
        });
        this.props.getShops();
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
          Add Hours
        </h2>
        <Form onSubmit={this.handleSubmit} style={{ marginBottom: "40px" }}>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label htmlFor="hours" />
                <h5 style={{ letterSpacing: "1px" }}>Hours</h5>
                <Input
                  name="hours"
                  style={{ maxWidth: "250px" }}
                  value={this.state.hours}
                  required
                  onChange={(e) => this.setState({ hours: e.target.value })}
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
