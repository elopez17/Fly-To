import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Request from "superagent";


class FlightShow extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
         
    }


    handleSubmit(e){
        e.preventDefault();
        const url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/us/anytime/anytime?apikey=prtl6749387986743898559646983194`;
        // const url = "http://localhost:5000/all/test";
        Request.get(url)
          .then(data => console.log(data))
          .then(console.log("Calling api."))
          .catch(err => console.log(err));

    }

    render() {

        return <button onClick={this.handleSubmit}>myButton</button>;
    }

}

export default FlightShow;