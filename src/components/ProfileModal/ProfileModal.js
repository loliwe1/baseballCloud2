import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  getSchools,
  getTeams,
  getFacilities,
} from '../../store/routines/routines';
import {getProf, getProfEvent, getPitchingSumm} from '../../graphQl/graphql';
import {requestSchool, requestTeams, requestFacilities} from '../../graphQl/profileSettings';

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
        const prof = getProf(idStr);
        const profEvent = getProfEvent(idStr);
        const pitchSumm = getPitchingSumm(idStr);
        const schools = requestSchool()
        const tesms = requestTeams()
        const facilities = requestFacilities()

        getSchools(schools)
        getTeams(tesms)
        getFacilities(facilities)
        getProfile(prof);
        getProfileEvent(profEvent);
        getPitchingSummary(pitchSumm);

        openModal();
    }

    logOut = () => {
      localStorage.clear();
      const {openModal} = this.props;
      openModal();
    }

    render() {
        return (
          <div ref={this.setRef} className="main-nav__dropdown">
            <Link onClick={this.getCurrentProfile} to="/" className="main-nav__dropdown-link">My Profile</Link>
            <Link onClick={this.logOut} to="/logIn" className="main-nav__dropdown-link">Log Out</Link>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  id: state.user.profId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  getSchools,
  getTeams,
  getFacilities,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);