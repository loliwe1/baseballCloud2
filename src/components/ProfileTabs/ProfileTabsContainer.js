import React from 'react';
import ProfileTabs from './ProfileTabs';
import {battingSummary, battingLog, pitchingLog} from '../../graphQl/graphql';
import {
  getBattingSummaryPromiseCreator as getBattingSummary, 
  getBattingLogPromiseCreator as getBattingLog,
  getPitchingLogPromiseCreator as getPitchingLog,
} from '../../store/routines/routines';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';

class ProfileTabsContainer extends React.Component {
    state = {
        activeButton: "profile-table__toggle  profile-table__toggle--active",
        button: 'profile-table__toggle',
          activeTab: 'Comparison',
        battingListShowed: false,
        pitchingListShowed: false,
      } 
      
    
      openPitching = () => {
        const {openPitching} = this.props;
        this.setState({activeTab: 'Pitching'});

        openPitching();
      }  

      openComparison = () => {
        const {openComparison} = this.props;
        this.setState({activeTab: 'Comparison'});

        openComparison();
      } 

      openBatting = async () => {
        const {openBatting, getBattingSummary, profile} = this.props;
        const {id} = profile
        const battingSum = battingSummary(id);
        this.setState({activeTab: 'Batting'});

        try{
          openBatting();
          await getBattingSummary(battingSum)
        }catch(e) {
          console.log(e)
        }

      } 

      openBattingLog = async () => {
        const {openBattingLog, getBattingLog, profile} = this.props;
        const {id} = profile;
        const log = battingLog({profile_id:id, count: 10, offset:0})
        this.setState({activeTab: 'Batting'});

        try {
          await getBattingLog(log);
          openBattingLog();
        }catch(e) {
          console.log(e)
        }
      }


      openPitchingLog = async () => {
        const {openPitchingLog, getPitchingLog, profile} = this.props;
        const {id} = profile;
        const log = pitchingLog({profile_id:id, count: 10, offset:0})
        this.setState({activeTab: 'Pitching'});

        try {
          await getPitchingLog(log);
          openPitchingLog();
        }catch(e) {
          console.log(e)
        }
      }

      showBattingList = () => {
        this.setState({battingListShowed: true})
      }

      hideBattingList = () => {
        this.setState({battingListShowed: false})
      }

      showPitchingList = () => {
        this.setState({pitchingListShowed: true})
      }

      hidePitchingList = () => {
        this.setState({pitchingListShowed: false})
      }

    render() {
        const {activeTab, button, activeButton, battingListShowed, pitchingListShowed} = this.state;
        return (
            <ProfileTabs 
              openPitching={this.openPitching}
              openBatting={this.openBatting}
              openComparison={this.openComparison}
              activeTab={activeTab}
              button={button}
              activeButton={activeButton}
              showBattingList={this.showBattingList}
              battingListShowed={battingListShowed}
              hideBattingList={this.hideBattingList}
              openBattingLog={this.openBattingLog}
              showPitchingList={this.showPitchingList}
              hidePitchingList={this.hidePitchingList}
              pitchingListShowed={pitchingListShowed}
              openPitchingLog={this.openPitchingLog}
            />
        );
    }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
})

const mapDispatchToProps = dispatch => bindPromiseCreators({
  getBattingSummary,
  getBattingLog,
  getPitchingLog,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTabsContainer);