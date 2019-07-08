import React, {Component} from 'react';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom'; 
import ACTIONS from "./action"; 
const axios = require('axios');

function mapStateToProps(state){
    return {username: state.username, 
            ID: state.ID }
}

const mapDispatchToProps = (dispatch, props) => ({
    rentProduct: (p) => {
        var bodyFormData = new FormData()
        bodyFormData.set('title', p.title)
        bodyFormData.set('location', p.location)
        bodyFormData.set('priceperday', p.pricePerDay)
        bodyFormData.set('pic', p.pic)
        bodyFormData.set('id', props.ID)

        axios.post(`http://localhost:8080/jrental/v1/user/${props.ID}/products`, bodyFormData)
        .then((res) => {
            console.log(res)
            p.ID = res.data.ID
            dispatch(ACTIONS.createProduct(p))
        })
        .catch(err => console.log(err))
    }
})

class ProductForm extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            location: "",
            pricePerDay: "",
            pic: "", 
            redirectToBasePage: false
        }
        this.titleChangeHandler = this.titleChangeHandler.bind(this)
        this.locationChangeHandler = this.locationChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    titleChangeHandler = e => {
        this.setState({
            title: e.target.value,
        })
    }

    locationChangeHandler = e => {
        this.setState({
            location: e.target.value,
        })
    }

    pricePerDayChangeHandler = e => {
        this.setState({
            pricePerDay: e.target.value,
        })
    }

    picChangeHandler = e => {
        this.setState({
            pic: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault()
        const {title, location, priceperday, pic} = this.state; 
        var p = {
            title, 
            location, 
            priceperday, 
            pic
        }
        this.setState({
            title: "",
            location: "",
            pricePerDay: "",
            pic: "",
            redirectToBasePage: true
        })
        this.props.rentProduct(p)
    } 

    render(){
        if (this.state.redirectToBasePage){
            return (
                <Redirect to="/homePage"/>
            )
        } else {
            return(
                <Container fixed>
                <form onSubmit={this.submitHandler}>  
                    <Typography variant="h2" gutterBottom>
                        Add your Rental
                    </Typography>
                    <TextField id="standard-title" name="title" label="Title"
                        value={this.state.title} onChange={this.titleChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-location" name="location" label="Location"
                        value={this.state.location} onChange={this.locationChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-price-per-day"  name="price-per-day" label="Price per day"
                        value={this.state.pricePerDay} onChange={this.pricePerDayChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-pic" name="pic" label="Picture"
                        value={this.state.pic} onChange={this.picChangeHandler}
                        margin="normal" />
                    <br></br>
                    <Button type="submit" variant="contained" color="primary">
                        Rent
                    </Button>
            </form>
            </Container>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)