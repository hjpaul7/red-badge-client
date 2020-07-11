import React from "react";

// import {
//   Form,
//   FormGroup,
//   Label,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";

import { Input, Space, Button, Modal } from "antd";

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
  visible: boolean | any;
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
      visible: true,
    };
  }

  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  TrailUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/trail/${this.props.trailsToUpdate.id}`, {
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
          title="Edit Trail"
          visible={this.state.visible}
          onOk={this.TrailUpdate}
          onCancel={this.handleCancel}
        >
          <p>Edit Name of Park:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "7px", marginBottom: "5px" }}
              name="name of park"
              value={this.state.nameOfPark}
              onChange={(e) => this.setState({ nameOfPark: e.target.value })}
            />
          </Space>
          <p>Edit Address:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "10px" }}
              name="address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </Space>
          <p>Edit Length:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "10px" }}
              name="length"
              value={this.state.length}
              onChange={(e) => this.setState({ length: e.target.value })}
            />
          </Space>
          <p>Edit Trail Options:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "10px" }}
              name="trail options"
              value={this.state.trailOptions}
              onChange={(e) => this.setState({ trailOptions: e.target.value })}
            />
          </Space>
        </Modal>
        {/* <Modal
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
        </Modal> */}
      </>
    );
  }
}
