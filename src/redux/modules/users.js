import { takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';
import { loginSaga } from '../../sagas/userSaga';

const initialState = {
  error: null,
  loading: false,
  token: null,
  //token은 로그인 성공시 아무값이 생성된다.
};

// action type 정의

const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const LOGOUT = 'LOGOUT';

// action 생성자 함수 생성

export const login = createAction(LOGIN);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

export const logout = createAction(LOGOUT);

// saga

export function* userSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

// reducer

const users = handleActions(
  {
    [LOGIN]: (state, action) => {
      return { ...state, loading: true, error: null, token: null };
    },
    [LOGIN_SUCCESS]: (state, action) => {
      if (!action.payload) {
        return {
          ...state,
          loading: false,
          error: '존재하지 않는 아이디입니다.',
        };
      }
      return { ...state, loading: false, token: Math.random() * 10 + 1 };
    },
    [LOGIN_FAILURE]: (state, { payload: error }) => {
      return { ...state, loading: false, error };
    },
    [LOGOUT]: (state, action) => {
      return initialState;
    },
  },
  initialState
);

export default users;
