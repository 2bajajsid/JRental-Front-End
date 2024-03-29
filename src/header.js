import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Route, Link} from "react-router-dom"; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux"; 

function mapStateToProps(state){
    return {u: state.u }
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function ButtonAppBar(props) { 
      const classes = useStyles();
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Welcome
              </Typography>
              <Button color="inherit">
                <Link to='/register'>Sign Up</Link>
              </Button>
              {props.u ? (<Button color="inherit">
                <Link to='/addProduct'>Add a Rental</Link>
              </Button>) : null}
            </Toolbar>
          </AppBar>
        </div>
      );
  }

  export default connect(mapStateToProps)(ButtonAppBar)