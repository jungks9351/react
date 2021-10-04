import axios from 'axios';

export const reqList = async () =>
  await axios.get('https://localhost:4000/lists');

export const deleteList = async (id) =>
  await axios.delete(`http://localhost:4000/lists/${id}`);

export const addList = async (payload) =>
  await axios.post('http://localhost:4000/lists', payload);
