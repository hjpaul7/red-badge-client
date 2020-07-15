import React from "react";

import {Card, Modal, Button} from 'antd';
import "./bored.css";

type valueTypes = {
    activity: string | any;
    type: string | any;
    link: string | any;
    visible: boolean | any;
};

export default class Bored extends React.Component<{}, valueTypes> {
    constructor(props: any) {
        super(props);
        this.state = {
            activity: "",
            type: "",
            link: "",
            visible: true,
        };
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };

    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    getBored = () => {
        fetch(`http://www.boredapi.com/api/activity/`)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    activity: json.activity,
                    type: json.type,
                });
            });
    };

    componentDidMount() {
        this.getBored();
    }

    render() {
        return(
            <div className="mainDiv">
                <div className="card">
                <Card title="The answer to your boredom" style={{ width: 300, marginTop: 200, backgroundColor: 'transparent', border: "3px solid white", borderRadius: "100%" }}>
                    <Button type="primary" onClick={this.showModal}>
                        Find the answer
                    </Button>
                    <Modal 
                        title="The answer to your boredom"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                    <p>{this.state.activity}</p>
                    <p>{this.state.type}</p>
                    </Modal>
                </Card>
                </div>
            </div>
        )
    }
}