import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import LogIn from './LogIn';
import {
  signInProfilePromiseCreator as signIn,
  getCurrentProfilePromiseCreator as getCurrentProfile,
  getSchoolsPromiseCreator as getSchools,
  getTeamsPromiseCreator as getTeams,
  getFacilitiesPromiseCreator as getFacilities,
} from '../../store/routines/routines';

class LogInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
  }

  signIn = async (v) => {
    const {
      signIn,
      getCurrentProfile,
      getSchools,
      getTeams,
      getFacilities,
      history,
    } = this.props;

    try {
      await signIn(v);
      await getCurrentProfile();
      await getSchools();
      await getTeams();
      await getFacilities();
      history.push('/profile');
    } catch (e) {
      this.setState({ error: e.message });
      console.log(e);
    }
  }


  render() {
    const { error } = this.state;
    return (
      <LogIn signIn={this.signIn} error={error} />
    );
  }
}

LogInContainer.propTypes = {
  signIn: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getSchools: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired,
  getFacilities: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  signIn,
  getCurrentProfile,
  getSchools,
  getTeams,
  getFacilities,
}, dispatch);

export default connect(null, mapDispatchToProps)(LogInContainer);
