// import * as APIUtil from '../util/flight_api_util'; 

export const RECEIVE_FLIGHTS = "RECEIVE_FLIGHTS";

export const receiveFlights = (flights) => ({
  type: RECEIVE_FLIGHTS,
  flights,
});

// export const fetchFlights = () => (dispatch) => (
//   APIUtil.fetchFlights().then(flights => dispatch(receiveFlights(flights)))
// );

