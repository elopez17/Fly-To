import axios from 'axios';

export const fetchAllQuotes = (filters) => (
  axios.get('/all/flights', {
    params: filters
  })
);

export const fetchAllGeo = () => (
  axios.get('/all/geo')
);