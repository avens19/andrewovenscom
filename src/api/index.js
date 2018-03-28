import axios from 'axios';

export default {
  getAllSkills() {
    return axios.get('/api/skills.json');
  }
};