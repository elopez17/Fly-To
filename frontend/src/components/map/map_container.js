import React from 'react';
import { connect } from 'react-redux';
import Map from './map';
import {openModal} from '../../actions/modal_actions';
import { getChims } from '../../util/chim_util';

const mapStateToProps = (state) => {
  // debugger
  return {
    origin: state.flights.origin,
    locations: state.flights.results
  };
};


const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);

