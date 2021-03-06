import * as APIUtil from '../util/flight_api_util';

export const RECEIVE_ALL_QUOTES = 'RECEIVE_ALL_QUOTES';
export const RECEIVE_ALL_GEO = "RECEIVE_ALL_GEO";
export const RECEIVE_ORIGIN = "RECEIVE_ORIGIN";
export const RECEIVE_RESULTS = "RECEIVE_RESULTS";

const receiveAllGeo = (resp) => {
  let geos = {};
  for (let i = 0; i < resp.data.length; i++) {
    geos[resp.data[i].IataCode] = resp.data[i];
  }
  return ({
  type: RECEIVE_ALL_GEO,
  payload: geos,
  });
};

const receiveAllQuotes = (resp) => ({
  type: RECEIVE_ALL_QUOTES,
  payload: resp.data,
});

export const setOrigin = (origin) => ({
  type: RECEIVE_ORIGIN,
  origin,
});

export const setResults = (results) => ({
  type: RECEIVE_RESULTS,
  results,
});

export const fetchAllGeo = () => (dispatch) => {
  return APIUtil.fetchAllGeo().then(res => dispatch(receiveAllGeo(res)));
};

export const fetchAllQuotes = (filters) => (dispatch) => {
  filters = Object.assign(
    { country: 'US', currency: 'usd', locale: 'en-US',
    origin: 'us', destination: 'us',
    outbound: 'anytime', inbound: 'anytime'}, filters);
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}
    
  return APIUtil.fetchAllQuotes(filters).then(data => dispatch(receiveAllQuotes(data)));
};
