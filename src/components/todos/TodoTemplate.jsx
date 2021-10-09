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

  const openModal = (e) => {
    setModal(true);
  };

  const closeModal = ({ target }) => {
    const currEl = target;
    if (currEl === modalEl.current || currEl.classList.contains('close-btn')) {
      setModal(false);
    }
  };

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <>
      {modal && (
        <Modal>
          <Overlay ref={modalEl} onClick={closeModal}>
            <div className='modal-content'>
              <div>내용</div>
              <button className='close-btn' onClick={closeModal}>
                닫기
              </button>
            </div>
          </Overlay>
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
        <button className='modal-btn' onClick={openModal}>
          Modal
        </button>
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
  .modal-btn {
    margin-top: 30px;
  }
`;

const Overlay = styled.div`
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
    position: relative;
    width: 500px;
    height: 500px;
    font-size: 50px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-btn {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export default TodoTemplate;
