import React from 'react';
import { connect } from 'react-redux';
import FlightShow from './flight_show.jsx';
import {fetchAllData} from '../../actions/flights_actions';

const mapStateToProps = state => {
    return ({

    })
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllData: (filters) => dispatch(fetchAllData(filters))
    }
}

export default connect(null, mapDispatchToProps)(FlightShow);