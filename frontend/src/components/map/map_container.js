import React from 'react';
import { connect } from 'react-redux';
import Map from './map';
import {openModal} from '../../actions/modal_actions';
import { getChims } from '../../util/chim_util';
import { isLoading, isDoneLoading } from '../../actions/loading_actions';

const mapStateToProps = (state) => {
  // debugger
  return {
    origin: state.flights.origin,
    locations: state.flights.results,
    loading: true
  };
};


const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        isLoading: () => dispatch(isLoading()),
        isDoneLoading: () => dispatch(isDoneLoading())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Map);

