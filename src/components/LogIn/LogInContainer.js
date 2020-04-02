import React from 'react';
import LogIn from './LogIn';
import { connect } from 'react-redux';
import {
    signInProfilePromiseCreator as signIn,
    getCurrentProfilePromiseCreator as getCurrentProfile
} from '../../store/routines/routines';
import {currentProfile} from '../../graphQl/graphql';
import { bindPromiseCreators } from 'redux-saga-routines';

class LogInContainer extends React.Component {

    signIn = async (v) => {
        const {signIn, getCurrentProfile} = this.props;

        try {
            await signIn(v);
            await getCurrentProfile(currentProfile);
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
},dispatch);

export default connect(null, mapDispatchToProps)(LogInContainer);