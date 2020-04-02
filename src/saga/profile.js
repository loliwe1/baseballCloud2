import {
    getProfile,
    getProfileEvent,
    getPitchingSummary,
    getSchools,
    getTeams,
    getFacilities,
    updateProfile,
    getCurrentProfile,
    changeFavorite,
} from '../store/routines/routines';
import {call, put} from 'redux-saga/effects';
import ApiService from '../services/api';
import Storage from '../services/storage';

export function* handleGetProfileTrigger(action) {
    const {payload} = action;
    yield put(getProfile.request());

    try{
        const response = yield call(ApiService.getProfile, payload);
        yield put(getProfile.success(response));
    }catch(e) {
        yield put(getProfile.failure(e));
        console.log(e);
    }
    yield put(getProfile.fulfill());
}

export function* handleGetCurrentProfileTrigger(action) {
    const {payload} = action;
    yield put(getCurrentProfile.request());

    try{
        
        const response = yield call(ApiService.getCurrentProfile, payload);
        const {current_profile} = response.data.data;
        yield call(Storage.saveCurrentProfile, current_profile);
        yield put(getCurrentProfile.success(response));
    }catch(e) {
        yield put(getCurrentProfile.failure(e));
        console.log(e);
    }
    yield put(getCurrentProfile.fulfill());
}




export function* handleGetProfileEventTrigger(action) {
    const {payload} = action;
    yield put(getProfileEvent.request());

    try{
        const response = yield call(ApiService.getProfileEvent, payload);
        yield put(getProfileEvent.success(response));
    }catch(e) {
        yield put(getProfileEvent.failure(e));
        console.log(e);
    }
    yield put(getProfileEvent.fulfill());
}

export function* handleGetPitchingSummaryTrigger(action) {
    const {payload} = action;
    yield put(getPitchingSummary.request());

    try{
        const response = yield call(ApiService.getPitchingSummary, payload);
        yield put(getPitchingSummary.success(response));
    }catch(e) {
        yield put(getPitchingSummary.failure(e));
        console.log(e);
    }
    yield put(getPitchingSummary.fulfill());
}


export function* handleGetTeamsTrigger(action) {
    const {payload} = action;
    yield put(getTeams.request());

    try{
        const response = yield call(ApiService.getTeams, payload);
        yield put(getTeams.success(response));
    }catch(e) {
        yield put(getTeams.failure(e));
        console.log(e);
    }
    yield put(getTeams.fulfill());
}

export function* handleGetSchoolsTrigger(action) {
    const {payload} = action;
    yield put(getSchools.request());

    try{
        const response = yield call(ApiService.getSchools, payload);
        yield put(getSchools.success(response));
    }catch(e) {
        yield put(getPitchingSummary.failure(e));
        console.log(e);
    }
    yield put(getSchools.fulfill());
}


export function* handleGetFacilitiesTrigger(action) {
    const {payload} = action;
    yield put(getPitchingSummary.request());

    try{
        const response = yield call(ApiService.getFacilities, payload);
        yield put(getFacilities.success(response));
    }catch(e) {
        yield put(getFacilities.failure(e));
        console.log(e);
    }
    yield put(getFacilities.fulfill());
}


export function* handleUpdateProfileTrigger(action) {
    console.log('act', action);
    const {payload} = action;
    yield put(updateProfile.request());

    try{
        const headers = yield call(Storage.getHeaders);
        console.log('head', headers);
        const response = yield call(ApiService.updateProfile, payload);
        console.log('res', response);
        yield put(updateProfile.success(response));
    }catch(e) {
        yield put(updateProfile.failure(e));
        console.log(e);
    }
    yield put(updateProfile.fulfill());
}

export function* handleChangeFavoriteTrigger(action){
    const {payload} = action;
    yield put(changeFavorite.request());

    try{
        const response = yield call(ApiService.changeFavorite, payload);
        yield put(changeFavorite.success(response));
    }catch(e) {
        yield put(changeFavorite.failure(e));
        console.log(e)
    }
    yield put(changeFavorite.fulfill());    
}