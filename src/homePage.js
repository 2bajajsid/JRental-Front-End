import React, {Component} from 'react';
import ACTIONS from "./action"; 
import {connect} from "react-redux"; 
import Product from "./simpleProduct.js"; 
import Profile from "./userProfile.js"; 

function mapStateToProps(state){
    return {u: state.u, 
            productIDList: state.productIDList}
}

class homePage extends Component {
    render(){
        if (this.props.u) {
            const profile = <Profile 
                                pic={this.props.u.pic}
                                firstname={this.props.u.firstname}
                                lastname={this.props.u.lastname}
                                address={this.props.u.address}
                                num={this.props.u.num}
                                bio={this.props.u.bio}
                                username={this.props.u.username}
                            />
            const products = this.props.productIDList.reduce((total, p) => {
                console.log("Product: ")
                console.log(p)
                total.push(<Product 
                                title={p.title}
                                location={p.location}
                                pic={p.pic}
                                pricePerDay={p.pricePerDay}
                            />)
                return total
            }, [])
            return(
            <div>
                <h1> {profile} </h1>
                {this.props.productIDList ? (products): null}
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