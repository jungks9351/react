import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

import { loadTodos } from '../../redux/modules/todos';
import { useDispatch } from 'react-redux';

const TodoTemplate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  console.log(location);

  const moveUserPage = () => {
    // 1. hook useHistory 사용

    history.push('/users');
  };

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <TodoWrapper>
      <TodoHeader />
      <main>
        <AddTodo />
        <TodoList />
      </main>
      <button onClick={moveUserPage}>로그아웃</button>
      {/* // 2. Link component 사용 */}
      {/* <Link to='/users'>이동</Link> */}
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
  margin: 3rem 2rem;
  border: 3px solid orange;
  flex-direction: column;
  font-size: 3rem;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default TodoTemplate;