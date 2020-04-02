import React from 'react';
import ProfileSideBarForm from './ProfileSideBarForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateProfile} from '../../store/routines/routines';
import {updateProf} from '../../graphQl/profileSettings';
import { FORM_ERROR } from 'final-form'


class ProfileSideBarFormContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {formOpen: false}
    }

    saveSettings = (v) => {
        console.log('v',v)

        if(!v.first_name){
            return { [FORM_ERROR]: 'lol' }
        } 

        let team;
        let school;
        let facil;
        const {schools, teams, facilities} = this.props.settings;
        const {closeForm, updateProfile, userId} = this.props
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
        const values = updateProf(v);
        updateProfile(values);
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
        } = this.props.profile;
        const {closeForm} = this.props
        const {schools, teams, facilities} = this.props.settings;
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
        )
    }
}

const mapStateToProps = (state) => ({
    settings: state.settingProfile,
    userId: state.user.profId,
    profile: state.profile.profile,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateProfile
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSideBarFormContainer)