import axios from 'axios';

export const reqList = async () =>
  await axios.get('http://localhost:4000/lists?_sort=id');

export const deleteList = async (id) => {
  return await axios.delete(`http://localhost:4000/lists/${id}`);
};

export const addList = async (payload) =>
  await axios.post('http://localhost:4000/lists', payload);
