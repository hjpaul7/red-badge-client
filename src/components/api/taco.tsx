import React from "react";
import Table from "@material-ui/core/Table";

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, notification, Modal, Space } from "antd";

type valueTypes = {
  shell: string | any;
  mixin: string | any;
  seasoning: string | any;
  condiment: string | any;
  base_layer: string | any;
  visible: boolean | any;
};

export default class Taco extends React.Component<{}, valueTypes> {
  constructor(props: any) {
    super(props);
    this.state = {
      shell: "",
      mixin: "",
      seasoning: "",
      condiment: "",
      base_layer: "",
      visible: true,
    };
  }

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

  getTaco = () => {
    fetch(`http://taco-randomizer.herokuapp.com/random/`, {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          shell: json.shell.name,
          mixin: json.mixin.name,
          seasoning: json.seasoning.name,
          condiment: json.condiment.name,
          base_layer: json.base_layer.name,
        });
      });
  };

  componentDidMount() {
    this.getTaco();
  }

  render() {
    return (
      <div>
        <h1>Notice me Senpai, notice me.</h1>
        <img
          src="https://i0.wp.com/russianmachineneverbreaks.com/wp-content/uploads/2018/05/Screen-Shot-2015-08-25-at-10.52.29-PM.png?fit=1024%2C470&ssl=1"
          alt="notice me"
          style={{ borderRadius: "100%" }}
        />
        <Modal
          title="Let's Taco, bruh"
          visible={this.state.visible}
          onOk={this.getTaco}
          okText="Taco me brother"
          cancelText="Nah I'm done Senpai"
          onCancel={this.handleCancel}
        >
          <Space direction="vertical">
            <h4>Shell</h4>
            <hr />
            <ul>
              <li>{this.state.shell}</li>
            </ul>

            <h4>Mixin</h4>
            <hr />
            <ul>
              <li>{this.state.mixin}</li>
            </ul>
            <h4>Seasoning</h4>
            <hr />
            <ul>
              <li>{this.state.seasoning}</li>
            </ul>
            <h4>Condiment</h4>
            <hr />
            <ul>
              <li>{this.state.condiment}</li>
            </ul>
            <h4>Base Layer</h4>
            <hr />
            <ul>
              <li>{this.state.base_layer}</li>
            </ul>
          </Space>
        </Modal>
      </div>
    );
  }
}
