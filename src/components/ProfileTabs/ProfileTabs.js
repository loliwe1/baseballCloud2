import React from 'react';
import '../../css/style.css';
import '../../css/modal.css'

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
}) => (
    <div className="profile-table__toggle-wrap">
      <button onClick={openPitching} className={activeTab === 'Pitching' ? activeButton : button}>
        Pitching
        <div className="profile-table__toggle-dropdown"></div>
      </button>

      <div
        onMouseEnter={showBattingList}
        onMouseLeave={hideBattingList}
        className={activeTab === 'Batting' ? activeButton : button}
        style={{position: 'relative'}}
        >
        Batting
        {battingListShowed &&
        <div className='modalWrap' style={{top: 20, left: -5}}>
          <button onClick={openBatting} className='modalWrap-link'>Summary</button>
          <button onClick={openBattingLog} className='modalWrap-link'>Log</button>
        </div>
      }
      </div>

      <button onClick={openComparison}  className={activeTab === 'Comparison' ? activeButton : button}>
        Comparison
      </button>
    </div>
);

export default ProfileTabs;
