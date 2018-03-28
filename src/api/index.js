import axios from 'axios';
import * as dataTypes from './dataTypes';

export default {
  getData(dataType) {
    switch (dataType) {
      case dataTypes.SKILLS: {
        return axios.get('/api/skills.json');
      }
      case dataTypes.ABOUTS: {
        return axios.get('/api/aboutmes.json');
      }
      case dataTypes.CONTACTS: {
        return axios.get('/api/contacts.json');
      }
      default: {
        throw new Error('Invalid data type');
      }
    }
  }
};