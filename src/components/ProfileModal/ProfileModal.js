import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getProfile, getProfileEvent, getPitchingSummary} from '../../store/routines/routines';
import {getProf, getProfEvent, getPitchingSumm} from '../../graphQl/graphql';

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
        const {id, getProfile, getProfileEvent, getPitchingSummary, openModal} = this.props;
        const idStr = '' + id;
        const prof = getProf(idStr);
        const profEvent = getProfEvent(idStr);
        const pitchSumm = getPitchingSumm(idStr);
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
            <Link onClick={this.getCurrentProfile} to="profile" className="main-nav__dropdown-link">My Profile</Link>
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
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal);