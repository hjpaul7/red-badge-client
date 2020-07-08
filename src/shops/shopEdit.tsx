import React from "react";
// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   Button,
// } from "reactstrap";

type acceptedProps = {
  token: any;
  updateUsername: any;
  fetchShops: any;
  shopToUpdate: any;
  updateOff: any;
};

type valueTypes = {
  nameOfShop: string;
  address: string;
  closestTrail: string;
  hours: string;
};

export default class shopEdit extends React.Component< acceptedProps, valueTypes > {
  constructor(props: acceptedProps) {
    super(props);
    this.state = {
      nameOfShop: "",
      address: "",
      closestTrail: "",
      hours: "",
    };
  }

  shopUpdate = (event: any) => {
    event.preventDefault();
    fetch(`http://localhost:4000/${this.props.shopToUpdate.id}`, {
      method: "PUT",
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
    }).then((res) => {
      this.props.fetchShops();
      this.props.updateOff();
    });
  };

  render() {
    return (
        <h2>Shop Edit</h2>
    );
  }
}
