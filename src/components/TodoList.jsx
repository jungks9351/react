import React from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import axios from 'axios';
import { deleteTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';

const TodoList = ({ lists, setLists }) => {
  const dispatch = useDispatch();
  const deleteList = (e) => {
    const id = e.target.id;
    axios.delete(`http://localhost:4000/lists/${id}`);
    setLists(lists.filter((item) => item.id !== +id));
    dispatch(deleteTodo(id));
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
