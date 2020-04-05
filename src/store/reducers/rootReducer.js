import { combineReducers } from 'redux';
import user from '../reducers/user';
import network from '../reducers/network';
import leaderBoard from '../reducers/leaderboard';
import profile from '../reducers/profile';
import settingProfile from '../reducers/settingsProfile';
import profileNames from '../reducers/profileNames';
import secondProfile from '../reducers/secondProfile';
import battingSummary from '../reducers/battingSummary';
import battingLog from '../reducers/battingLog';
import pitchingLog from '../reducers/pitchingLog';

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