import { call, put, takeLatest } from 'redux-saga/effects'
import BucketsApi from '../services/buckets.api';
import { BUCKETS_FETCH_FAILED, BUCKETS_FETCH_REQUESTED, BUCKETS_FETCH_SUCCEEDED } from "../constants/buckets";
import { bucketsSagaActionType } from '../types';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: bucketsSagaActionType) {
   try {
      const response = yield call(BucketsApi.fetch, action.payload.options);
      yield put({type: BUCKETS_FETCH_SUCCEEDED, payload: response});
   } catch (e) {
      yield put({type: BUCKETS_FETCH_FAILED, message: e.message});
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* buckets() {
  yield takeLatest(BUCKETS_FETCH_REQUESTED , fetchUser);
}

export default buckets;
