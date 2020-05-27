import axios from 'axios';

const createConfig = () => {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
  });
  // eslint-disable-next-line
  const api_key = process.env.REACT_APP_API_KEY;

  api.interceptors.request.use(config => {
    config.params = config.params || {};
    config.params['api_key'] = api_key;
    config.params['language'] = localStorage.getItem('language') || 'en';
    return config;
  });

  return api;
};

const api = createConfig();

export default api;
