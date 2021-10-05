import React, { useState } from 'react';
import styled from 'styled-components';
import { addTodo } from '../../redux/modules/todos';
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const changeValue = (e) => {
    setValue((prev) => e.target.value);
  };

  const addList = (e) => {
    e.preventDefault();
    const newItem = { todo: value };
    console.log(newItem);
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
