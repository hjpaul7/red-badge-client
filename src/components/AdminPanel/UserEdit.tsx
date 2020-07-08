import React from "react";
import { FormGroup, Label, Form } from "reactstrap";
import * as bcrypt from "bcryptjs";
import { Input, Space, Button, Modal } from "antd";

const salt = bcrypt.genSaltSync(10);

type acceptedProps = {
  token: any;
  updateOff: any;
  getUsers: any;
  usersToUpdate: any;
};

type valueTypes = {
  editUsername: string | any;
  editPassword: string | any;
  visible: boolean | any;
};

export default class UserEdit extends React.Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      editUsername: this.props.usersToUpdate.username,
      editPassword: this.props.usersToUpdate.password,
      visible: this.state,
    };
  }

  componentWillMount() {
    console.log("User Edit Mounted");
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

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

  usersUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/user/${this.props.usersToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        user: {
          username: this.state.editUsername,
          password: bcrypt.hashSync(this.state.editPassword, salt),
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }).then((res) => {
      this.props.getUsers();
      this.props.updateOff();
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Edit User"
          visible={this.state.visible}
          onOk={this.usersUpdate}
          onCancel={this.handleCancel}
        >
          <p>Edit Username:</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "7px", marginBottom: "5px" }}
              name="name"
              value={this.state.editUsername}
              onChange={(e) => this.setState({ editUsername: e.target.value })}
            />
          </Space>
          <p>Edit Password</p>
          <Space direction="vertical">
            <Input
              style={{ marginLeft: "10px" }}
              name="password"
              value={this.state.editPassword}
              onChange={(e) => this.setState({ editPassword: e.target.value })}
            />
          </Space>
        </Modal>
      </div>
    );
  }
}
