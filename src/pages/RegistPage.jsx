import React from 'react';
import RegistTemplate from '../components/members/RegistTemplate';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RegistPage = () => {
  const token = useSelector(({ users }) => {
    return users.token;
  });
  return (
    <>
      <RegistTemplate />
      {token && <Redirect to='/' />}
    </>
  );
};

export default RegistPage;
