import {getNetwork, getSecondNetwork, filterNetwork} from '../store/routines/routines';
import {call, put} from 'redux-saga/effects';
import ApiService from '../services/api';



export function* handleGetNetworkTrigger(action) {
    const {payload} = action;
    yield put(getNetwork.request());

    try{
        const response = yield call(ApiService.getNetwork, payload);
        yield put(getNetwork.success(response));
    }catch(e) {
        yield put(getNetwork.failure(e));
        console.log(e);
    }
    yield put(getNetwork.fulfill());
}

export function* handleGetSecondNetworkTrigger(action) {
    const {payload} = action;
    yield put(getSecondNetwork.request());

    try{
        const response = yield call(ApiService.getSecondNetwork, payload);
        yield put(getSecondNetwork.success(response));
    }catch(e) {
        yield put(getSecondNetwork.failure(e));
        console.log(e);
    }
    yield put(getSecondNetwork.fulfill());
}

export function* handleFilterNetworkTrigger(action) {
    const {payload} = action;
    yield put(filterNetwork.request());

    try{
        const response = yield call(ApiService.filterNetwork, payload);
        yield put(filterNetwork.success(response));
    }catch(e) {
        yield put(filterNetwork.failure(e));
        console.log(e);
    }
    yield put(filterNetwork.fulfill());
}