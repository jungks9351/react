import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, deleteList, id }) => {
  return (
    <Item>
      <p>{todo}</p>
      <button id={id} onClick={deleteList}>
        X
      </button>
    </Item>
  );
};

const Item = styled.li`
  font-size: 3rem;
  display: flex;
  justify-content: space-between;
  & + & {
    margin-top: 1rem;
  }
  button {
    color: #fff;
    background-color: orange;
    width: 30px;
    height: 30px;
    font-size: 2rem;
    font-weight: bolder;
  }
`;
export default TodoItem;
