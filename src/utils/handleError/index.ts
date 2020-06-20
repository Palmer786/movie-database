import axios, {AxiosError} from 'axios';
const handleError = (error: AxiosError) => {
  if (axios.isCancel(error)) {
    return;
  } else if (error.response) {
    console.log('Error data: ', error.response.data);
    console.log('Error status :', error.response.status);
    console.log('Error headers: ', error.response.headers);
  } else if (error.request) {
    console.log('Request error: ', error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
};

export default handleError;
