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
const profile = (state=initialState, action) => {
    switch(action.type) {
        case getProfile.SUCCESS: 
            return {...state, profile: action.payload.data.data.profile};
        case getProfile.FAILURE: 
            return action.payload;
        case getProfileEvent.SUCCESS: 
            return { ...state, 'profile_events': action.payload.data.data.profile_events};
        case getProfileEvent.FAILURE: 
            return action.payload;
        case getPitchingSummary.SUCCESS:
            return { ...state, 'pitching_summary': action.payload.data.data.pitching_summary};
        case getPitchingSummary.FAILURE: 
            return action.payload;
        case updateProfile.SUCCESS:
            return { ...state, profile: action.payload.data.data.update_profile.profile };
        case updateProfile.FAILURE:
            return action.payload;
        case getCurrentProfile.SUCCESS:
            return { ...state, profile: action.payload.data.data.current_profile};
        case getCurrentProfile.FAILURE: 
            return action.payload;
        case changeFavorite.SUCCESS: 
            return {
                ...state,
                profile :{...state.profile, favorite: action.payload.data.data.update_favorite_profile.favorite},
            };
        default: return state;
    }
};

export default profile;