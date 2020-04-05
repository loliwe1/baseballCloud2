import React from 'react';
import LogIn from './LogIn';
import { connect } from 'react-redux';
import {
    signInProfilePromiseCreator as signIn,
    getCurrentProfilePromiseCreator as getCurrentProfile,
    getSchoolsPromiseCreator as getSchools,
    getTeamsPromiseCreator as getTeams,
    getFacilitiesPromiseCreator as getFacilities,
} from '../../store/routines/routines';
import {currentProfile} from '../../graphQl/graphql';
import {requestSchool, requestTeams, requestFacilities} from '../../graphQl/profileSettings';
import { bindPromiseCreators } from 'redux-saga-routines';

class LogInContainer extends React.Component {

    signIn = async (v) => {
        const {signIn, getCurrentProfile, getSchools, getTeams, getFacilities} = this.props;
        const schools = requestSchool()
        const tesms = requestTeams()
        const facilities = requestFacilities()

        try {
            await signIn(v);
            await getCurrentProfile(currentProfile);
            await getSchools(schools)
            await getTeams(tesms)
            await getFacilities(facilities)
        }catch(e) {
            console.log(e);
        }
    }

    saveEmail = (v) => {
        console.log(v.target.value)
    }

    render() {
        return (
            <LogIn signIn={this.signIn} saveEmail={this.saveEmail}/>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
    signIn,
    getCurrentProfile,
    getSchools,
    getTeams,
    getFacilities,
},dispatch);

export default connect(null, mapDispatchToProps)(LogInContainer);