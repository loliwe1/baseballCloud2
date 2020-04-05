import React from 'react'
import Comparison from './Comparison'
import { connect } from 'react-redux'
import { bindPromiseCreators } from 'redux-saga-routines'
import {playerName} from '../../graphQl/graphql';
import {searchPlayerPromiseCreator  as searchPlayer} from '../../store/routines/routines';
import {getSecondProfilePromiseCreator as getSecondProfile} from '../../store/routines/routines';
import {getProf} from '../../graphQl/graphql';



class ComparisonContainer extends React.Component {
    state={
        playersListOpened: false,
        secondProfile: this.props.secondProfile,
        profileList: false,
        topValuesOpen: false,
        pitchVel: false,
        spinRate: false,
        fetching: false,
    }

    componentDidMount(){
        this.setState({secondProfile: ''})
    }
    
    openTopValues = () => {
        this.setState({topValuesOpen: !this.state.topValuesOpen})
    }

    chooseProfile= async (v) => {
        const id = '' + v.target.value
        if(!id) return;

        const prof = getProf(id)
        const {getSecondProfile} = this.props;
        
        try {
            await getSecondProfile(prof)
            this.setState({secondProfile: this.props.secondProfile})
        }catch(e) {
            console.log(e)
        }
    }

    searchPlayer= async(e) => {
      this.setState({profileList: true , fetching: true})
      const {profile, searchPlayer} = this.props;
      const {position} = profile;
      const player_name = e.target.value
      const profNames = playerName(player_name, position)

      await searchPlayer(profNames)
      this.setState({fetching: false})
    }

    showPitchVel = () => {
        this.setState({
          pitchVel: true,
          spinRate: false,
        })
      this.openTopValues()
    }

    showSpinRate = () => {
        this.setState({
            pitchVel: false,
            spinRate: true,
          })
      this.openTopValues()
    }

    render() {
        const {
          age,  
          first_name,
          last_name,
          feet,
          inches,
          weight,
          profileNames,
          topValues,
        } = this.props;
        const {
            profileList,
            secondProfile,
            topValuesOpen,
            pitchVel,
            spinRate,
            fetching
        } = this.state
        const {top_values} = topValues || []
        const {pitching_top_values} = secondProfile || []

        return(
            <Comparison
              searchPlayer={this.searchPlayer}
              profileNames={profileNames}
              chooseProfile={this.chooseProfile}
              age={age}
              first_name={first_name}
              last_name={last_name}
              feet={feet}
              inches={inches}
              weight={weight}
              secondProfile={secondProfile}
              profileList={profileList}
              openTopValues={this.openTopValues}
              topValuesOpen={topValuesOpen}
              pitchVel={pitchVel}
              spinRate={spinRate}
              topValues={top_values}
              showSpinRate={this.showSpinRate}
              showPitchVel={this.showPitchVel}
              secondProfTopValues={pitching_top_values}
              fetching={fetching}
            />
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profile.profile,
    topValues: state.profile.pitching_summary,
    profileNames: state.profileNames,
    secondProfile: state.secondProfile,
})

const mapDispatchToProps = dispatch => bindPromiseCreators({
    searchPlayer,
    getSecondProfile,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonContainer);