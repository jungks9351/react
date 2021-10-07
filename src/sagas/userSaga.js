import { call, put } from 'redux-saga/effects';
import { userLogin } from '../api/members';

export function* loginSaga(action) {
  try {
    const res = yield call(userLogin, action.payload);

    yield put({
      type: `${action.type}_SUCCESS`,
      payload: res,
    });
  } catch (e) {
    yield put({
      type: `${action.type}_FAILURE`,
      payload: e,
    });
  }
}
