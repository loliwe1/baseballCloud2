import React from 'react';
import PropTypes from 'prop-types';
import LeaderContainer from '../../Leader/LeaderContainer';
import NoInfo from '../../NoInfo/NoInfo';
import Spinner from '../../Spinner/Spinner';

const LeaderBoardsPitch = ({
  leaderBoard,
  fetching,
  filter,
  input,
}) => (
  <div className="leaderboards__table-content">
    <div className="leaderboards__table-header">
      <div className="leaderboards__table-col leaderboards__table-col--rank">
        Rank
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--batter">
        Pitcher Name
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--age">
        Age
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--school">
        School
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--teams">
        Teams
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--velocity">
        Pitch Type
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--angle">
        Velocity
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--distance">
        Spin Rate
      </div>
      <div className="leaderboards__table-col leaderboards__table-col--favorite">
        Favorite
      </div>
    </div>

    {fetching
      ? (
        <div style={{
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Spinner />
        </div>
      ) : (leaderBoard && leaderBoard.length === 0) ? (
        <NoInfo />
      ) : (
        <div className="leaderboards__table-items">
          { leaderBoard &&
            leaderBoard.map((leader, index) => (
              <LeaderContainer
                batter_name={leader.pitcher_name}
                age={leader.age}
                school={leader.school}
                teams={leader.teams}
                exit_velocity={leader.pitch_type}
                launch_angle={leader.velocity}
                distance={leader.spin_rate}
                favorite={leader.favorite}
                key={index}
                id={leader.pitcher_datraks_id}
                filter={filter}
                input={input}
                number={index + 1}
              />
            ))}
        </div>
      )}
  </div>
);

LeaderBoardsPitch.propTypes = {
  leaderBoard: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  fetching: PropTypes.bool.isRequired,
  filter: PropTypes.func.isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default LeaderBoardsPitch;
