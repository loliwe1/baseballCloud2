import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getSchools,
    getTeams,
    getFacilities,
    getCurrentProfile,
    changeFavorite,
} from '../../store/routines/routines';
import {requestSchool, requestTeams, requestFacilities} from '../../graphQl/profileSettings';
import {favoriteProf} from '../../graphQl/graphql';
import { bindActionCreators } from 'redux';

class ProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Comparison',
        };
    }

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
},dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(ProfileContainer);