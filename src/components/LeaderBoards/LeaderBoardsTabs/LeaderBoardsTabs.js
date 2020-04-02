import React from 'react';
import '../../../css/style.css';

const LeaderBoardsTabs = ({openBatting, openPitch, activeTab, activeButton, button}) => {
    return (
        <div className="leaderboards__tabs">
            <button 
              className= {activeTab === 'Batting' ? activeButton : button }
              onClick={openBatting}
            >
              Batting
            </button>
            <button 
              className = {activeTab === 'Pitching' ? activeButton : button }
              onClick={openPitch}
            >
              Pitching
            </button>
        </div>
    );
};

export default LeaderBoardsTabs;
