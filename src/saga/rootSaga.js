import { takeEvery } from 'redux-saga/effects';
import {
  signUp,
  signIn,
  getNetwork,
  getLeaderBoard,
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  getSchools,
  getTeams,
  getFacilities,
  updateProfile,
  persisSignIn,
  getLeaderBoardPitch,
  getSecondNetwork,
  getCurrentProfile,
  changeFavorite,
  filterNetwork,
  filterLeaderBoardsBatting,
  filterLeaderBoardsPitching,
  searchPlayer,
  getSecondProfile,
  getBattingSummary,
  getBattingLog,
  getPitchingLog,
} from '../store/routines/routines';
import { handleSignUpTrigger, handleSignInTrigger, handlePersisSignInTrigger } from './user';
import {
  handleGetNetworkTrigger,
  handleGetSecondNetworkTrigger,
  handleFilterNetworkTrigger,
} from './network';
import {
  handleGetLeaderBoardTrigger,
  handleGetLeaderBoardPitchTrigger,
  handleFilterLeaderBoardsBattingTrigger,
  handleFilterLeaderBoardsPitchingTrigger,
} from './leaderboard';
import {
  handleGetProfileTrigger,
  handleGetProfileEventTrigger,
  handleGetPitchingSummaryTrigger,
  handleGetTeamsTrigger,
  handleGetSchoolsTrigger,
  handleGetFacilitiesTrigger,
  handleUpdateProfileTrigger,
  handleGetCurrentProfileTrigger,
  handleChangeFavoriteTrigger,
} from './profile';

import { handleGetSecondProfileTrigger } from './secondProfile';
import { handleSearchPlayerTrigger } from './profileNames';
import { handleGetBattingSummaryTrigger } from './battingSummary';
import { handleGetBattingLogTrigger } from './battingLog';
import { handleGetPitchingLogTrigger } from './pitchingLog';

export default function* rootSaga() {
  yield takeEvery(signUp, handleSignUpTrigger);
  yield takeEvery(signIn, handleSignInTrigger);
  yield takeEvery(getNetwork, handleGetNetworkTrigger);
  yield takeEvery(getLeaderBoard, handleGetLeaderBoardTrigger);
  yield takeEvery(getProfile, handleGetProfileTrigger);
  yield takeEvery(getProfileEvent, handleGetProfileEventTrigger);
  yield takeEvery(getPitchingSummary, handleGetPitchingSummaryTrigger);
  yield takeEvery(getTeams, handleGetTeamsTrigger);
  yield takeEvery(getSchools, handleGetSchoolsTrigger);
  yield takeEvery(getFacilities, handleGetFacilitiesTrigger);
  yield takeEvery(updateProfile, handleUpdateProfileTrigger);
  yield takeEvery(persisSignIn, handlePersisSignInTrigger);
  yield takeEvery(getLeaderBoardPitch, handleGetLeaderBoardPitchTrigger);
  yield takeEvery(getSecondNetwork, handleGetSecondNetworkTrigger);
  yield takeEvery(getCurrentProfile, handleGetCurrentProfileTrigger);
  yield takeEvery(changeFavorite, handleChangeFavoriteTrigger);
  yield takeEvery(filterNetwork, handleFilterNetworkTrigger);
  yield takeEvery(filterLeaderBoardsBatting, handleFilterLeaderBoardsBattingTrigger);
  yield takeEvery(filterLeaderBoardsPitching, handleFilterLeaderBoardsPitchingTrigger);
  yield takeEvery(searchPlayer, handleSearchPlayerTrigger);
  yield takeEvery(getSecondProfile, handleGetSecondProfileTrigger);
  yield takeEvery(getBattingSummary, handleGetBattingSummaryTrigger);
  yield takeEvery(getBattingLog, handleGetBattingLogTrigger);
  yield takeEvery(getPitchingLog, handleGetPitchingLogTrigger);
}
