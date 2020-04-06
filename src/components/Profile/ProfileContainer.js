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

    async componentDidMount() {
        const {getPitchingSummary, profile} = this.props;
        const {id} = profile.profile;
        const pitchSumm = getPitchingSumm(id);
        try{
            await getPitchingSummary(pitchSumm);
        }catch (e) {
            console.log(e)
        }  
    }
    
    openBatting = () => {
        this.setState({
            activeTab : 'Batting'
        })
    }


    openPitching = () => {
      this.setState({activeTab: 'Pitching'})

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
        const {profile, pitchSumm, profEvents} = this.props.profile;
        const {activeName, profId} = this.props;
        const {activeTab, openedForm} = this.state;
        return (
          <Profile
            {...profile}
            pitchingSum={pitchSumm}
            profEvents={profEvents}
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