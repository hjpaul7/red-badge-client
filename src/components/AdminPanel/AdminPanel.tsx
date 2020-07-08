import React from "react";
import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import UserEdit from "./UserEdit";
import { FormGroup, Label, Form } from "reactstrap";
import { Input, Space, Button } from "antd";

// test for github2

type acceptedProps = {
  token: any;
  updateUserRole: any;
  updateUsername: any;
};

type valueTypes = {
  users: [];
  username: string;
  password: string;
  usersToUpdate: {} | [];
  updateActive: boolean;
  visible: boolean | any;
};

export default class AdminPanel extends React.Component<
  acceptedProps,
  valueTypes
> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      users: [],
      username: "",
      password: "",
      usersToUpdate: {},
      updateActive: false,
      visible: this.state,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
      updateActive: true,
    });
  };

  componentWillMount() {
    console.log("Admin Panel Users Mounted");
  }

  editUpdateUsers = (users: any) => {
    this.setState({ usersToUpdate: users });
    console.log(users);
  };

  updateOn = () => {
    this.setState({ updateActive: true });
  };

  updateOff = () => {
    this.setState({
      updateActive: false,
    });
  };

  getUsers = () => {
    fetch(`http://localhost:4000/user/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((logUsers) => {
        console.log(logUsers);
        this.setState({ users: logUsers.users });
        // this.getUsers();
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  adminRegister = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/user/adminregister`, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          username: "",
          password: "",
        });
        this.getUsers();
      });
  };

  deleteUser = (user: any) => {
    fetch(`http://localhost:4000/user/${user.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        // Authorization: this.props.token,
      }),
    }).then(() => this.getUsers());
  };

  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgray",
          // opacity: "0.8",
          borderRadius: "10px",
          paddingTop: "50px",
          marginTop: "50px",
          marginRight: "20px",
          marginLeft: "10%",
          maxWidth: "75%",
        }}
      >
        <div
          style={{
            textAlign: "left",
            float: "left",
            marginLeft: "20px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            <b>Admin Portal</b>
          </h2>
          <h3>
            Admins can register a new user below, form validation still exists
          </h3>
          <p>Requirements:</p>
          <ul>
            <li>
              Username must be at least 4 characters, 1 capital letter, and 1
              number.
            </li>
            <li>Password must be at least 4 characters.</li>
          </ul>

          <Form
            onSubmit={this.adminRegister}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FormGroup style={{ marginBottom: "10px" }}>
              <Space direction="vertical">
                <Label htmlFor="username">
                  <h4>Username</h4>
                  <br />
                </Label>
                <Input
                  placeholder="input username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  name="username"
                  type="text"
                  style={{ marginTop: "-30px" }}
                  value={this.state.username}
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
                  title="Must have at least one number, uppercase, and a lowercase letter. Min 4 chars."
                />
              </Space>
            </FormGroup>
            <FormGroup>
              <Space direction="vertical">
                <Label htmlFor="password">
                  <h4>Password</h4>
                  <br />
                </Label>
                <Input.Password
                  placeholder="input password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  name="password"
                  style={{ marginTop: "-30px" }}
                  value={this.state.password}
                  required
                  pattern="(?=.*[a-z]).{5,}"
                  title="Password must be at least 5 characters"
                />
              </Space>
            </FormGroup>

            <Button
              htmlType="submit"
              type="primary"
              style={{ marginTop: "10px", marginBottom: "40px" }}
            >
              Sign Up
            </Button>
          </Form>
        </div>
        <TableContainer
          component={Paper}
          style={{
            borderRadius: "10px",
            overflow: "scroll",
            overflowX: "hidden",
            maxHeight: "600px",
            marginBottom: "40px",
            marginLeft: "50%",
            paddingTop: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "850px",
          }}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="row">
                  <b>Username</b>
                </TableCell>
                <TableCell align="right">
                  <b>Password</b>
                </TableCell>
                <TableCell align="right">
                  <b>Update or Delete</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.users.map((users: any, main) => (
                <TableRow key={main}>
                  <TableCell component="th" scope="row">
                    {users.username}
                  </TableCell>
                  <TableCell align="right">{users.password}</TableCell>
                  <TableCell align="right">
                    <Button
                      type="link"
                      onClick={() => {
                        this.editUpdateUsers(users);
                        this.updateOn();
                        // this.showModal();
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      style={{ marginLeft: "5px" }}
                      type="link"
                      danger
                      onClick={() => {
                        this.deleteUser(users);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {this.state.updateActive ? (
          <UserEdit
            token={this.props.token}
            updateOff={this.updateOff}
            getUsers={this.getUsers}
            usersToUpdate={this.state.usersToUpdate}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
