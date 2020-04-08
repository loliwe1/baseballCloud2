import { getNetwork, getSecondNetwork, filterNetwork } from '../routines/routines';

const initialState = {};

const network = (state = initialState, action) => {
  switch (action.type) {
    case getNetwork.SUCCESS: return action.payload;
    case getSecondNetwork.SUCCESS: return action.payload;
    case filterNetwork.SUCCESS: return action.payload;
    default: return state;
  }
};

export default network;
