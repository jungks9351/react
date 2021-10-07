import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { addUser, checkId } from '../../api/members';
import { useHistory } from 'react-router-dom';
import ErrorBox from '../common/ErrorBox';
const RegistTemplate = () => {
  const history = useHistory();
  const [state, setState] = useState({
    memberId: null,
    memberPw: null,
    memberPw_confirm: null,
  });

  const [error, setError] = useState(null);

  const onChange = useCallback(
    (e) => {
      const name = e.target.name;
      setState({ ...state, [name]: e.target.value });
    },
    [state]
  );

  const addMember = async (e) => {
    e.preventDefault();
    if (!state.memberId || !state.memberPw || !state.memberPw_confirm) {
      setError('값을 입력해주세요');
      return;
    }
    if (state.memberPw !== state.memberPw_confirm) {
      setError('비밀번호를 다시 확인해 주세요.');
      return;
    }
    const validation = await checkId(state.memberId);
    console.log(validation);
    if (validation) {
      setError('중복된 아이디입니다.');
      return;
    }
    await addUser({ memberId: state.memberId, memberPw: state.memberPw });
    history.push('/login');
  };

  return (
    <RegistForm>
      <form onSubmit={addMember}>
        <input
          type='text'
          name='memberId'
          placeholder='아이디를 입력하세요.'
          onChange={onChange}
        />
        <input
          type='password'
          name='memberPw'
          placeholder='비밀번호를 입력하세요.'
          onChange={onChange}
        />
        <input
          type='password'
          name='memberPw_confirm'
          placeholder='비밀번호를 확인하세요.'
          onChange={onChange}
        />
        <button>회원가입</button>
        <ErrorBox>{error}</ErrorBox>
      </form>
    </RegistForm>
  );
};

const RegistForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
  border: 2px solid orange;
  margin: 0 auto;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
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

export default RegistTemplate;
