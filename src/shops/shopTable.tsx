import React from "react";
import Table from "@material-ui/core/Table";
// import { Button } from "@material-ui/core";
import { Button } from "antd";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../times/TimeTable.css";

type acceptedProps = {
  token: any;
  updateUsername: any;
  getShops: any;
  shops: [];
  editUpdateShop: any;
  updateOn: any;
};

type valueTypes = {
  nameOfShop: string;
  address: string;
  closestTrail: string;
  hours: string;
  visible: boolean | any;
};

export default class TimeTable extends React.Component<
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
      visible: true,
    };
  }

  componentWillMount() {
    console.log("Shop Table Mounted");
  }

  deleteShop = (shops: any) => {
    fetch(`http://localhost:4000/shop/${shops.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.props.getShops());
  };

  componentDidMount() {
    this.props.getShops();
  }

  render() {
    return (
      <TableContainer
        component={Paper}
        style={{
          borderRadius: "10px",
          overflow: "scroll",
          display: "block",
          overflowX: "hidden",
          height: "600px",
          marginBottom: "20px",
        }}
      >
        <Table style={{ minWidth: "650px" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell component="th" scope="row">
                <b>Name of Bike Shop</b>
              </TableCell>
              <TableCell align="right">
                <b>Address</b>
              </TableCell>
              <TableCell align="right">
                <b>Closest Trail</b>
              </TableCell>
              <TableCell align="right">
                <b>Hours</b>
              </TableCell>
              <TableCell align="right">
                <b>Update or Delete</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.shops.map((shops: any, main) => (
              <TableRow key={main}>
                <TableCell component="th" scope="row">
                  {shops.nameOfShop}
                </TableCell>
                <TableCell align="right">{shops.address}</TableCell>
                <TableCell align="right">{shops.closestTrail}</TableCell>
                <TableCell align="right">{shops.hours}</TableCell>
                <TableCell align="right">
                  <Button
                    type="link"
                    onClick={() => {
                      this.props.editUpdateShop(shops);
                      this.props.updateOn();
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    style={{ marginLeft: "5px" }}
                    type="link"
                    danger
                    onClick={() => {
                      this.deleteShop(shops);
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
    );
  }
}
