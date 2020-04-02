import {getSecondProfile} from '../store/routines/routines';
import {call, put} from 'redux-saga/effects';
import ApiService from '../services/api';

export function* handleGetSecondProfileTrigger(action) {
    const {payload} = action;
    yield put(getSecondProfile.request());

    try{
        const response = yield call(ApiService.getSecondProfile, payload);
        const {profile} = response.data.data
        yield put(getSecondProfile.success(profile));
    }catch(e) {
        yield put(getSecondProfile.failure(e));
        console.log(e);
    }
    yield put(getSecondProfile.fulfill());
}
