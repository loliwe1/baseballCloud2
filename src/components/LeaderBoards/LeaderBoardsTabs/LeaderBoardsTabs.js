import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/style.css';

const LeaderBoardsTabs = ({ openBatting, openPitch, activeTab }) => (
  <div className="leaderboards__tabs">
    <button
      type="button"
      className={`leaderboards__tab-btn ${activeTab === 'Batting' && 'leaderboards__tab-btn--active'}`}
      onClick={openBatting}
    >
      Batting
    </button>
    <button
      type="button"
      className={`leaderboards__tab-btn ${activeTab === 'Pitching' && 'leaderboards__tab-btn--active'}`}
      onClick={openPitch}
    >
      Pitching
    </button>
  </div>
);

LeaderBoardsTabs.propTypes = {
  openBatting: PropTypes.func.isRequired,
  openPitch: PropTypes.func.isRequired,
  activeTab: PropTypes.func.isRequired,
};

export default LeaderBoardsTabs;
