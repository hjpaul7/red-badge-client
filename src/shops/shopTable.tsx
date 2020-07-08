import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


type acceptedProps = {
    token: any;
    updateUsername: any;
    getShops: any;
    shop: [];
    editUpdateShop: any;
    updateOn: any;
    fetchShops: any;
    shopToUpdate: any;
    updateOff: any;
};

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});


function createData(
    closestTrail: string,
) {
  return {
    closestTrail,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.closestTrail}
          </TableCell>
          {/* <TableCell align="right">{row.nameOfShop}</TableCell>
          <TableCell align="right">{row.address}</TableCell>
          <TableCell align="right">{row.hours}</TableCell> */}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Bill's Bike Shop 
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Address</TableCell>
                      <TableCell>Hours</TableCell>
                      <TableCell align="right">Update</TableCell>
                      <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>123 Alpha Street</TableCell>
                      <TableCell>M-F 8am - 10pm</TableCell>
                      <TableCell align="right">Update</TableCell>
                      <TableCell align="right">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

const rows = [
  createData('Harrison State Park'),
//   {trails.nameOfPark}
  createData('Park 1'),
  createData('Park 2'),
  createData('Park 3'),
  createData('Park 4'),
];

type valueTypes = {
    nameOfShop: string;
    address: string;
    closestTrail: string;
    hours: string;
  };

export default class shopTable extends React.Component <acceptedProps, valueTypes > {
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

    shopUpdate = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:4000/${this.props.shopToUpdate.id}`, {
          method: "PUT",
          body: JSON.stringify({
            nameOfShop: this.state.nameOfShop,
            address: this.state.address,
            closestTrail: this.state.closestTrail,
            hours: this.state.hours,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: this.props.token,
          }),
        }).then((res) => {
          this.props.fetchShops();
          this.props.updateOff();
        });
      };

    deleteShop = (shop: any) => {
        fetch(`http://localhost:4000/shop/${shop.id}`, {
            method: "DELETE",
            headers: new Headers ({
                "Content-Type": "application/json",
                Authorization: this.props.token,
            }),
        }).then(()=> this.props.getShops());
    };
    componentDidMount() {
        this.props.getShops();
    }
render () {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name Of Park</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.closestTrail} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}
