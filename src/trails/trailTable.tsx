import React from "react";
import Table from "@material-ui/core/Table";

import { Button } from "antd";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./TrailTable.css";

type acceptedProps = {
    token: any;
    updateUsername: any;
    getTrails: any;
    Trail: [];
    editUpdateTrail: any;
    updateOn: any;
};

type valueTypes = {
    nameOfPark: string;
    address: string;
    length: string;
    trailOptions: string;
};

export default class TrailTable extends React.Component<
    acceptedProps,
    valueTypes
>{
    constructor(props: acceptedProps) {
        super(props);
        this.state = {
            nameOfPark: "",
            address: "",
            length: "",
            trailOptions: "",
        };
    }

    componentWillMount() {
        console.log("Trail Table Mounted");
    }

    deleteTrail = (trailOptions: any) => {
        fetch(`http://localhost:4000/trail/${trailOptions.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: this.props.token,
            }),
        }).then(() => this.props.getTrails());
    };

    componentDidMount() {
        this.props.getTrails();
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
                <Table style={{minWidth: "650px", float: "right" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                <b>Name of Park</b>
                            </TableCell>
                            <TableCell>
                                <b>Address</b>
                            </TableCell>
                            <TableCell>
                                <b>Length</b>
                            </TableCell>
                            <TableCell>
                                <b>Trail Options</b>
                            </TableCell>
                            <TableCell>
                                <b>Update or Delete</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.Trail.map((trails: any, main) => (
                            <TableRow key={main}>
                                <TableCell component="th" scope="row">
                                    {trails.nameOfPark}
                                </TableCell>
                                <TableCell>{trails.address}</TableCell>
                                <TableCell>{trails.length}</TableCell>
                                <TableCell>{trails.trailOptions}</TableCell>
                                <TableCell>
                                    <Button
                                    type="link"
                                    onClick={() => {
                                        this.props.editUpdateTrail(trails);
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
                                            this.deleteTrail(trails);
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