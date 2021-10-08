import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

import { loadTodos } from '../../redux/modules/todos';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/modules/users';
import Modal from '../common/Modal';

const TodoTemplate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const modalEl = useRef();

  const [modal, setModal] = useState(false);

  const moveUserPage = () => {
    dispatch(logout());

    history.push('/login');
  };

  const handleModal = (e) => {
    console.log(e.target);
    setModal((modal) => !modal);
  };

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <>
      {modal && (
        <Modal>
          <TodoModal ref={modalEl} onClick={handleModal}>
            <div className='modal-content'>
              <button onClick={handleModal}>닫기</button>
            </div>
          </TodoModal>
        </Modal>
      )}
      <TodoWrapper>
        <TodoHeader />
        <main>
          <AddTodo />
          <TodoList />
        </main>
        <button onClick={moveUserPage}>로그아웃</button>
        {/* // 2. Link component 사용 */}
        {/* <Link to='/users'>이동</Link> */}
        <button onClick={handleModal}>Modal</button>
      </TodoWrapper>
    </>
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

const TodoModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  .modal-content {
    width: 500px;
    height: 500px;
    font-size: 50px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default TodoTemplate;
