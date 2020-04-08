import {
  getLeaderBoard,
  getLeaderBoardPitch,
  filterLeaderBoardsBatting,
  filterLeaderBoardsPitching,
} from '../routines/routines';

const initialState = [];

const leaderBoard = (state = initialState, action) => {
  switch (action.type) {
    case getLeaderBoard.SUCCESS:
      return action.payload;
    case getLeaderBoard.FAILURE:
      return action.payload;
    case getLeaderBoardPitch.SUCCESS:
      return action.payload;
    case getLeaderBoardPitch.FAILURE:
      return action.payload;
    case filterLeaderBoardsBatting.SUCCESS:
      return action.payload;
    case filterLeaderBoardsPitching.SUCCESS:
      return action.payload;
    default: return state;
  }
};

export default leaderBoard;
