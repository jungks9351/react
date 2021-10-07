import React from 'react';
import LoginTemplate from '../components/members/LoginTemplate';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
  const token = useSelector(({ users }) => {
    return users.token;
  });

  return (
    <>
      <LoginTemplate />
      {token && <Redirect to='/' />}
    </>
  );
};

export default LoginPage;
