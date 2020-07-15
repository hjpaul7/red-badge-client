import React from "react";

import {Card} from 'antd';

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
            <div>
                <Card title="The answer to your boredom" style={{ width: 300, marginLeft: 200, marginTop: 200 }}>
                    <p>{this.state.activity}</p>
                    <p>{this.state.type}</p>
                </Card>
            </div>
        )
    }
}