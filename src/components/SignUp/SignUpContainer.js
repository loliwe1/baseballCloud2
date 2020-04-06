import React from 'react';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import {
    signUpPromiseCreator as signUp,
    getCurrentProfilePromiseCreator as getCurrentProfile,
    getSchoolsPromiseCreator as getSchools,
    getTeamsPromiseCreator as getTeams,
    getFacilitiesPromiseCreator as getFacilities,
} from '../../store/routines/routines';
import {currentProfile} from '../../graphQl/graphql';
import {requestSchool, requestTeams, requestFacilities} from '../../graphQl/profileSettings';


class SignUpContainer extends React.Component {
    
    signUp = async (v) => {
      const {signUp, getCurrentProfile, getSchools, getTeams, getFacilities } = this.props;
      const role = 'player';
      const schools = requestSchool()
      const tesms = requestTeams()
      const facilities = requestFacilities()

      try {
        await signUp({...v, role})
        await getCurrentProfile(currentProfile);
        await getSchools(schools)
        await getTeams(tesms)
        await getFacilities(facilities)
      }catch(e) {
        console.log(e)
      }   
    }

    render() {
        return (
            <SignUp signUp={this.signUp}/>
            );
    }
}

const mapDispathToProps = (dispatch) => bindPromiseCreators({
    signUp,
    getCurrentProfile,
    getSchools,
    getTeams,
    getFacilities,
}, dispatch)

export default connect(null, mapDispathToProps)(SignUpContainer);