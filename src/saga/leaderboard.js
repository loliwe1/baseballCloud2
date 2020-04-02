import {call, put} from 'redux-saga/effects';
import ApiService from '../services/api';
import {
    getLeaderBoard,
    getLeaderBoardPitch,
    filterLeaderBoardsBatting,
    filterLeaderBoardsPitching,
} from '../store/routines/routines';


export function* handleGetLeaderBoardTrigger(action) {
    const {payload} = action;
    yield put(getLeaderBoard.request());

    try{
        const response = yield call(ApiService.getLeaderBoard, payload);
        yield put(getLeaderBoard.success(response));
    }catch(e) {
        yield put(getLeaderBoard.failure(e));
        console.log(e);
    }
    yield put(getLeaderBoard.fulfill());
}

export function* handleGetLeaderBoardPitchTrigger(action) {
    const {payload} = action;
    yield put(getLeaderBoardPitch.request());

    try{
        const response = yield call(ApiService.getLeaderBoardPitch, payload);
        yield put(getLeaderBoardPitch.success(response));
    }catch(e) {
        yield put(getLeaderBoardPitch.failure(e));
        console.log(e);
    }
    yield put(getLeaderBoardPitch.fulfill());
}

export function* handleFilterLeaderBoardsBattingTrigger(action) {
    const {payload} = action;
    yield put(filterLeaderBoardsBatting.request());

    try{
        const response = yield call(ApiService.filterLeaderBoardsBatt, payload);
        yield put(filterLeaderBoardsBatting.success(response));
    }catch(e) {
        yield put(filterLeaderBoardsBatting.failure(e));
        console.log(e);
    }
    yield put(filterLeaderBoardsBatting.fulfill());
}

export function* handleFilterLeaderBoardsPitchingTrigger(action) {
    const {payload} = action;
    yield put(filterLeaderBoardsPitching.request());

    try{
        const response = yield call(ApiService.filterLeaderBoardsPitch, payload);
        yield put(filterLeaderBoardsPitching.success(response));
    }catch(e) {
        yield put(filterLeaderBoardsPitching.failure(e));
        console.log(e);
    }
    yield put(filterLeaderBoardsPitching.fulfill());
}