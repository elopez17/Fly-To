import axios from 'axios';

const $ = window.$;


export const getAll = () => dispatch => {
  axios
    .get("/all/test")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};