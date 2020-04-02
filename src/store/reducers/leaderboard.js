import {
    getLeaderBoard,
    getLeaderBoardPitch,
    filterLeaderBoardsBatting,
    filterLeaderBoardsPitching,
} from '../routines/routines';

const initialState = '';

const leaderBoard = (state=initialState, action) => {
    switch(action.type) {
        case getLeaderBoard.SUCCESS:
            return action.payload.data.data['leaderboard_batting']['leaderboard_batting'];
        case getLeaderBoard.FAILURE:
            return action.payload;
        case getLeaderBoardPitch.SUCCESS:
            return action.payload.data.data['leaderboard_pitching']['leaderboard_pitching'];
        case getLeaderBoardPitch.FAILURE:
            return action.payload;
        case filterLeaderBoardsBatting.SUCCESS:
            return action.payload.data.data['leaderboard_batting']['leaderboard_batting'];
        case filterLeaderBoardsPitching.SUCCESS: 
            return action.payload.data.data['leaderboard_pitching']['leaderboard_pitching'];
        default: return state;
    }
};

export default leaderBoard;