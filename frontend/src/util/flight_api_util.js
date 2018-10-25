import axios from 'axios';

export const fetchAllData = (filters) => (
  axios.get('/all/flights', {
    params: filters
  })
);