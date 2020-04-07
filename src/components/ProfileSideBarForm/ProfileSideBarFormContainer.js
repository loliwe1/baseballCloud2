import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FORM_ERROR } from 'final-form'
import ProfileSideBarForm from './ProfileSideBarForm';
import { updateProfile } from '../../store/routines/routines';

class ProfileSideBarFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formOpen: false };
  }

  saveSettings = (v) => {
    let team;
    let school;
    let facil;
    const {schools, teams, facilities} = this.props.settings;
    const {closeForm, updateProfile, userId} = this.props;

    if(v.school) {
      school = schools.find((s)=> s.id ===  v.school)
      v.school = school
    }

    if(v.teams) {
      team = v.teams.map(id => teams.find(t => t.id === id))
      v.teams = team
    }

    if(v.facilities) {
      facil = v.facilities.map(id => facilities.find(t => t.id === id))
      v.facilities = facil
    }

    v.id = userId;
    v.age = Number(v.age);
    v.feet = Number(v.feet);
    v.inches = Number(v.inches);
    v.weight = Number(v.weight);
    updateProfile(v);
    closeForm();
  }

  render() {
    const {
      first_name,
      last_name,
      position,
      position2,
      age,
      weight,
      throws_hand,
      bats_hand,
      feet,
      inches,
      school,
      closeForm,
      settings,
    } = this.props;
    const { schools, teams, facilities } = settings;
    return (
      <ProfileSideBarForm
        saveSettings={this.saveSettings}
        closeForm={closeForm}
        schools={schools}
        teams={teams}
        facilities={facilities}
        first_name={first_name}
        last_name={last_name}
        position={position}
        position2={position2}
        age={age}
        weight={weight}
        throws_hand={throws_hand}
        bats_hand={bats_hand}
        feet={feet}
        inches={inches}
        school={school}
      />
    );
  }
}

ProfileSideBarFormContainer.propTypes = {
  closeForm: PropTypes.func.isRequired,
  schools: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  teams: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  facilities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  feet: PropTypes.number.isRequired,
  inches: PropTypes.number.isRequired,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
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
