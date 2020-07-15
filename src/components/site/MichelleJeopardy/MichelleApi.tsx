
import React from 'react';
import { Modal, Button, Card } from 'antd';
import './Jeopardy.css';


type acceptedProps = {
  token: any;
  updateUsername: any;
};

type valueTypes = {
  answer: string,
  question: string,
  value: any,
  title: string,
  visible: boolean 
}

export default class Jeopardy extends React.Component< acceptedProps, valueTypes> {
  constructor(props: acceptedProps) {
      super(props);
      this.state = {
        answer: "",
        question: "",
        value: "",
        title: "",
        visible: false
      }
  }

componentWillMount () {
      console.log ("Trebeck is the man")
    }
  
    componentDidMount () {
      console.log('component mount for 100');
      fetch ('http://jservice.io/api/random')
      .then (res => res.json())
      .then(json => {
       console.log(json)
       this.setState ({
        answer: json[0].answer,
        question: json[0].question,
        value: json[0].value,
        title: json[0].category.title,
       })
      })
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

  render() {
    return (
      <div className="site-card-border-less-wrapper">
      <Card title="THIS is JEOPARDY!" 
            style={{ 
                  width: 400, 
                  backgroundColor: 'ivory',
                  border: '1px solid black',
                  borderRadius: '10px' }}>
              <p>Alex, can I have '{this.state.title}' for {this.state.value}?</p>
              
              <p style={{
                backgroundColor: '#F0EEEE',
                borderRadius: '10px'
              }}> "{this.state.question}"</p>
        <Button type="primary" onClick={this.showModal}>
          What is
        </Button>
        </Card>
        <Modal 
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <p>{this.state.answer}</p>
          
        </Modal>
      </div>
    );
  }
}





















