import { call, put } from 'redux-saga/effects';
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
import ApiService from '../services/api';
import Storage from '../services/storage';

export function* handleGetProfileTrigger(action) {
  const { payload } = action;
  yield put(getProfile.request());

  try {
    const response = yield call(ApiService.getProfile, payload);
    const { profile } = response.data.data;
    yield put(getProfile.success(profile));
  } catch (e) {
    yield put(getProfile.failure(e));
    console.log(e);
  }
  yield put(getProfile.fulfill());
}

export function* handleGetCurrentProfileTrigger(action) {
  const { payload } = action;
  yield put(getCurrentProfile.request());

  try {
    const response = yield call(ApiService.getCurrentProfile, payload);
    const { current_profile } = response.data.data;
    yield call(Storage.saveCurrentProfile, current_profile);
    yield put(getCurrentProfile.success(current_profile));
  } catch (e) {
    yield put(getCurrentProfile.failure(e));
    console.log(e);
  }
  yield put(getCurrentProfile.fulfill());
}

export function* handleGetProfileEventTrigger(action) {
  const { payload } = action;
  yield put(getProfileEvent.request());

  try {
    const response = yield call(ApiService.getProfileEvent, payload);
    const { profile_events } = response.data.data;
    yield put(getProfileEvent.success(profile_events));
  } catch (e) {
    yield put(getProfileEvent.failure(e));
    console.log(e);
  }
  yield put(getProfileEvent.fulfill());
}

export function* handleGetPitchingSummaryTrigger(action) {
  const { payload } = action;
  yield put(getPitchingSummary.request());

  try {
    const response = yield call(ApiService.getPitchingSummary, payload);
    const { pitching_summary } = response.data.data;
    yield put(getPitchingSummary.success(pitching_summary));
  } catch (e) {
    yield put(getPitchingSummary.failure(e));
    console.log(e);
  }
  yield put(getPitchingSummary.fulfill());
}


export function* handleGetTeamsTrigger(action) {
  const { payload } = action;
  yield put(getTeams.request());

  try {
    const response = yield call(ApiService.getTeams, payload);
    const { teams } = response.data.data.teams;
    yield put(getTeams.success(teams));
  } catch (e) {
    yield put(getTeams.failure(e));
    console.log(e);
  }
  yield put(getTeams.fulfill());
}

export function* handleGetSchoolsTrigger(action) {
  const { payload } = action;
  yield put(getSchools.request());

  try {
    const response = yield call(ApiService.getSchools, payload);
    const { schools } = response.data.data.schools;
    yield put(getSchools.success(schools));
  } catch (e) {
    yield put(getPitchingSummary.failure(e));
    console.log(e);
  }
  yield put(getSchools.fulfill());
}


export function* handleGetFacilitiesTrigger(action) {
  const { payload } = action;
  yield put(getPitchingSummary.request());

  try {
    const response = yield call(ApiService.getFacilities, payload);
    const { facilities } = response.data.data.facilities;
    yield put(getFacilities.success(facilities));
  } catch (e) {
    yield put(getFacilities.failure(e));
    console.log(e);
  }
  yield put(getFacilities.fulfill());
}


export function* handleUpdateProfileTrigger(action) {
  const { payload } = action;
  yield put(updateProfile.request());

  try {
    yield call(Storage.getHeaders);
    const response = yield call(ApiService.updateProfile, payload);
    const { profile } = response.data.data.update_profile;
    yield put(updateProfile.success(profile));
  } catch (e) {
    yield put(updateProfile.failure(e));
    console.log(e);
  }
  yield put(updateProfile.fulfill());
}

export function* handleChangeFavoriteTrigger(action) {
  const { payload } = action;
  yield put(changeFavorite.request());

  try {
    const response = yield call(ApiService.changeFavorite, payload);
    const { favorite } = response.data.data.update_favorite_profile;
    yield put(changeFavorite.success(favorite));
  } catch (e) {
    yield put(changeFavorite.failure(e));
    console.log(e);
  }
  yield put(changeFavorite.fulfill());
}
