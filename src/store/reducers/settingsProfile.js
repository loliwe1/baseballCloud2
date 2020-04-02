import {getSchools, getTeams, getFacilities} from '../routines/routines';

const initialState = {};

const settingProfile = (state=initialState, action) => {
    switch(action.type) {
        case getSchools.SUCCESS: return {...state, schools: action.payload.data.data.schools.schools};
        case getSchools.FAILURE: return action.payload;
        case getTeams.SUCCESS: return {...state, teams: action.payload.data.data.teams.teams};
        case getTeams.FAILURE: return action.payload;
        case getFacilities.SUCCESS: return {...state, facilities: action.payload.data.data.facilities.facilities};
        case getFacilities.FAILURE: return action.payload;
        default: return state;
    }
};

export default settingProfile;