import React from "react";
import ShopCreate from "./shopCreate";
import ShopTable from "./shopTable";
import ShopEdit from "./shopEdit";
import { Container, Row, Col } from "reactstrap";

type acceptedProps ={
    token: any;
    updateUsername: any;
};

type valueTypes ={
    shops: [];
    updateActive: boolean;
    shopToUpdate: string;
   
};

export default class shopIndex extends React.Component < acceptedProps, valueTypes > {
    constructor(props: acceptedProps) {
        super(props);
        this.state = {
            shops: [],
            updateActive: false,
            shopToUpdate: "",
        };
    }
    editUpdateShop = (shops: string) => {
        this.setState({ shopToUpdate: shops });
    };
    updateOn = () => {
        this.setState({
            updateActive: true
        });
    };

    updateOff = () => {
        this.setState({
          updateActive: false,
        });
      };

      componentWillMount() {
          console.log("Shopindex Mounted")
      }

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
            console.log(logData);
            this.setState({
                shops: logData.shops 
            });
        });
    };
    render() {
        return (
            <div style={{
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
              <Container>
                <Row>
                  <Col md="12">
                    <ShopCreate
                      // fetchTimes={this.fetchTimes}
                      token={this.props.token}
                      updateUsername={this.props.updateUsername}
                      getShops={this.getShops}
                    />
                  </Col>
                  <Col md="12">
                    <ShopTable
                      shops={this.state.shops}
                      editUpdateShop={this.editUpdateShop}
                      updateOn={this.updateOn}
                      getShops={this.getShops}
                      token={this.props.token}
                      updateUsername={this.props.updateUsername}
                    />
                  </Col>
                  {this.state.updateActive ? (
                    <ShopEdit
                      shopToUpdate={this.state.shopToUpdate}
                      updateOff={this.updateOff}
                      token={this.props.token}
                      updateUsername={this.props.updateUsername}
                      fetchShops={this.getShops}
                    />
                  ) : (
                    <></>
                  )}
                </Row>
              </Container>
            </div>
        );
    }
}