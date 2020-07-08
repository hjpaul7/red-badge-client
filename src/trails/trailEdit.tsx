import React from "react";

import {
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

import { Button, Input } from "antd";
import { stringify } from "querystring";

type acceptedProps = {
  token: any;
  updateUsername: any;
  fetchTrails: any;
  trailsToUpdate: any;
  updateOff: any;
};

type valueTypes = {
  nameOfPark: string;
  address: string;
  length: string;
  trailOptions: string;
};

export default class TrailEdit extends React.Component<
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

  TrailUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/time/${this.props.trailsToUpdate.id}`, {
      method: "PUT",
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
    }).then((res) => {
      this.props.fetchTrails();
      this.props.updateOff();
    });
  };

  render() {
    return (
      <>
        <Modal
          isOpen={true}
          style={{
            backgroundColor: "lightgray",
            borderRadius: "20px",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingBottom: "10px",
            marginTop: "50px",
            marginRight: "20px",
            marginLeft: "10%",
            maxWidth: "75%",
          }}
        >
          <ModalHeader>Edit the Trail info</ModalHeader>
          <hr />
          <ModalBody>
            <Form onSubmit={this.TrailUpdate}>
              <FormGroup>
                <Label htmlFor="nameOfPark">Edit name of Park:</Label>
                <Input
                  name="nameOfPark"
                  style={{ maxWidth: "250px" }}
                  value={this.state.nameOfPark}
                  onChange={(e) =>
                    this.setState({ nameOfPark: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="trailLength">Edit Length:</Label>
                <Input
                  name="trailLength"
                  style={{ maxWidth: "250px" }}
                  value={this.state.length}
                  onChange={(e) => this.setState({ length: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="Options">Edit Trail Options:</Label>
                <Input
                  name="Options"
                  style={{ maxWidth: "250px" }}
                  value={this.state.trailOptions}
                  onChange={(e) =>
                    this.setState({ trailOptions: e.target.value })
                  }
                />
              </FormGroup>

              <Button htmlType="submit" type="primary">
                  Confirm
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
