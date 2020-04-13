import React from 'react';
import PropTypes from 'prop-types';
import LeaderBoardsTabs from './LeaderBoardsTabs';

class LeaderBoardsTabsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'Batting' };
  }

  openBatting = () => {
    const { openBatting } = this.props;
    this.setState({ activeTab: 'Batting' });
    openBatting();
  }

  openPitch = () => {
    const { openPitch } = this.props;
    this.setState({ activeTab: 'Pitching' });
    openPitch();
  }

  render() {
    const { activeTab, activeButton, button } = this.state;
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

LeaderBoardsTabsContainer.propTypes = {
  openPitch: PropTypes.func.isRequired,
  openBatting: PropTypes.func.isRequired,
};


export default LeaderBoardsTabsContainer;
