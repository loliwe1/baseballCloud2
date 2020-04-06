import { searchPlayer } from '../routines/routines';

const initialState = [];

const profileNames = (state = initialState, action) => {
  switch (action.type) {
    case searchPlayer.SUCCESS: return action.payload;
    default: return state;
  }
};

export default profileNames;
