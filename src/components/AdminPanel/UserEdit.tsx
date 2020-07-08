import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import * as bcrypt from "bcryptjs";
import { Input, Space, Button } from "antd";

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
  editUserRole: string | any;
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
      editUserRole: this.props.usersToUpdate.userRole,
    };
  }

  componentWillMount() {
    console.log("User Edit Mounted");
  }

  usersUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/user/${this.props.usersToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        user: {
          username: this.state.editUsername,
          password: bcrypt.hashSync(this.state.editPassword, salt),
          userRole: this.state.editUserRole,
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
      <Modal
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
        <ModalHeader>Edit User</ModalHeader>
        <hr />
        <ModalBody>
          <Form onSubmit={this.usersUpdate}>
            <FormGroup>
              <Label htmlFor="username">Edit Username:</Label>
              <Space direction="vertical">
                <Input
                  style={{ marginLeft: "7px", marginBottom: "5px" }}
                  name="name"
                  value={this.state.editUsername}
                  onChange={(e) =>
                    this.setState({ editUsername: e.target.value })
                  }
                />
              </Space>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Edit Password:</Label>
              <Space direction="vertical">
                <Input
                  style={{ marginLeft: "10px" }}
                  name="password"
                  value={this.state.editPassword}
                  onChange={(e) =>
                    this.setState({ editPassword: e.target.value })
                  }
                />
              </Space>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="userRole">Edit UserRole:</Label>
              <Space direction="vertical">
                <Input
                  style={{ marginLeft: "10px" }}
                  name="userRole"
                  value={this.state.editUserRole}
                  onChange={(e) =>
                    this.setState({ editUserRole: e.target.value })
                  }
                />
              </Space>
            </FormGroup>

            <Button htmlType="submit" type="primary">
              Confirm
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
