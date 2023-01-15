import axios from 'axios';

const URL_PRODUCTION='https://hatota-dev.com/api';
const URL_DEV='';
export default axios.create({
  baseURL: URL_PRODUCTION ,
  withCredentials: true,
});
