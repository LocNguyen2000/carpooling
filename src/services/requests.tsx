import axios from 'axios';

export const BASE_API_URL: string = `${process.env.REACT_APP_BASE_URL || 'localhost:3000'}`;

const customAxios = axios.create({
  baseURL: BASE_API_URL,
});

export default customAxios;