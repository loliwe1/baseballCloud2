import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getSchools,
    getTeams,
    getFacilities,
    getCurrentProfile,
    changeFavorite,
    getProfile,
    getProfileEvent,
    getPitchingSummary,
} from '../../store/routines/routines';
import {requestSchool, requestTeams, requestFacilities} from '../../graphQl/profileSettings';
import {getProf, getProfEvent, getPitchingSumm, favoriteProf} from '../../graphQl/graphql';
import { bindActionCreators } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Comparison',
        };
    }

    // componentDidMount() {
    //     const {profile, profId} = this.props
    //     const {id} = profile
    //     console.log(id)

    //     if(!id) {
    //         this.getProfile(profId)
    //     }else {
    //         return
    //     }
    // }

    // getProfile = async (id) => {
    //   const {getProfile, getProfileEvent, getPitchingSummary} = this.props;
    //   const prof = getProf(id);
    //   const profEvent = getProfEvent(id);
    //   const pitchSumm = getPitchingSumm(id);
    //   await getProfile(prof);
    //   await getProfileEvent(profEvent);
    //   await getPitchingSummary(pitchSumm);
    // }

    openBatting = () => {
        this.setState({
            activeTab : 'Batting'
        })
    }

    openPitching = () => {
        this.setState({
            activeTab: 'Pitching'
        })
    }

    openPitchingLog = () => {
        this.setState({
            activeTab: 'PitchingLog'
        })
    }

    openComparison = () => {
        this.setState({
            activeTab: 'Comparison'
        })
    }

    openBattingLog = () => {
        this.setState({
            activeTab: 'BattingLog'
        })
    }

    openForm = () => {
        const {getSchools, getTeams, getFacilities} = this.props
        const schools = requestSchool()
        const tesms = requestTeams()
        const facilities = requestFacilities()
        getSchools(schools)
        getTeams(tesms)
        getFacilities(facilities)
        this.setState({openedForm: true})
    }

    closeForm = () => {
        this.setState({openedForm: false})
    }

    changeFavorite = () => {
        const {changeFavorite} = this.props;
        const {id, favorite} = this.props.profile.profile;
        const favProf = favoriteProf(id, !favorite)
        changeFavorite(favProf)
    }


    render() {
        const {profile, pitching_summary, profile_events} = this.props.profile;
        const {activeName, profId} = this.props;
        const {activeTab, openedForm} = this.state;
        return (
          <Profile
            {...profile}
            pitchingSum={pitching_summary}
            profEvents={profile_events}
            openComparison={this.openComparison}
            openBatting={this.openBatting}
            openPitching={this.openPitching}
            openBattingLog={this.openBattingLog}
            openPitchingLog={this.openPitchingLog}
            openedForm={openedForm}
            openForm={this.openForm}
            closeForm={this.closeForm}
            profId={profId}
            activeName={activeName}
            changeFavorite={this.changeFavorite}
            activeTab={activeTab}
          />
        );
    }
}

const mapStateToPros = state => ({
    profile: state.profile,
    profId: state.user.profId,
    activeName: state.user.name
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getSchools,
    getTeams,
    getFacilities,
    getCurrentProfile,
    changeFavorite,
    getProfile,
    getProfileEvent,
    getPitchingSummary,

},dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ProfileContainer);