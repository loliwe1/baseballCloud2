import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import '../../css/style.css';
import {
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  getSchools,
  getTeams,
  getFacilities,
  logOut,
} from '../../store/routines/routines';

class ProfileModal extends React.Component {
  setRef = (element) => {
    this.node = element;
  };

  componentDidMount(){
    document.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  handleClick = (e) => {
    const {openModal} = this.props;
    if(! this.node.contains(e.target)) {
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
    const idStr = '' + id;
    getSchools()
    getTeams()
    getFacilities()
    getProfile(idStr);
    getProfileEvent(idStr);
    getPitchingSummary(idStr);
    openModal();
  }

  logOut = () => {
    localStorage.clear();
    const {openModal, logOut} = this.props;
    openModal();
    logOut();
  }

  render() {
    return (
      <div ref={this.setRef} className="main-nav__dropdown">
        <Link onClick={this.getCurrentProfile} to="/profile" className="main-nav__dropdown-link">My Profile</Link>
        <Link onClick={this.logOut} to="/logIn" className="main-nav__dropdown-link">Log Out</Link>
      </div>
    );
  }
}

ProfileModal.propTypes = {
  getProfile: PropTypes.func.isRequired,
  getProfileEvent: PropTypes.func.isRequired,
  getPitchingSummary: PropTypes.func.isRequired,
  getSchools: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired,
  getFacilities: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);
