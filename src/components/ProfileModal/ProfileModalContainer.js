import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  getSchools,
  getTeams,
  getFacilities,
  logOut,
} from '../../store/routines/routines';
import ProfileModal from './ProfileModal';

class ProfileModalContainer extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  setRef = (element) => {
    this.node = element;
  };

  handleClick = (e) => {
    const { openModal } = this.props;
    if (!this.node.contains(e.target)) {
      openModal();
    }
  }

  getCurrentProfile = () => {
    const {
      id,
      getProfile,
      getProfileEvent,
      getPitchingSummary,
      openModal,
      getSchools,
      getTeams,
      getFacilities,
    } = this.props;
    const idStr = id.toString();
    getSchools();
    getTeams();
    getFacilities();
    getProfile(idStr);
    getProfileEvent(idStr);
    getPitchingSummary(idStr);
    openModal();
  }

  logOut = () => {
    const { logOut } = this.props;

    logOut();
  }

  render() {
    return (
      <ProfileModal
        setRef={this.setRef}
        getCurrentProfile={this.getCurrentProfile}
        logOut={this.logOut}
      />
    );
  }
}

ProfileModalContainer.propTypes = {
  getProfile: PropTypes.func.isRequired,
  getProfileEvent: PropTypes.func.isRequired,
  getPitchingSummary: PropTypes.func.isRequired,
  getSchools: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired,
  getFacilities: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  id: state.user.profId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  getSchools,
  getTeams,
  getFacilities,
  logOut,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProfileModalContainer);
