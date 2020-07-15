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

type acceptedProps = {
  token: any;
  updateUsername: any;
  fetchShops: any;
  shopToUpdate: any;
  updateOff: any;
};

type valueTypes = {

  hours: string;
};

export default class ShopEdit extends React.Component< acceptedProps, valueTypes > {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      hours: "",
    };
  }

  shopUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/shop/${this.props.shopToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({

        hours: this.state.hours,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then((res) => {
      this.props.fetchShops();
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
          <ModalHeader>Update Shop Hours</ModalHeader>
          <hr />
          <ModalBody>
            <Form onSubmit={this.shopUpdate}>
              <FormGroup>
                <Label htmlFor="hours">New Shop Hours</Label>
                <Input
                  name="hours"
                  style={{ maxWidth: "250px" }}
                  value={this.state.hours}
                  onChange={(e) =>
                    this.setState({ hours: e.target.value })
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
