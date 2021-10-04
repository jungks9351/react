import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { addTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';

const AddTodo = ({ lists, setLists }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const changeValue = (e) => {
    setValue((prev) => e.target.value);
  };
  const addList = (e) => {
    e.preventDefault();
    const newItem = { id: lists.length + 1, todo: value };
    axios.post('http://localhost:4000/lists', newItem);
    setLists([...lists, newItem]);
    dispatch(addTodo(newItem));
  };

  return (
    <AddTodoWrapper>
      <form onSubmit={addList}>
        <input
          type='text'
          placeholder='할 일을 추가하세요.'
          value={value}
          onChange={changeValue}
        />
        <button>+</button>
      </form>
    </AddTodoWrapper>
  );
};

const AddTodoWrapper = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
  }
  input {
    border: 2px solid orange;
    width: 300px;
    margin: 0 1rem;
    height: 30px;
    color: orange;
    font-size: 1.7rem;
  }
  input::placeholder {
    color: orange;
    font-size: 1.7rem;
  }
  button {
    font-size: 3rem;
    width: 30px;
    height: 30px;
    color: #fff;
    background-color: orange;
  }
`;
export default AddTodo;
