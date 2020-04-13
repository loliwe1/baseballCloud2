import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProfileSideBarForm from './ProfileSideBarForm';
import { updateProfile } from '../../store/routines/routines';

class ProfileSideBarFormContainer extends React.Component {
  saveSettings = (v) => {
    let team;
    let school;
    let facil;
    const {
      closeForm,
      updateProfile,
      userId,
      settings,
    } = this.props;
    const { schools, teams, facilities } = settings;

    if (v.school) {
      school = schools.find((s) => s.id === v.school);
      v.school = school;
    }

    if (v.teams) {
      team = v.teams.map((id) => teams.find((t) => t.id === id));
      v.teams = team;
    }

    if (v.facilities) {
      facil = v.facilities.map((id) => facilities.find((t) => t.id === id));
      v.facilities = facil;
    }

    v.id = userId;

    updateProfile(v);
    closeForm();
  }

  render() {
    const {
      closeForm,
      settings,
      profile,
    } = this.props;
    const { schools, teams, facilities } = settings;
    return (
      <ProfileSideBarForm
        {...profile}
        saveSettings={this.saveSettings}
        closeForm={closeForm}
        schools={schools}
        teams={teams}
        facilities={facilities}
      />
    );
  }
}

ProfileSideBarFormContainer.propTypes = {
  closeForm: PropTypes.func.isRequired,
  schools: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  profile: PropTypes.objectOf(PropTypes.any).isRequired,
  teams: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  facilities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  age: PropTypes.number,
  weight: PropTypes.number,
  feet: PropTypes.number,
  inches: PropTypes.number,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  updateProfile: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

ProfileSideBarFormContainer.defaultProps = {
  first_name: null,
  last_name: null,
  schools: [],
  teams: [],
  facilities: [],
  age: null,
  weight: null,
  feet: null,
  inches: null,
};


const mapStateToProps = (state) => ({
  settings: state.settingProfile,
  userId: state.user.profId,
  profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updateProfile,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSideBarFormContainer);
