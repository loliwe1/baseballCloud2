import { combineReducers } from 'redux';
import user from '../reducers/user';
import network from '../reducers/network';
import leaderBoard from '../reducers/leaderboard';
import profile from '../reducers/profile';
import settingProfile from '../reducers/settingsProfile';
import profileNames from '../reducers/profileNames';
import secondProfile from '../reducers/secondProfile';
import battingSummary from '../reducers/battingSummary';

const rootReducer = combineReducers({
    user,
    network,
    leaderBoard,
    profile,
    settingProfile,
    profileNames,
    secondProfile,
    battingSummary,
});

export default rootReducer;