import { call, put } from 'redux-saga/effects';
import { getPitchingLog } from '../store/routines/routines';
import ApiService from '../services/api';

export function* handleGetPitchingLogTrigger(action) {
  const { payload } = action;
  yield put(getPitchingLog.request());

  try {
    const response = yield call(ApiService.getPitchingLog, payload);
    const { pitching_log } = response.data.data;
    yield put(getPitchingLog.success(pitching_log));
  } catch (e) {
    yield put(getPitchingLog.failure(e));
    console.log(e);
  }
  yield put(getPitchingLog.fulfill());
}
