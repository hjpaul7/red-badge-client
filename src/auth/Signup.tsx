import React from "react";
import { FormGroup, Label, Form } from "reactstrap";
import { Button, Input } from "antd";

type acceptedProps = {
  token: any;
  updateUsername: string | any;
  updateUserRole: string | any;
};

type valueTypes = {
  username: string;
  password: string;
};

export default class Signup extends React.Component<acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/user/register`, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.token(data.sessionToken);
        console.log(data);
        this.props.updateUsername(data.user.username);
        this.props.updateUserRole(data.user.userRole);
        // this.props.updateMessage(data.message);
      });
  };

  render() {
    return (
      <div>
        <h3>Signup</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">
              <h4>Username</h4>
            </Label>
            <Input
              onChange={(e) => this.setState({ username: e.target.value })}
              style={{ maxWidth: "250px" }}
              name="username"
              type="text"
              value={this.state.username}
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}"
              title="Must have at least one number, uppercase, and a lowercase letter. Min 4 chars."
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">
              <h4>Password</h4>
            </Label>
            <Input
              onChange={(e) => this.setState({ password: e.target.value })}
              style={{ maxWidth: "250px" }}
              name="password"
              type="password"
              value={this.state.password}
              required
              pattern="(?=.*[a-z]).{5,}"
              title="Password must be at least 5 characters"
            />
          </FormGroup>

          <Button
            htmlType="submit"
            type="primary"
            style={{ marginTop: "10px" }}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}
