import React, { Component } from 'react';

// import DisplayFetch from './DisplayFetch';


type acceptedProps = {
  token: any;
  updateUsername: any;
};

type valueTypes = {
  answer: string,
  question: string,
 
  
}

export default class shopIndex extends React.Component < acceptedProps, valueTypes > {
  constructor(props: acceptedProps) {
    super (props)
    this.state = {
      answer: "",
      question: "",
    };
  }

  componentWillMount () {
    console.log ("TreBeck is the man")
  }

  componentDidMount () {
    console.log('component mount for 100');
    fetch ('http://jservice.io/api/random')
    .then (res => res.json())
    .then(json => {
     console.log(json)
     this.setState ({
       answer: "",
       question: ""
     })
    })
  }

  render () {
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
      }}>
        <h1>Jeopardy Questions</h1>
        <p>Hello {this.state.question}</p>
      </div>
    )
  }
}




















// http://jservice.io/api/random


// import ReactDOM from 'react-dom';
// import { Modal, Button } from 'antd';
// import mountNode from 'antd';
// class App extends React.Component {
//   state = { visible: false };

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = e => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <div>
//           {/* <p>question from API s</p> */}
//         <Button type="primary" onClick={this.showModal}>
//           Answer
//         </Button>
//         <Modal
//           title="answer"
//           visible={this.state.visible}
//           onOk={this.handleOk}
//           onCancel={this.handleCancel}
//         >
//           <p>And the answer is...</p>
//           {/* <p>asnwer from API</p> */}
//         </Modal>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, mountNode);