import React from 'react';
import { connect } from 'react-redux';
import Map from './map';
import {openModal} from '../../actions/modal_actions';
import { getChims } from '../../util/chim_util';

const mapStateToProps = (state) => {
  return {
    origin: state.flights.origin,
    locations: state.flights.results,
    futureTheme: require("./map_future_style.json"),
    weenTheme: require("./map_ween_style.json"),
    lightTheme: require("./map_light_style.json"),
    darkTheme: require("./map_dark_style.json")
  };
};


const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);

