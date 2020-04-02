import React from 'react';
import ProfileTabs from './ProfileTabs';
import {battingSummary} from '../../graphQl/graphql';
import {getBattingSummaryPromiseCreator as getBattingSummary} from '../../store/routines/routines';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';

class ProfileTabsContainer extends React.Component {
    state = {
        activeButton: "profile-table__toggle  profile-table__toggle--active",
        button: 'profile-table__toggle',
          activeTab: 'Comparison',
        battingListShowed: false,
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
          await getBattingSummary(battingSum)
          openBatting();

        }catch(e) {
          console.log(e)
        }

      } 

      openBattingLog = async () => {
        const {openBattingLog} = this.props;
        openBattingLog()
      }

      showBattingList = () => {
        this.setState({battingListShowed: true})
      }

      hideBattingList = () => {
        this.setState({battingListShowed: false})
      }


    render() {
        const {activeTab, button, activeButton, battingListShowed} = this.state;
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
            />
        );
    }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
})

const mapDispatchToProps = dispatch => bindPromiseCreators({
  getBattingSummary,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTabsContainer);