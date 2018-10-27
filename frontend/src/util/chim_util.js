import axios from 'axios';

const $ = window.$;


export const getChims = () => {
  return axios
  .get("/all/chimichanga");
};
