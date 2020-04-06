import { getBattingLog } from '../routines/routines';

const initialState = '';

const battingLog = (state = initialState, action) => {
  switch (action.type) {
    case getBattingLog.SUCCESS: return action.payload;
    default: return state;
  }
};

export default battingLog;
