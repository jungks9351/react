import React from 'react';
import styled from 'styled-components';
import { deleteTodo } from '../../redux/modules/todos';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todo, id }) => {
  const dispatch = useDispatch();
  const deleteList = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <Item>
      <p>{todo}</p>
      <StyledButton id={id} onClick={deleteList}>
        X
      </StyledButton>
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
`;

const StyledButton = styled.button`
  color: #fff;
  background-color: orange;
  width: 30px;
  height: 30px;
  font-size: 2rem;
  font-weight: bolder;
  transition: 0.2s;
  &:hover {
    color: red;
  }
`;

export default TodoItem;
