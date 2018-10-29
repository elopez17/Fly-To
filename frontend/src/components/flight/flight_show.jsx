import React from "react";
// import { Link } from "react-router-dom";
import Axios from "axios";
import ReactLoading from "react-loading";
import $ from "jquery";


class FlightShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            origin: "sfo",
            amount: null,
            country: "us"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.getPlace = this.getPlace.bind(this);
        this.getGeo = this.getGeo.bind(this);
        this.getOrigin = this.getOrigin.bind(this);
        this.getResults = this.getResults.bind(this);
    }

    componentDidMount() {
        this.setState({loading: false})
        $("#submit-button").css({ background: "gray" });

    }

    handleChange(e) {
        //handles change for fields in the form.
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        // need to refactor to call thunk actions

        let origin = this.state.origin;
        
        if (window.loading === true){
            return null
        }
        
        window.loading = true;
        
        this.props.getAllQuotes({destination: this.state.country}).then(() => {
            this.getOrigin(this.state.origin.toUpperCase());
            this.getResults(parseInt(this.state.amount))
        }).then(() => {
            window.loading = false;
            this.props.closeModal();
        });
        
    }

    getOrigin(airport) {
        let place = this.getPlace(airport)
        let geo = this.getGeo(place);
        this.props.setOrigin(Object.assign(place, { Location: geo }));
    }

    getGeo(place) {
        return this.props.geo[place.IataCode].Location;
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

    handleDisable(origin){
        switch (origin) {
            case "oak":
                return "disabled"
            case "sjc":
                return "disabled"
            default:
                return "";
        }
    }


    render() {

        let loadingComponent;
        if (window.loading){
            loadingComponent = <ReactLoading className="flight-search result-search" type="bubbles" color="rgb(95, 188, 205)" />;
        } else {
            loadingComponent = <div className="invisible-div"></div>
        }

        // enable button after all input text has is not empty
        $("#submit-button").prop("disabled", true);

        $('input:text').keyup(function () {
            let disable = false;
            $('input:text').each(function () {
                if ($(this).val() == "") {
                    disable = true;
                    canChangeColor();
                }
            });
            $("#submit-button").prop("disabled", disable);
        });

        // change button color after all field has value
        $("input[type='text'], textarea").on("input", function () {
            canChangeColor();
        });

        function canChangeColor() {
            let filled = true;

            $("input[type='text'], textarea").each(function () {
                if ($(this).val() == '') {filled = false;}
            });

            if (!filled) {
                $("#submit-button").css({ color: "gray" });
            } else {
                $("#submit-button").css({ background: "rgb(95, 188, 205)" });
            }
        }

        return <div>
            {loadingComponent}
            <div className="sidebar-flight-show modal left fade">
              <div className="modal-dialog left">
                <form className="modal-content flight-search-input-form" onSubmit={this.handleSubmit}>
                  <div className="form-logo">
                    <img className="modal logo" src="https://image.ibb.co/hOajVq/Logo3.png" alt="Fly-To" border="0" />
                  </div>
                  <div className="form-origin-title">From:</div>
                  <div className="select-wrapper">
                    <select className="origin" name="origin" onChange={this.handleChange} type="text">
                      <option className="select-values" value="sfo">
                        San Francisco Airport SFO
                      </option>
                      <option className="select-values" value="sjc">
                        San Jose Airport SJC
                      </option>
                      <option className="select-values" value="oak">
                        Oakland Airport OAK
                      </option>
                      <option className="select-values" value="jfk">
                        John F. Kennedy Airport JFK
                      </option>
                    </select>
                  </div>

                  <div className="form-region-title form-origin-title">
                    To:
                    <div>
                      <select required="required" className="origin form-region-input" name="country" onChange={this.handleChange} type="text">
                        <option className="select-values" value="us">
                            United States
                        </option>
                        <option disabled={this.handleDisable(this.state.origin === "sjc" ? "" : this.state.origin)} className="select-values" value="anywhere">
                            Anywhere
                        </option>
                        <option disabled={this.handleDisable(this.state.origin)} className="select-values" value="ca">
                          Canada
                        </option>
                        <option className="select-values" value="mx">
                          Mexico
                        </option>
                        <option disabled={this.handleDisable(this.state.origin)} className="select-values" value="jp">
                          Japan
                        </option>
                        <option disabled={this.handleDisable(this.state.origin)} className="select-values" value="de">
                          Germany
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-budget-title">Budget:</div>
                  <input className="form-budget-input" name="amount" onChange={this.handleChange} placeholder="eg. '200' " type="text" />

                  <button id="submit-button" className="form-button button-input">
                    GO
                  </button>
                </form>
              </div>
            </div>
          </div>;
    }
}

export default FlightShow;