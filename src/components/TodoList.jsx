import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import axios from 'axios';

const TodoList = ({ lists, setLists }) => {
  const deleteList = (e) => {
    const id = e.target.id;
    axios.delete(`http://localhost:4000/lists/${id}`);
    setLists(lists.filter((item) => item.id !== +id));
  };

  return (
    <>
      <TodoListWrapper>
        {lists?.map((list) => {
          return (
            <TodoItem
              key={list.id}
              id={list.id}
              todo={list.todo}
              deleteList={deleteList}
            />
          );
        })}
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
export default TodoList;
