import React from "react";
// import Table from "@material-ui/core/Table";
// // import { Button } from "@material-ui/core";

// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// import { FormGroup, Label, Form } from "reactstrap";
// import { Input, Space, Button } from "antd";

// type acceptedProps = {
//   token: any;
//   updateUsername: any;
// };

// type valueTypes = {
//   users: [];
//   username: string;
//   password: string;
//   usersToUpdate: {} | [];
//   updateActive: boolean;
//   visible: boolean | any;
// };

// export default class UserPanel extends React.Component<
//   acceptedProps,
//   valueTypes
// > {
//   constructor(props: acceptedProps) {
//     super(props);
//     this.state = {
//       users: [],
//       username: "",
//       password: "",
//       usersToUpdate: {},
//       updateActive: false,
//       visible: this.state,
//     };
//   }

//   showModal = () => {
//     this.setState({
//       visible: true,
//       updateActive: true,
//     });
//   };

//   componentWillMount() {
//     console.log("User Panel Users Mounted");
//   }

//   editUpdateUsers = (users: any) => {
//     this.setState({ usersToUpdate: users });
//     console.log(users);
//   };

//   updateOn = () => {
//     this.setState({ updateActive: true });
//   };

//   updateOff = () => {
//     this.setState({
//       updateActive: false,
//     });
//   };

//   getUser = (user: any) => {
//     fetch(`http://localhost:4000/user/${user.id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((logUsers) => {
//         console.log(logUsers);
//         this.setState({ users: logUsers.user });
//       });
//   };

//   componentDidMount() {
//     this.getUser(this.state.users.find(user => user.username = this.state.username));
//   }

//   render() {
//     return (
//       <div>
//         <h1>Test</h1>
//       </div>
//     );
//     // return (
//     //   <div
//     //     style={{
//     //       backgroundColor: "lightgray",
//     //       // opacity: "0.8",
//     //       borderRadius: "10px",
//     //       paddingTop: "50px",
//     //       marginTop: "50px",
//     //       marginRight: "20px",
//     //       marginLeft: "10%",
//     //       maxWidth: "75%",
//     //     }}
//     //   >
//     //     <TableContainer
//     //       component={Paper}
//     //       style={{
//     //         borderRadius: "10px",
//     //         overflow: "scroll",
//     //         overflowX: "hidden",
//     //         maxHeight: "600px",
//     //         marginBottom: "40px",
//     //         marginLeft: "50%",
//     //         paddingTop: "10px",
//     //         display: "flex",
//     //         justifyContent: "center",
//     //         alignItems: "center",
//     //         maxWidth: "850px",
//     //       }}
//     //     >
//     //       <Table aria-label="simple table">
//     //         <TableHead>
//     //           <TableRow>
//     //             <TableCell component="th" scope="row">
//     //               <b>Username</b>
//     //             </TableCell>
//     //             <TableCell align="right">
//     //               <b>Password</b>
//     //             </TableCell>
//     //             <TableCell align="right">
//     //               <b>Update or Delete</b>
//     //             </TableCell>
//     //           </TableRow>
//     //         </TableHead>
//     //         {/* <TableBody>
//     //           {this.state.users.map((users: any, main) => (
//     //             <TableRow key={main}>
//     //               <TableCell component="th" scope="row">
//     //                 {users.user.id.username}
//     //               </TableCell>
//     //               <TableCell align="right">{users.user.id.password}</TableCell>
//     //               <TableCell align="right">
//     //                 <Button
//     //                   type="link"
//     //                   onClick={() => {
//     //                     this.editUpdateUsers(users);
//     //                     this.updateOn();
//     //                     // this.showModal();
//     //                   }}
//     //                 >
//     //                   Update
//     //                 </Button>
//     //               </TableCell>
//     //             </TableRow>
//     //           ))}
//     //         </TableBody> */}
//     //         {this.getUsers()}
//     //       </Table>
//     //     </TableContainer>
//     //     {/* {this.state.updateActive ? (
//     //       <UserEdit
//     //         token={this.props.token}
//     //         updateOff={this.updateOff}
//     //         getUsers={this.getUsers}
//     //         usersToUpdate={this.state.usersToUpdate}
//     //       />
//     //     ) : (
//     //       <></>
//     //     )} */}
//     //   </div>
//     // );
//   }
// }
