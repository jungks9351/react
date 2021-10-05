import { takeLatest } from '@redux-saga/core/effects';
import { createAction, handleActions } from 'redux-actions';
import {
  loadListSaga,
  addListSaga,
  deleteListSaga,
} from '../../sagas/todoSaga';

//초기상태

const initialState = {
  todoList: null,
  error: null,
  loading: false,
};

//필수
// action type 정의

const LOADTODOS = 'LOADTODOS';
const LOADTODOS_SUCCESS = 'LOADTODOS_SUCCESS';
const LOADTODOS_FAILURE = 'LOADTODOS_FAILURE';
const ADDTODO = 'ADDTODO';
const ADDTODO_SUCCESS = 'ADDTODO_SUCCESS';
const ADDTODO_FAILURE = 'ADDTODO_FAILURE';
const DELETETODO = 'DELETETODO';
const DELETETODO_SUCCESS = 'DELETETODO_SUCCESS';
const DELETETODO_FAILURE = 'DELETETODO_FAILURE';

//액션 생성자 함수 만들기
export const loadTodos = createAction(LOADTODOS);
export const loadTodosSuccess = createAction(LOADTODOS_SUCCESS);
export const loadTodosFailure = createAction(LOADTODOS_FAILURE);

export const addTodo = createAction(ADDTODO);
export const addTodoSuccess = createAction(ADDTODO_SUCCESS);
export const addTodoFailure = createAction(ADDTODO_FAILURE);

export const deleteTodo = createAction(DELETETODO);
export const deleteTodoSuccess = createAction(DELETETODO_SUCCESS);
export const deleteTodoFailure = createAction(DELETETODO_FAILURE);

// saga

export function* todoSaga() {
  yield takeLatest(LOADTODOS, loadListSaga);
  yield takeLatest(ADDTODO, addListSaga);
  yield takeLatest(DELETETODO, deleteListSaga);
}

//reducer

const todos = handleActions(
  {
    [LOADTODOS]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [LOADTODOS_SUCCESS]: (state, action) => {
      return {
        ...state,
        todoList: action.payload,
        loading: false,
      };
    },
    [LOADTODOS_FAILURE]: (state, action) => {
      return { ...state, error: action.payload, loading: false };
    },

    [ADDTODO]: (state, action) => {
      return { ...state, error: null, loading: true };
    },
    [ADDTODO_SUCCESS]: (state, { payload: newItem }) => {
      // console.log(state);
      return {
        ...state,
        todoList: [...state.todoList, newItem],
        loading: false,
      };
    },
    [ADDTODO_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error,
        loading: false,
      };
    },
    [DELETETODO]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [DELETETODO_SUCCESS]: (state, action) => {
      return {
        ...state,
        todoList: [...state.todoList].filter((item) => {
          return item.id !== action.payload;
        }),
        loading: false,
      };
    },
    [DELETETODO_FAILURE]: (state, { payload: error }) => {
      return {
        ...state,
        error,
        loading: false,
      };
    },
  },
  initialState
);

export default todos;
