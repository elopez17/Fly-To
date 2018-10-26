import React from 'react';
import { connect } from 'react-redux';
import FlightShow from './flight_show.jsx';
import {fetchAllQuotes} from '../../actions/flights_actions';

const mapStateToProps = state => {
    return ({

    })
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllQuotes: (filters) => dispatch(fetchAllQuotes(filters))
    }
}

export default connect(null, mapDispatchToProps)(FlightShow);