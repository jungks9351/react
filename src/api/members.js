import axios from 'axios';

export const addUser = async (payload) => {
  return await axios.post('http://localhost:4000/members', payload);
};

export const checkId = async (payload) => {
  // console.log(payload);
  const res = await axios.get(
    `http://localhost:4000/members?userId=${payload}`
  );
  // console.log(res.data);
  return res.data.length;
};

export const userLogin = async (payload) => {
  const res = await axios.get(
    `http://localhost:4000/members?userId=${payload.memberId}&userPw=${payload.memberPw}`
  );
  return res.data.length;
};
