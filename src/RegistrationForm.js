import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom'; 
import 'typeface-roboto'; 
import ACTIONS from "./action"; 
import {connect} from "react-redux";  
const axios = require('axios');

const mapDispatchToProps = dispatch => ({
    registerUser: user => {
        var bodyFormData = new FormData()
        bodyFormData.set('firstname', user.firstname)
        bodyFormData.set('lastname', user.lastname)
        bodyFormData.set('username', user.username)
        bodyFormData.set('email', user.email)
        bodyFormData.set('num', user.num)
        bodyFormData.set('address', user.address)
        bodyFormData.set('bio', user.bio)
        bodyFormData.set('pic', user.pic)
        axios.post('http://localhost:8080/jrental/v1/users', bodyFormData)
        .then((res) => {
            user.ID = res.data.ID
            console.log(user.ID)
            dispatch(ACTIONS.registerUser(user))
        })
        .catch(err => console.log(err))
    } 
})


class RegistrationForm extends Component {
    constructor(){
        super()
        this.state = {
            firstname: "", 
            lastname: "",
            email: "",
            username: "",
            bio: "", 
            address: "", 
            num: "",
            pic: "", 
            redirectToBasePage: false
        }
        this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this)
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this)
        this.emailChangeHandler = this.emailChangeHandler.bind(this)
        this.usernameChangeHander = this.usernameChangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    firstNameChangeHandler = e => {
        this.setState({
            firstname: e.target.value, 
        })
    }

    lastNameChangeHandler = e => {
        this.setState({
            lastname: e.target.value, 
        })
    }

    emailChangeHandler = e => {
        this.setState({
            email: e.target.value,
        })
    }

    usernameChangeHandler = e => {
        this.setState({
            username: e.target.value,
        })
    }

    bioChangeHandler = e => {
        this.setState({
            bio: e.target.value,
        })
    }

    addressChangeHandler = e => {
        this.setState({
            address: e.target.value,
        })
    }

    numChangeHandler = e => {
        this.setState({
            num: e.target.value,
        })
    }

    picChangeHandler = e => {
        this.setState({
            pic: e.target.value, 
        })
    }

    submitHandler = e => {
        e.preventDefault()
        const {firstname, lastname, email, username, bio, address, num, pic} = this.state
        this.setState({
            firstname: "",
            lastname: "",
            username: "",
            email: "",
            bio: "", 
            address: "",
            num: "", 
            pic: "",
            redirectToBasePage: true
        })
        var user = {
            firstname, 
            lastname, 
            email, 
            username,
            bio,
            address, 
            num, 
            pic
        }
        this.props.registerUser(user); 
    }

    render(){
        if (this.state.redirectToBasePage){
            return (
                <Redirect to="/homePage"/>
            )
        } else {
        return (
            <Container fixed>
                <form action="localhost:8080/jrental/v1/users" method="post" onSubmit={this.submitHandler}>  
                    <Typography variant="h2" gutterBottom>
                        Register
                    </Typography>
                    <TextField id="standard-first-name" name="firstname" label="First Name"
                        value={this.state.firstname} onChange={this.firstNameChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-last-name" name="lastname" label="Last Name"
                        value={this.state.lastname} onChange={this.lastNameChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-user-name"  name="username" label="User Name"
                        value={this.state.username} onChange={this.usernameChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-email" name="email" label="Email"
                        value={this.state.email} onChange={this.emailChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-bio" name="bio" label="bio"
                        value={this.state.bio} onChange={this.bioChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-address" name="address" label="address"
                        value={this.state.address} onChange={this.addressChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-address" name="num" label="phone number"
                        value={this.state.num} onChange={this.numChangeHandler}
                        margin="normal" />
                    <br></br>
                    <TextField id="standard-pic" name="pic" label="pic"
                        value={this.state.pic} onChange={this.picChangeHandler}
                        margin="normal" />
                    <br></br>
                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>
            </form>
            </Container>
        )
        }
    }

}

export default connect(null, mapDispatchToProps)(RegistrationForm)