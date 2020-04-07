import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';
import '../../css/modal.css';

const ProfileTabs = ({
  openPitching,
  openBatting,
  openComparison,
  activeTab,
  button,
  activeButton,
  showBattingList,
  battingListShowed,
  hideBattingList,
  openBattingLog,
  showPitchingList,
  hidePitchingList,
  pitchingListShowed,
  openPitchingLog,
}) => (
  <div className="profile-table__toggle-wrap">
    <div
      onMouseEnter={showPitchingList}
      onMouseLeave={hidePitchingList}
      className={activeTab === 'Pitching' ? activeButton : button}
      style={{ position: 'relative' }}
    >
      Pitching
      {pitchingListShowed &&
      (
        <div className="modalWrap" style={{ top: 20, left: -5 }}>
          <button type="button" onClick={openPitching} className="modalWrap-link">Summary</button>
          <button type="button" onClick={openPitchingLog} className="modalWrap-link">Log</button>
        </div>
      )}
    </div>
    <div
      onMouseEnter={showBattingList}
      onMouseLeave={hideBattingList}
      className={activeTab === 'Batting' ? activeButton : button}
      style={{ position: 'relative' }}
    >
      Batting
      {battingListShowed &&

      (
      <div className="modalWrap" style={{ top: 20, left: -5 }}>
        <button type="button" onClick={openBatting} className="modalWrap-link">Summary</button>
        <button type="button" onClick={openBattingLog} className="modalWrap-link">Log</button>
      </div>
      )}
    </div>

    <button type="button" onClick={openComparison} className={activeTab === 'Comparison' ? activeButton : button}>
      Comparison
    </button>
  </div>
);

ProfileTabs.propTypes = {
  openPitching: PropTypes.func.isRequired,
  openBatting: PropTypes.func.isRequired,
  openComparison: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  activeButton: PropTypes.string.isRequired,
  showBattingList: PropTypes.func.isRequired,
  battingListShowed: PropTypes.bool.isRequired,
  hideBattingList: PropTypes.func.isRequired,
  openBattingLog: PropTypes.func.isRequired,
  showPitchingList: PropTypes.func.isRequired,
  hidePitchingList: PropTypes.func.isRequired,
  pitchingListShowed: PropTypes.bool.isRequired,
  openPitchingLog: PropTypes.func.isRequired,
};

export default ProfileTabs;
