import axios from 'axios';

export default axios.create({
  baseURL: 'https://wger.de/api/v2/',
  headers: {
    Authorization:
      'Token af14f51e9988b6004f413e096d4ee9dd2a042201',
  },
});
