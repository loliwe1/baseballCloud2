import React from 'react';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import { 
    persisSignInPromiseCreator as persisSignIn,
    getSchoolsPromiseCreator as getSchools,
    getTeamsPromiseCreator as getTeams,
    getFacilitiesPromiseCreator as getFacilities,
} from  '../../store/routines/routines';
import Spinner from '../Spinner/Spinner';
import {requestSchool, requestTeams, requestFacilities} from '../../graphQl/profileSettings';

class AuthGuard extends React.Component {
    state = {fetching: true}

    async componentDidMount() {
        const { persisSignIn, getSchools, getTeams, getFacilities } = this.props;
        const schools = requestSchool()
        const tesms = requestTeams()
        const facilities = requestFacilities()

        try {
            await persisSignIn();
            await getSchools(schools)
            await getTeams(tesms)
            await getFacilities(facilities)
        }catch(e) {
            console.log(e);
        } finally {
            this.setState({ fetching: false });
        }
    }

    render() {
        const {fetching} = this.state;
        const {children} = this.props;
        return (
            <React.Fragment>
                {fetching ? <div style={{height: '100vh'}}><Spinner/> </div> : children}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
    persisSignIn,
    getSchools,
    getTeams,
    getFacilities,

}, dispatch);

export default connect(null, mapDispatchToProps)(AuthGuard);