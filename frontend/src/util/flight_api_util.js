import axios from 'axios';

export const fetchAllData = (filters) => {

  return (
    axios.get('/all/flights', {
      params: filters
    })
  )
};