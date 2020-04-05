import {getPitchingLog} from '../routines/routines';

const initialState = '';

const pitchingLog = (state=initialState, action) => {
    switch(action.type) {
        case getPitchingLog.SUCCESS: return action.payload;
        default: return state;
    }
}

export default pitchingLog;