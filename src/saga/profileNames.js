import {searchPlayer} from '../store/routines/routines';
import {call, put} from 'redux-saga/effects';
import ApiService from '../services/api';

export function* handleSearchPlayerTrigger(action) {
    const {payload} = action;
    yield put(searchPlayer.request());

    try{
        const response = yield call(ApiService.searchPlayer, payload);
        const {profile_names} = response.data.data.profile_names;
        yield put(searchPlayer.success(profile_names));
    }catch(e) {
        yield put(searchPlayer.failure(e));
        console.log(e);
    }
    yield put(searchPlayer.fulfill());
}

