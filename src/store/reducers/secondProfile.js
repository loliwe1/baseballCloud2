import { getSecondProfile } from '../routines/routines';

const initialState = {};

const secondProfile = (state = initialState, action) => {
  switch (action.type) {
    case getSecondProfile.SUCCESS: return action.payload;
    default: return state;
  }
};

export default secondProfile;
