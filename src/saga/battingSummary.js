import {getBattingSummary} from '../store/routines/routines';
import {call, put} from 'redux-saga/effects';
import ApiService from '../services/api';

export function* handleGetBattingSummaryTrigger(action) {
    const {payload} = action;
    yield put(getBattingSummary.request());

    try{
        const response = yield call(ApiService.getBattingSummary, payload);
        const {batting_summary} = response.data.data
        yield put(getBattingSummary.success(batting_summary));
    }catch(e) {
        yield put(getBattingSummary.failure(e));
        console.log(e);
    }
    yield put(getBattingSummary.fulfill());
}
