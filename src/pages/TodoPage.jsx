import React from 'react';
import TodoTemplate from '../components/todos/TodoTemplate';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const TodoPage = () => {
  const token = useSelector(({ users }) => {
    return users.token;
  });

  return <>{token ? <TodoTemplate /> : <Redirect to='/login' />}</>;
};

export default TodoPage;
