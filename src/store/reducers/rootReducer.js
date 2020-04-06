import { combineReducers } from 'redux';
import user from './user';
import network from './network';
import leaderBoard from './leaderboard';
import profile from './profile';
import settingProfile from './settingsProfile';
import profileNames from './profileNames';
import secondProfile from './secondProfile';
import battingSummary from './battingSummary';
import battingLog from './battingLog';
import pitchingLog from './pitchingLog';

const rootReducer = combineReducers({
  user,
  network,
  leaderBoard,
  profile,
  settingProfile,
  profileNames,
  secondProfile,
  battingSummary,
  battingLog,
  pitchingLog,
});

export default rootReducer;
