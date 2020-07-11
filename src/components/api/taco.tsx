import React from "react";

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
        <Modal
          title="Let's Taco, bruh"
          visible={this.state.visible}
          onOk={this.getTaco}
          okText="Taco me brother"
          cancelText="Nah I'm done"
          onCancel={this.handleCancel}
        >
          <Space direction="vertical">
            <h3>Shell</h3>
            <hr />
            <ul>
              <li>{this.state.shell}</li>
            </ul>

            <h3>Mixin</h3>
            <hr />
            <ul>
              <li>{this.state.mixin}</li>
            </ul>
            <h3>Seasoning</h3>
            <hr />
            <ul>
              <li>{this.state.seasoning}</li>
            </ul>
            <h3>Condiment</h3>
            <hr />
            <ul>
              <li>{this.state.condiment}</li>
            </ul>
            <h3>Base Layer</h3>
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
