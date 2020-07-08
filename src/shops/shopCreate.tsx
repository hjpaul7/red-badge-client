import React from "react";
import { Container } from "@material-ui/core";


type acceptedProps = {
    token: any;
    updateUsername: any;
    getShops: any;
};

type valueTypes = {
    nameOfShop: string;
    address: string;
    closestTrail: string;
    hours: string;
};

export default class shopCreate extends React.Component <acceptedProps, valueTypes > {
    constructor(props: acceptedProps) {
        super(props);
        this.state = {
            nameOfShop: "",
            address: "",
            closestTrail: "",
            hours: "",
        };
    }

    handleSubmit = (event: any) => {
        fetch(`http://localhost:4000/shop/`, {
            method: "POST",
            body: JSON.stringify({
                nameOfShop: this.state.nameOfShop,
                address: this.state.address,
                closestTrail: this.state.closestTrail,
                hours: this.state.hours,
            }),
            headers: new Headers ({
                "Content-Type": "application/json",
                Authorization: this.props.token,
            }),
        })
        .then((res) => res.json())
        .then((logData) => {
            this.setState({
                nameOfShop: this.state.nameOfShop,
                address: this.state.address,
                closestTrail: this.state.closestTrail,
                hours: this.state.hours,
            });
            this.props.getShops();
        });
    };

   

    render () {
        return (
            <Container>
                <h1>Closest Shop to you</h1>
                <hr/>
                {/* hours is the only thing we are allowing to be modified */}
            </Container>
        )
    }
}