import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Profile from './Profile';
import {
  getSchools,
  getTeams,
  getFacilities,
  getCurrentProfile,
  changeFavorite,
  getProfile,
  getProfileEvent,
  getPitchingSummary,
} from '../../store/routines/routines';


class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Comparison',
      openedForm: false,
    };
  }

  async componentDidMount() {
    const { getPitchingSummary, profile } = this.props;
    const { id } = profile.profile;
    try {
      await getPitchingSummary(id);
    } catch (e) {
      console.log(e);
    }
  }

    openBatting = () => {
      this.setState({ activeTab: 'Batting' });
    }


    openPitching = () => {
      this.setState({ activeTab: 'Pitching' });
    }

    openPitchingLog = () => {
      this.setState({ activeTab: 'PitchingLog' });
    }

    openComparison = () => {
      this.setState({ activeTab: 'Comparison' });
    }

    openBattingLog = () => {
      this.setState({ activeTab: 'BattingLog' });
    }

    openForm = () => {
      const { getSchools, getTeams, getFacilities } = this.props;
      getSchools();
      getTeams();
      getFacilities();
      this.setState({ openedForm: true });
    }

    closeForm = () => {
      this.setState({ openedForm: false });
    }

    changeFavorite = () => {
      const { changeFavorite, profile } = this.props;
      const { id, favorite } = profile.profile;
      changeFavorite({ id, favorite });
    }


    render() {
      const { profile } = this.props;
      const { pitchSumm, profEvents } = profile;
      const { activeName, profId } = this.props;
      const { activeTab, openedForm } = this.state;
      return (
        <Profile
          {...profile.profile}
          pitchingSum={pitchSumm}
          profEvents={profEvents}
          openComparison={this.openComparison}
          openBatting={this.openBatting}
          openPitching={this.openPitching}
          openBattingLog={this.openBattingLog}
          openPitchingLog={this.openPitchingLog}
          openedForm={openedForm}
          openForm={this.openForm}
          closeForm={this.closeForm}
          profId={profId}
          activeName={activeName}
          changeFavorite={this.changeFavorite}
          activeTab={activeTab}
        />
      );
    }
}

ProfileContainer.propTypes = {
  profile: PropTypes.objectOf(PropTypes.any),
  profId: PropTypes.string.isRequired,
  activeName: PropTypes.string,
  changeFavorite: PropTypes.func.isRequired,
  getSchools: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired,
  getFacilities: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  getProfileEvent: PropTypes.func.isRequired,
  getPitchingSummary: PropTypes.func.isRequired,
};

ProfileContainer.defaultProps = {
  activeName: null,
  profile: {},
};

const mapStateToPros = (state) => ({
  profile: state.profile,
  profId: state.user.profId,
  activeName: state.user.name,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getSchools,
  getTeams,
  getFacilities,
  getCurrentProfile,
  changeFavorite,
  getProfile,
  getProfileEvent,
  getPitchingSummary,

}, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ProfileContainer);
