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
  fetchTimes: any;
  timeToUpdate: any;
  updateOff: any;
};

type valueTypes = {
  nameOfPark: string;
  route: string;
  length: string;
  time: string;
  visible: boolean | any;
};

export default class TimeEdit extends React.Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      nameOfPark: "",
      route: "",
      length: "",
      time: "",
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

  timeUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/time/${this.props.timeToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        nameOfPark: this.state.nameOfPark,
        route: this.state.route,
        length: this.state.length,
        time: this.state.time,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then((res) => {
      this.props.fetchTimes();
      this.props.updateOff();
    });
  };

  render() {
    return (
      <>
        <Modal
          title="Edit Trail Time"
          visible={this.state.visible}
          onOk={this.timeUpdate}
          onCancel={this.handleCancel}
        >
          <p>Edit Time:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "7px", marginBottom: "5px" }}
              name="name of park"
              value={this.state.nameOfPark}
              onChange={(e) => this.setState({ nameOfPark: e.target.value })}
            />
          </Space>
          <p>Edit Route:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "10px" }}
              name="route"
              value={this.state.route}
              onChange={(e) => this.setState({ route: e.target.value })}
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
          <p>Edit Time:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "10px" }}
              name="time"
              value={this.state.time}
              onChange={(e) => this.setState({ time: e.target.value })}
            />
          </Space>
        </Modal>
        {/* <Modal
          isOpen={true}
          style={{
            backgroundColor: "lightgray",
            // opacity: "0.8",
            borderRadius: "10px",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingBottom: "10px",
            marginTop: "50px",
            marginRight: "20px",
            marginLeft: "10%",
            maxWidth: "75%",
          }}
        >
          <ModalHeader>Edit your Trail Time</ModalHeader>
          <hr />
          <ModalBody>
            <Form onSubmit={this.timeUpdate}>
              <FormGroup>
                <Label htmlFor="name">Edit Name of Park:</Label>
                <Input
                  name="name"
                  style={{ maxWidth: "250px" }}
                  value={this.state.nameOfPark}
                  onChange={(e) =>
                    this.setState({ nameOfPark: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="day">Edit Route:</Label>
                <Input
                  name="day"
                  style={{ maxWidth: "250px" }}
                  value={this.state.route}
                  onChange={(e) => this.setState({ route: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="location">Edit Length:</Label>
                <Input
                  name="location"
                  style={{ maxWidth: "250px" }}
                  value={this.state.length}
                  onChange={(e) => this.setState({ length: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="time">Edit Time:</Label>
                <Input
                  name="time"
                  style={{ maxWidth: "250px" }}
                  value={this.state.time}
                  onChange={(e) => this.setState({ time: e.target.value })}
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
