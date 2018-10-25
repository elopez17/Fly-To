import * as APIUtil from '../util/flight_api_util';

export const RECEIVE_ALL_DATA = 'RECEIVE_ALL_DATA';

const receiveAllData = (resp) => ({
  type: RECEIVE_ALL_DATA,
  payload: resp.data,
});

export const fetchAllData = (filters) => (dispatch) => {

  filters = Object.assign(
    { country: 'US', currency: 'usd', locale: 'en-US',
    origin: 'us', destination: 'us',
    outbound: 'anytime', inbound: 'anytime'}, filters);
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}
  return APIUtil.fetchAllData(filters).then(data => dispatch(receiveAllData(data)));
};
