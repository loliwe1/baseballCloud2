import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import {
  getProfile,
  getProfileEvent,
  getPitchingSummary,
  changeFavoritePromiseCreator as changeFavorite,
  getLeaderBoardPromiseCreator as getLeaderBoard,
} from '../../store/routines/routines';
import {
  getProf,
  getProfEvent,
  getPitchingSumm,
  favoriteProf,
} from '../../graphQl/graphql';
import Leader from './Leader';

class LeaderContainer extends React.Component {
  getProfile = () => {
    const {
      id,
      getProfile,
      getProfileEvent,
      getPitchingSummary,
    } = this.props;
    const idStr = id.toString();
    const prof = getProf(idStr);
    const profEvent = getProfEvent(idStr);
    const pitchSumm = getPitchingSumm(idStr);
    getProfile(prof);
    getProfileEvent(profEvent);
    getPitchingSummary(pitchSumm);
  }

  changeFavorite = () => {
    const {
      id,
      favorite,
      changeFavorite,
      filter,
      input,
    } = this.props;
    const favProf = favoriteProf(id, !favorite);

    try {
      changeFavorite(favProf)
        .then(filter(input));
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Leader {...this.props} getProfile={this.getProfile} changeFavorite={this.changeFavorite} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindPromiseCreators({
      changeFavorite,
      getLeaderBoard,
    }, dispatch),
    ...bindActionCreators({
      getProfile,
      getProfileEvent,
      getPitchingSummary,
    }, dispatch),
  };
}

LeaderContainer.propTypes = {
  id: PropTypes.number.isRequired,
  getProfile: PropTypes.func.isRequired,
  getProfileEvent: PropTypes.func.isRequired,
  getPitchingSummary: PropTypes.func.isRequired,
  favorite: PropTypes.bool.isRequired,
  changeFavorite: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default connect(null, mapDispatchToProps)(LeaderContainer);
