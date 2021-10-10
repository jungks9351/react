import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

import { loadTodos } from '../../redux/modules/todos';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/modules/users';
import Modal from '../common/Modal';
import useModal from '../../hooks/useModal';
import Overlay from '../common/Overlay';

import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Avatar } from 'antd';

const TodoTemplate = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [modal, openModal, closeModal] = useModal();

  // const openModal = (e) => {
  //   setModal(true);
  // };

  // const closeModal = ({ target }) => {
  //   const currEl = target;
  //   if (currEl === modalEl.current || currEl.classList.contains('close-btn')) {
  //     setModal(false);
  //   }
  // };
  const moveUserPage = () => {
    dispatch(logout());

    history.push('/login');
  };

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  return (
    <>
      {modal && (
        <Modal>
          <Overlay closeModal={closeModal}>
            <ModalWrapper>
              <Avatar icon={<AiOutlineCloseSquare />} />
              <AiOutlineCloseSquare
                className='close-btn'
                onClick={closeModal}
              />
            </ModalWrapper>
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

const ModalWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  font-size: 50px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    cursor: pointer;
  }
`;

export default TodoTemplate;
