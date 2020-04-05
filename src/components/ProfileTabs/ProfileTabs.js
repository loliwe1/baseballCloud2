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
        style={{position: 'relative'}}
        >
        Pitching
        {pitchingListShowed &&
        <div className='modalWrap' style={{top: 20, left: -5}}>
          <button onClick={openPitching} className='modalWrap-link'>Summary</button>
          <button onClick={openPitchingLog} className='modalWrap-link'>Log</button>
        </div>
      }
      </div>

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
