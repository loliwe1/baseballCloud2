import { call, put } from 'redux-saga/effects';
import ApiService from '../services/api';
import {
  getLeaderBoard,
  getLeaderBoardPitch,
  filterLeaderBoardsBatting,
  filterLeaderBoardsPitching,
} from '../store/routines/routines';


export function* handleGetLeaderBoardTrigger(action) {
  const { payload } = action;
  yield put(getLeaderBoard.request());

  try {
    const response = yield call(ApiService.getLeaderBoard, payload);
    const { leaderboard_batting } = response.data.data.leaderboard_batting;
    yield put(getLeaderBoard.success(leaderboard_batting));
  } catch (e) {
    yield put(getLeaderBoard.failure(e));
    console.log(e);
  }
  yield put(getLeaderBoard.fulfill());
}

export function* handleGetLeaderBoardPitchTrigger(action) {
  const { payload } = action;
  yield put(getLeaderBoardPitch.request());

  try {
    const response = yield call(ApiService.getLeaderBoardPitch, payload);
    const { leaderboard_pitching } = response.data.data.leaderboard_pitching;
    yield put(getLeaderBoardPitch.success(leaderboard_pitching));
  } catch (e) {
    yield put(getLeaderBoardPitch.failure(e));
    console.log(e);
  }
  yield put(getLeaderBoardPitch.fulfill());
}

export function* handleFilterLeaderBoardsBattingTrigger(action) {
  const { payload } = action;
  yield put(filterLeaderBoardsBatting.request());

  try {
    const response = yield call(ApiService.filterLeaderBoardsBatt, payload);
    const {leaderboard_batting} = response.data.data.leaderboard_batting;
    yield put(filterLeaderBoardsBatting.success(leaderboard_batting));
  } catch (e) {
    yield put(filterLeaderBoardsBatting.failure(e));
    console.log(e);
  }
  yield put(filterLeaderBoardsBatting.fulfill());
}

export function* handleFilterLeaderBoardsPitchingTrigger(action) {
  const { payload } = action;
  yield put(filterLeaderBoardsPitching.request());

  try {
    const response = yield call(ApiService.filterLeaderBoardsPitch, payload);
    const { leaderboard_pitching } = response.data.data.leaderboard_pitching;
    yield put(filterLeaderBoardsPitching.success(leaderboard_pitching));
  } catch (e) {
    yield put(filterLeaderBoardsPitching.failure(e));
    console.log(e);
  }
  yield put(filterLeaderBoardsPitching.fulfill());
}
