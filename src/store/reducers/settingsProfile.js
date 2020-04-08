import { getSchools, getTeams, getFacilities } from '../routines/routines';

const initialState = {
  schools: [],
  teams: [],
  facilities: [],
};

const settingProfile = (state = initialState, action) => {
  switch (action.type) {
    case getSchools.SUCCESS: return { ...state, schools: action.payload };
    case getTeams.SUCCESS: return { ...state, teams: action.payload };
    case getFacilities.SUCCESS: return { ...state, facilities: action.payload };
    default: return state;
  }
};

export default settingProfile;
