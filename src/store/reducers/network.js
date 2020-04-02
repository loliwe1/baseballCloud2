import {getNetwork, getSecondNetwork, filterNetwork} from '../routines/routines';

const initialState = '';

const network = (state=initialState, action) => {
    switch(action.type) {
        case getNetwork.SUCCESS: return action.payload.data.data.profiles;
        case getNetwork.FAILURE: return action.payload;
        case getSecondNetwork.SUCCESS: return action.payload.data.data.profiles;
        case getSecondNetwork.FAILURE: return action.payload;
        case filterNetwork.SUCCESS: {
            console.log('re', action.payload.data.data.profiles);
            return action.payload.data.data.profiles;
        } 
        default: return state;
    }
};

export default network;
