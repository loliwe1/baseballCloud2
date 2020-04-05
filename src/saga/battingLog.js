import {getBattingLog} from '../store/routines/routines';
import {call, put} from 'redux-saga/effects';
import ApiService from '../services/api';

export function* handleGetBattingLogTrigger(action) {
    const {payload} = action;
    yield put(getBattingLog.request());

    try{
        const response = yield call(ApiService.getBattingLog, payload);
        console.log('res', response);
        const {batting_log} = response.data.data;
        yield put(getBattingLog.success(batting_log));
    }catch(e) {
        yield put(getBattingLog.failure(e));
        console.log(e);
    }
    yield put(getBattingLog.fulfill());
}
