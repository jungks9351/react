import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const TodoList = () => {
  const { lists, error } = useSelector(({ todos }) => ({
    lists: todos.todoList,
    error: todos.error,
  }));

  return (
    <>
      <TodoListWrapper>
        {lists?.map((list) => {
          return <TodoItem key={list.id} id={list.id} todo={list.todo} />;
        })}
        {error && <ErrorMessage>에러</ErrorMessage>}
      </TodoListWrapper>
    </>
  );
};

const TodoListWrapper = styled.ul`
  width: 600px;
  padding: 2rem;
  margin: 30px 0;
  border: 2px solid orange;
`;

const ErrorMessage = styled.div`
  width: 500px;
  font-size: 40px;
`;

export default TodoList;
