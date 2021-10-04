import { takeLatest } from '@redux-saga/core/effects';
import { createAction, handleActions } from 'redux-actions';
import {
  loadListSaga,
  addListSaga,
  deleteListSaga,
} from '../../sagas/todoSaga';

//초기상태

const initialState = {
  todoList: [
    {
      id: 1,
      todo: 'JavaScript',
    },
    {
      id: 2,
      todo: 'React',
    },
    {
      id: 3,
      todo: 'NodeJS',
    },
  ],
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
      return { ...state, loading: true };
    },
    [LOADTODOS_SUCCESS]: (state, action) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
    [LOADTODOS_FAILURE]: (state, action) => {
      console.log('실패');
    },

    [ADDTODO]: (state, action) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
    [ADDTODO_SUCCESS]: (state, action) => {
      console.log('성공');
    },
    [ADDTODO_FAILURE]: (state, action) => {
      console.log('실패');
    },
    [DELETETODO]: (state, action) => ({
      ...state,
      todoList: state.todoList.filter((item) => action.payload !== item.id),
    }),
    [DELETETODO_SUCCESS]: (state, action) => {
      console.log('성공');
    },
    [DELETETODO_FAILURE]: (state, action) => {
      console.log('실패');
    },
  },
  initialState
);

export default todos;
