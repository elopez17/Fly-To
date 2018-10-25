import React from "react";
// import { Link } from "react-router-dom";
import Axios from "axios";

class FlightShow extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            origin: "",
            amount: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
         
    }

    handleChange(e){
        //handles change for fields in the form.
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        // need to refactor to call thunk actions

        let origin = this.state.origin;
        // const url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/us/anytime/anytime?apikey=prtl6749387986743898559646983194`;
        // const url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/${origin}/us/anytime/anytime?apikey=prtl6749387986743898559646983194`;
        // debugger
        // Request.get(url)
        //   .then(data => console.log(data))
        //   .then(console.log("Calling api."))
        //   .catch(err => console.log(err));
        this.props.fetchAllData(this.state);
    }

    render() {

        return (
            <form className="input-form" onSubmit={this.handleSubmit}>
                From: <br />
                <input name="origin" onChange={this.handleChange} type="text" />
                <br />
                <br />
                Budget: <br />
                <input name="amount" onChange={this.handleChange} type="text" />
                <br />
                <br />
                <button>Budget me!</button>
            </form> 

        )
    }
}

export default FlightShow;