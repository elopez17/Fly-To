import React from 'react';
import { connect } from 'react-redux';
import FlightShow from './flight_show.jsx';
// import {fetchAllQuotes} from '../../actions/flights_actions';
import { fetchAllQuotes, fetchAllGeo, setOrigin, setResults } from '../../actions/flights_actions';
import {isLoading, isDoneLoading} from '../../actions/loading_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        quotes: state.flights.quotes,
        places: state.flights.places,
        geo: state.flights.geo,
        origin: state.flights.origin,
        loading: state.ui.loading
        
    })
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchAllQuotes: (filters) => dispatch(fetchAllQuotes(filters)),
        getAllQuotes: (filters) => dispatch(fetchAllQuotes(filters)),
        getAllGeo: () => dispatch(fetchAllGeo()),
        setOrigin: (origin) => dispatch(setOrigin(origin)),
        setResults: (results) => dispatch(setResults(results)),
        isLoading: () => dispatch(isLoading()),
        isDoneLoading: () => dispatch(isDoneLoading()),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightShow);