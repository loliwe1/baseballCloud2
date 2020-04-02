import React from 'react';
import LeaderBoardsTabs from './LeaderBoardsTabs';

class LeaderBoardsTabsContainer extends React.Component {
    state = {
      activeButton: "leaderboards__tab-btn leaderboards__tab-btn--active",
      button: 'leaderboards__tab-btn',
        activeTab: 'Batting',
    }

    openBatting = () => {
        const {openBatting} = this.props;
        this.setState({activeTab: 'Batting'});
        openBatting();
    }

    openPitch = () => {
        const {openPitch} = this.props;
        this.setState({activeTab: 'Pitching'});
        openPitch();
    }

    render() {
        console.log(this.state)
        const {activeTab, activeButton, button} = this.state;
        return (
            <LeaderBoardsTabs
              openBatting={this.openBatting}
              openPitch={this.openPitch}
              activeTab={activeTab}
              activeButton={activeButton}
              button={button}
            />
        );
    }
}

export default LeaderBoardsTabsContainer;
