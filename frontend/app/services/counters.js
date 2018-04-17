import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1/';


export const getCounters = () => {
  return axios.get(`${BASE_URL}counters`);
};

export const postCounter = (data) => {
  return axios.post(`${BASE_URL}counter`, data);
};

export const postCounterIncrement = (data) => {
  return axios.post(`${BASE_URL}counter/inc`, data);
};

export const postCounterDecrement = (data) => {
  return axios.post(`${BASE_URL}counter/dec`, data);
};

export const deleteCounter = (data) => {
  // return axios.delete(`${BASE_URL}counter`, data);
  return axios.delete(`${BASE_URL}counter`, { data });
};
