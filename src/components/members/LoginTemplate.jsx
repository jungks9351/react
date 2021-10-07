import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ErrorBox from '../common/ErrorBox';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/modules/users';
import { useHistory } from 'react-router-dom';

const LoginTemplate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, error, token } = useSelector(({ users }) => ({
    loading: users.loading,
    error: users.error,
    token: users.token,
  }));
  const [state, setState] = useState({
    memberId: null,
    memberPw: null,
  });

  const onChange = useCallback(
    (e) => {
      const name = e.target.name;
      setState({ ...state, [name]: e.target.value });
    },
    [state]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(state));
    // if (token) {
    //   history.push('/');
    // }
  };

  useEffect(() => {
    if (!loading && token) {
      history.push('/');
    }
  }, [history, token, loading]);

  return (
    <LoginForm>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className='mamberId'>
          <label htmlFor='memberId' className='a11y-hidden'>
            아이디
          </label>
          <input
            type='text'
            name='memberId'
            placeholder='아이디를 입력하세요.'
            onChange={onChange}
          />
        </div>

        <div className='memberPw'>
          <label htmlFor='memberPw' className='a11y-hidden'>
            비밀번호
          </label>
          <input
            type='password'
            name='memberPw'
            placeholder='비밀번호를 입력하세요.'
            onChange={onChange}
          />
        </div>
        <button>로그인</button>
        <ErrorBox>{error}</ErrorBox>
      </form>
    </LoginForm>
  );
};

const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
  border: 2px solid orange;
  margin: 50px auto;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: bolder;
    color: orange;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
  }
  input {
    width: 300px;
    height: 30px;
    border: 1px solid orange;
    font-size: 24px;
  }
  input::placeholder {
    font-size: 18px;
    padding: 20px;
  }
  button {
    font-size: 20px;
    color: #fff;
    background-color: orange;
    width: 300px;
    height: 30px;
  }
`;

export default LoginTemplate;
