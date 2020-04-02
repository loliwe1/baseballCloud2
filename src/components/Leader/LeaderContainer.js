import React from 'react';
import { connect } from 'react-redux';
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
    leaderBoard,
} from '../../graphQl/graphql';
import Leader from './Leader';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';

class LeaderContainer extends React.Component {

    getProfile = () => {
        const {id, getProfile, getProfileEvent, getPitchingSummary} = this.props;
        console.log('prof', this.props);
        const idStr = id + '';
        const prof = getProf(idStr);
        const profEvent = getProfEvent(idStr);
        const pitchSumm = getPitchingSumm(idStr);
        getProfile(prof);
        getProfileEvent(profEvent);
        getPitchingSummary(pitchSumm);
    }

    changeFavorite = () => {
        const {id, favorite, changeFavorite, filter, input} = this.props;
        const favProf = favoriteProf(id, !favorite);

        try{
            changeFavorite(favProf)
              .then(filter(input));
        }catch(e){
            console.log(e);
        }
    }

    render() {
        return (
            <Leader {...this.props} getProfile={this.getProfile} changeFavorite={this.changeFavorite}/>
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
      }, dispatch)};
  }

export default connect(null, mapDispatchToProps)(LeaderContainer)