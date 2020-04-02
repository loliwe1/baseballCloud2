import {getBattingSummary} from '../routines/routines';

const initialState = '';

const battingSummary = (state=initialState, action) => {
    switch(action.type) {
        case getBattingSummary.SUCCESS: return action.payload;
        default: return state;
    }
}

export default battingSummary;