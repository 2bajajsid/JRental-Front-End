import React, {Component} from 'react';
import ACTIONS from "./action"; 
import {connect} from "react-redux"; 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    card: {
      maxWidth: "35%",
      marginRight: "auto",
      marginLeft: "auto",
    },
    media: {
        paddingTop: "30.25%",
        width: "50%",
        marginRight: "auto",
        marginLeft: "auto",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function SimpleProduct(props){
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={props.pic}
                    title={props.title}
                 />
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.location}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.pricePerDay}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Rental Experience</Button>
            </CardActions>
        </Card>
    )
}

export default SimpleProduct; 