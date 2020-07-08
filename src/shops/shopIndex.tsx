import React from "react";
import ShopCreate from "./shopCreate";
import ShopTable from "./shopTable";
import ShopEdit from "./shopEdit";
import { Container, Card } from "@material-ui/core";

type acceptedProps ={
    token: any;
    updateUsername: any;
};

type valueTypes ={
    shop: [];
    updateActive: boolean;
    shopToUpdate: string;
};

export default class shopIndex extends React.Component < acceptedProps, valueTypes > {
    constructor(props: acceptedProps) {
        super(props);
        this.state = {
            shop: [],
            updateActive: false,
            shopToUpdate: "",
        };
    }
    editUpdateShop = (shop: string) => {
        this.setState({ shopToUpdate: shop });
    };
    updateOn = () => {
        this.setState({
            updateActive: true
        });
    };
    getShops = () => {
        fetch(`http://localhost:4000/shop/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: this.props.token,
            },
        })
        .then((res)=>res.json())
        .then((logData)=> {
            this.setState({
                shop: logData.shop 
            });
        });
    };
    render() {
        return (
            <div>
                <Card style={{
                    width: "70%",
                    marginLeft: "18%",
                    marginTop: "5%",
                    backgroundColor: "lightgrey",
                    paddingBottom: "5%",
                    paddingTop:"1%",
                }}>
                <h1>Closest Bike Shops</h1>
                <Container style={{
                    width: "85%",
                }} >
                {/* <ShopCreate 
                 token={this.props.token}
                 updateUsername={this.props.updateUsername}
                 getShops={this.getShops}
                 /> */}
                 <ShopTable 
                 token={this.props.token}
                 updateUsername={this.props.updateUsername}
                 shop={this.state.shop}
                 editUpdateShop={this.editUpdateShop}
                 updateOn={this.updateOn}
                 getShops={this.getShops}
                 />
                 {/* <ShopEdit 
                 token={this.props.token}updateUsername={this.props.updateUsername}
                 fetchShops={this.getShops}shopToUpdate={this.state.shopToUpdate}
                 updateOff={this.updateOn}
                 /> */}
                
            </Container>
            </Card>
            </div>
        );
    }
}