import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import axios from 'axios';
import { loadTodos } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';

const TodoTemplate = () => {
  const dispatch = useDispatch();
  const [lists, setLists] = useState([]);
  console.log(lists);
  const reqList = async () => {
    const { data: lists } = await axios.get('http://localhost:4000/lists');
    setLists(lists);
  };
  useEffect(() => {
    reqList();
    dispatch(loadTodos());
  }, []);

  return (
    <TodoWrapper>
      <TodoHeader />
      <main>
        <AddTodo lists={lists} setLists={setLists} />
        <TodoList lists={lists} setLists={setLists} />
      </main>
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
