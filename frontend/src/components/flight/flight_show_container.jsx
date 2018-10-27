import React from 'react';
import { connect } from 'react-redux';
import FlightShow from './flight_show.jsx';
// import {fetchAllQuotes} from '../../actions/flights_actions';
import { fetchAllQuotes, fetchAllGeo, setOrigin, setResults } from '../../actions/flights_actions';


const mapStateToProps = state => {
    return ({
        quotes: state.flights.quotes,
        places: state.flights.places,
        geo: state.flights.geo,
        origin: state.flights.origin,
        
    })
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchAllQuotes: (filters) => dispatch(fetchAllQuotes(filters)),
        getAllQuotes: (filters) => dispatch(fetchAllQuotes(filters)),
        getAllGeo: () => dispatch(fetchAllGeo()),
        setOrigin: (origin) => dispatch(setOrigin(origin)),
        setResults: (results) => dispatch(setResults(results))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightShow);