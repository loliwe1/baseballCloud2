import React from 'react';
import Player from './Player';
import {
    getProfile,
    getProfileEvent,
    getPitchingSummary,
    changeFavoritePromiseCreator as changeFavorite,
    getNetworkPromiseCreator as getNetwork,
} from '../../store/routines/routines';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getProf, getProfEvent, getPitchingSumm , favoriteProf, network} from '../../graphQl/graphql';
import { bindPromiseCreators } from 'redux-saga-routines';


class PlayerContainer extends React.Component {

    getProfile = () => {
        const {id, getProfile, getProfileEvent, getPitchingSummary} = this.props;
        const prof = getProf(id);
        const profEvent = getProfEvent(id);
        const pitchSumm = getPitchingSumm(id);
        getProfile(prof);
        getProfileEvent(profEvent);
        getPitchingSummary(pitchSumm);
    }

    changeFavorite = () => {
        const {id, favorite, changeFavorite, getNetwork, filter, input,} = this.props;
        const favProf = favoriteProf(id, !favorite);

        try{
            changeFavorite(favProf)
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
      }, dispatch)};
  }

export default connect(null, mapDispatchToProps)(PlayerContainer) ;