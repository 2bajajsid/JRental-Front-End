import React, {Component} from 'react';
import ACTIONS from "./action"; 
import {connect} from "react-redux"; 

function mapStateToProps(state){
    return {username: state.username, 
            productId: state.productId}
}

class homePage extends Component {
    render(){
        if (this.props.username) {
            const message = `Hey ${this.props.username}!`
            return(
            <div>
                <h1> {message} </h1>
                {this.props.productId ? (
                    <h1> {this.props.productId} </h1>
                ): null}
            </div>)
        } else {
            return (
                <div>
                    <h1> Hello Guest </h1>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, null)(homePage)