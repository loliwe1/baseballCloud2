import React from 'react';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import PropTypes from 'prop-types';
import {
  persisSignInPromiseCreator as persisSignIn,
  getSchoolsPromiseCreator as getSchools,
  getTeamsPromiseCreator as getTeams,
  getFacilitiesPromiseCreator as getFacilities,
  getProfilePromiseCreator as getProfile,
} from '../../store/routines/routines';
import Spinner from '../Spinner/Spinner';
import { requestSchool, requestTeams, requestFacilities } from '../../graphQl/profileSettings';
import {getProf} from '../../graphQl/graphql';

class AuthGuard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetching: true };
  }

  async componentDidMount() {
    const {
      persisSignIn,
      getSchools,
      getTeams,
      getFacilities,
      getProfile,
      profId,
    } = this.props;
    const schools = requestSchool();
    const tesms = requestTeams();
    const facilities = requestFacilities();
    const prof = getProf(profId);

    try {
      await persisSignIn();
      await getSchools(schools);
      await getTeams(tesms);
      await getFacilities(facilities);
      await getProfile(prof);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ fetching: false });
    }
  }

  render() {
    const { fetching } = this.state;
    const { children } = this.props;
    return (
      <>
        {fetching ?
          (
            <div style={{ height: '100vh' }}>
              <Spinner />
            </div>
          ) : children}
      </>
    );
  }
}

AuthGuard.propTypes = {
  children: PropTypes.element.isRequired,
  persisSignIn: PropTypes.func.isRequired,
  getSchools: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired,
  getFacilities: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  profId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  profId: state.user.profId,
});

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  persisSignIn,
  getSchools,
  getTeams,
  getFacilities,
  getProfile,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
