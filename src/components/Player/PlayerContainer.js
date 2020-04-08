import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import PropTypes from 'prop-types';
import Player from './Player';
import {
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  changeFavoritePromiseCreator as changeFavorite,
  getNetworkPromiseCreator as getNetwork,
} from '../../store/routines/routines';

class PlayerContainer extends React.Component {

  getProfile = () => {
    const {id, getProfile, getProfileEvent, getPitchingSummary} = this.props;
    getProfile(id);
    getProfileEvent(id);
    getPitchingSummary(id);
  }

  changeFavorite = () => {
    const {id, favorite, changeFavorite, getNetwork, filter, input,} = this.props;
    try{
        changeFavorite({id, favorite})
            .then(filter(input));
    }catch(e){
            console.log(e);
    }
  }

  render() {
    const {id, first_name, last_name, school, teams, age, favorite, events} = this.props;
    const session = events.length;
    return (
      <Player
        id={id}
        first_name={first_name}
        last_name={last_name}
        school={school}
        teams={teams}
        age={age}
        favorite={favorite}
        getProfile={this.getProfile}
        session={session}
        changeFavorite={this.changeFavorite}
      />
    );
  }
}

PlayerContainer.propTypes = {
  id: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  school: PropTypes.objectOf(PropTypes.any),
  teams: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  age: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
};

PlayerContainer.defaultProps = {
  school: {},
  teams: [],
};

function mapDispatchToProps(dispatch) {
  return {
    ...bindPromiseCreators({
      changeFavorite,
      getNetwork,
    }, dispatch),
    ...bindActionCreators({
      getProfile,
      getProfileEvent,
      getPitchingSummary,
    }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(PlayerContainer);
