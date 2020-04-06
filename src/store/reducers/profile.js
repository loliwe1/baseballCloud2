import {
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  updateProfile,
  getCurrentProfile,
  changeFavorite,
} from '../routines/routines';

const initialState = {
  profile: [],
};
const profile = (state = initialState, action) => {
  switch (action.type) {
    case getProfile.SUCCESS:
      return { ...state, profile: action.payload };
    case getProfileEvent.SUCCESS:
      return { ...state, profEvents: action.payload };
    case getPitchingSummary.SUCCESS:
      return { ...state, pitchSumm: action.payload };
    case updateProfile.SUCCESS:
      return { ...state, profile: action.payload };
    case getCurrentProfile.SUCCESS:
      return { ...state, profile: action.payload };
    case changeFavorite.SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, favorite: action.payload },
      };
    default: return state;
  }
};

export default profile;
