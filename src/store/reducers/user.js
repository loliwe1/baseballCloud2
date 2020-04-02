import {signUp, signIn, persisSignIn, getCurrentProfile} from '../routines/routines';

const initialState = {
    profId: JSON.parse(localStorage.getItem('id')) || '',
    name: JSON.parse(localStorage.getItem('name')) || '',
};

const user = (state=initialState, action) => {
    switch(action.type) {
        case signUp.SUCCESS: return {...state, ...action.payload};
        case signUp.FAILURE: return {...state, ...action.payload};
        case signIn.SUCCESS: return {...state, ...action.payload};
        case signIn.FAILURE: return {...state, ...action.payload};
        case persisSignIn.SUCCESS: return {...state, ...action.payload.data.data};
        case persisSignIn.FAILURE: return {...state, ...action.payload};
        case getCurrentProfile.SUCCESS:
            return {
                ...state,
                profId: action.payload.data.data.current_profile.id,
                name: action.payload.data.data.current_profile.first_name,
            };
        default: return state;
    }
};

export default user;