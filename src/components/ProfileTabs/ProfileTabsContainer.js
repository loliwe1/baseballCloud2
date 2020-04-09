import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import ProfileTabs from './ProfileTabs';
import {
  getBattingSummaryPromiseCreator as getBattingSummary,
  getBattingLogPromiseCreator as getBattingLog,
  getPitchingLogPromiseCreator as getPitchingLog,
} from '../../store/routines/routines';


class ProfileTabsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'profile-table__toggle  profile-table__toggle--active',
      button: 'profile-table__toggle',
      activeTab: 'Comparison',
      battingListShowed: false,
      pitchingListShowed: false,
    };
  }

  openPitching = () => {
    const { openPitching } = this.props;
    this.setState({ activeTab: 'Pitching' });

    openPitching();
  }

  openComparison = () => {
    const { openComparison } = this.props;
    this.setState({ activeTab: 'Comparison' });

    openComparison();
  }

  openBatting = async () => {
    const { openBatting, getBattingSummary, profile } = this.props;
    const { id } = profile;
    this.setState({ activeTab: 'Batting' });

    try {
      openBatting();
      await getBattingSummary(id);
    } catch (e) {
      console.log(e);
    }
  }

  openBattingLog = async () => {
    const { openBattingLog, getBattingLog, profile } = this.props;
    const { id } = profile;
    this.setState({ activeTab: 'Batting' });
    const input = { profile_id: id, count: 10, offset: 0 };
    try {
      await getBattingLog(input);
      openBattingLog();
    } catch (e) {
      console.log(e);
    }
  }


  openPitchingLog = async () => {
    const { openPitchingLog, getPitchingLog, profile } = this.props;
    const { id } = profile;
    const input = { profile_id: id, count: 10, offset: 0 };
    this.setState({ activeTab: 'Pitching' });

    try {
      await getPitchingLog(input);
      openPitchingLog();
    } catch (e) {
      console.log(e);
    }
  }

  showBattingList = () => {
    this.setState({ battingListShowed: true });
  }

  hideBattingList = () => {
    this.setState({ battingListShowed: false });
  }

  showPitchingList = () => {
    this.setState({ pitchingListShowed: true });
  }

  hidePitchingList = () => {
    this.setState({ pitchingListShowed: false });
  }

  render() {
    const {
      activeTab, button, activeButton, battingListShowed, pitchingListShowed,
    } = this.state;
    return (
      <ProfileTabs
        openPitching={this.openPitching}
        openBatting={this.openBatting}
        openComparison={this.openComparison}
        activeTab={activeTab}
        button={button}
        activeButton={activeButton}
        showBattingList={this.showBattingList}
        battingListShowed={battingListShowed}
        hideBattingList={this.hideBattingList}
        openBattingLog={this.openBattingLog}
        showPitchingList={this.showPitchingList}
        hidePitchingList={this.hidePitchingList}
        pitchingListShowed={pitchingListShowed}
        openPitchingLog={this.openPitchingLog}
      />
    );
  }
}

ProfileTabsContainer.propTypes = {
  getBattingSummary: PropTypes.func.isRequired,
  getBattingLog: PropTypes.func.isRequired,
  getPitchingLog: PropTypes.func.isRequired,
  profile: PropTypes.objectOf(PropTypes.any).isRequired,
  openBattingLog: PropTypes.func.isRequired,
  openPitchingLog: PropTypes.func.isRequired,
  openBatting: PropTypes.func.isRequired,
  openPitching: PropTypes.func.isRequired,
  openComparison: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  getBattingSummary,
  getBattingLog,
  getPitchingLog,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTabsContainer);
