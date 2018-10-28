import React from "react";
// import { Link } from "react-router-dom";
import Axios from "axios";

class FlightShow extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            origin: "",
            amount: null,
            country: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.getPlace = this.getPlace.bind(this);
        this.getGeo = this.getGeo.bind(this);
        this.getOrigin = this.getOrigin.bind(this);
        this.getResults = this.getResults.bind(this);
    }

    componentDidMount() {

    }

    handleChange(e) {
        //handles change for fields in the form.
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
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
        // this.props.fetchAllData(this.state);

        // this.setState({})

        this.props.getAllGeo().then(() =>
            this.props.getAllQuotes({destination: this.state.country}).then(() => {
                this.getOrigin(this.state.origin.toUpperCase());
                this.getResults(parseInt(this.state.amount))

            })
        );

        // this.getOrigin("SFO");
        // this.getResults(parseInt(this.state.amount))
    }

    getOrigin(airport) {
        let place = this.getPlace(airport);
        let geo = this.getGeo(place);
        this.props.setOrigin(Object.assign(place, { Location: geo }));
    }

    getGeo(place) {
        for (let i = 0; i < this.props.geo.Continents.length; i++) {
            for (let j = 0; j < this.props.geo.Continents[i].Countries.length; j++) {
                if (this.props.geo.Continents[i].Countries[j].Name === place.CountryName) {
                    for (let k = 0; k < this.props.geo.Continents[i].Countries[j].Cities.length; k++) {
                        if (this.props.geo.Continents[i].Countries[j].Cities[k].IataCode === place.IataCode) {
                            return this.props.geo.Continents[i].Countries[j].Cities[k].Location;
                        }
                    }
                }
            }
        }
        console.log('404: GEO NOT FOUND');
        return "";
    }

    getPlace(airport) {
        let place = null;
        for (let i = 0; i < this.props.places.length; i++) {
            if (this.props.places[i].IataCode === airport) {
                place = this.props.places[i];
                return place;
            }
        }
        console.log('404: PLACE NOT FOUND');
        return {};
    }

    getResults(budget) {
        console.log(budget);
        let results = {};
        for (let i = 0; i < this.props.quotes.length; i++) {
            if (this.props.quotes[i].OutboundLeg.OriginId === this.props.origin.PlaceId &&
                this.props.quotes[i].MinPrice <= budget) {

                results[this.props.quotes[i].QuoteId] = this.props.quotes[i];
                for (let j = 0; j < this.props.places.length; j++) {
                    if (this.props.places[j].PlaceId === this.props.quotes[i].OutboundLeg.DestinationId) {
                        let airport = this.props.places[j].IataCode;
                        let place = this.getPlace(airport);
                        let geo = this.getGeo(place);
                        results[this.props.quotes[i].QuoteId]['Location'] = geo;
                        results[this.props.quotes[i].QuoteId]['Airport'] = airport;
                        break;
                    } else if (j === this.props.places.length - 1) {
                        console.log('404: LOCATION/AIRPORT NOT FOUND FOR RESULT');
                        results[this.props.quotes[i].QuoteId]['Location'] = "";
                        results[this.props.quotes[i].QuoteId]['Airport'] = "";
                    }
                }

            }
        }
        this.props.setResults(results);
        return results;
    }


    render() {


        return <div className="sidebar-flight-show modal left fade">
            <div className="modal-dialog left">
              <form className="modal-content flight-search-input-form" onSubmit={this.handleSubmit}>
                <div className= "form-logo"> 
                        <img className="modal logo" src="https://preview.ibb.co/jOHzTA/Screen-Shot-2018-10-26-at-1-48-18-PM.png" alt="Screen-Shot-2018-10-26-at-1-48-18-PM" border="0" />
                </div>
                <div className="form-origin-title">
                    From:
                </div>
                <input className="origin" name="origin" onChange={this.handleChange} type="text" />
                <div className="form-budget-title"> 
                    Budget:
                </div>
                <input className="form-budget-input" name="amount" onChange={this.handleChange} type="text" />
                <div className="form-region-title">
                    Country:
                </div>
                <input className="form-region-input" name="country" onChange={this.handleChange} type="text" />

                <button className="form-button button-input">
                    GO
                </button>
              </form>
            </div>
          </div>;
    }
}

export default FlightShow;