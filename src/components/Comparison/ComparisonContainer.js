import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { bindPromiseCreators } from 'redux-saga-routines';
import {
  searchPlayerPromiseCreator as searchPlayer,
  getSecondProfilePromiseCreator as getSecondProfile,
} from '../../store/routines/routines';
import Comparison from './Comparison';


class ComparisonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersListOpened: false,
      // secondProfile: this.props.secondProfile,
      profileList: false,
      topValuesOpen: false,
      pitchVel: false,
      spinRate: false,
      fetching: false,
    };
  }

    componentDidMount(){
      this.setState({secondProfile: ''})
    }
    
    openTopValues = () => {
      this.setState({topValuesOpen: !this.state.topValuesOpen})
    }

    chooseProfile = async (v) => {
      const id = '' + v.target.value
      if(!id) return;
      const {getSecondProfile} = this.props;
        
      try {
        await getSecondProfile(id)
        this.setState({secondProfile: this.props.secondProfile})
      } catch (e) {
        console.log(e)
        }
    }

    searchPlayer= async(e) => {
      this.setState({profileList: true , fetching: true})
      const {profile, searchPlayer} = this.props;
      const {position} = profile;
      const player_name = e.target.value

      await searchPlayer({player_name, position})
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
      secondProfile,
    } = this.props;
    const {
      profileList,
      topValuesOpen,
      pitchVel,
      spinRate,
      fetching,
    } = this.state;
    const { top_values } = topValues || [];
    const { pitching_top_values } = secondProfile || [];

    return (
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
    );
  }
}

ComparisonContainer.propTypes = {
  age: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  feet: PropTypes.number.isRequired,
  inches: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  profileNames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  topValues: PropTypes.string,
};

ComparisonContainer.defaultProps = {
  topValues: ''
}


const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  topValues: state.profile.pitching_summary,
  profileNames: state.profileNames,
  secondProfile: state.secondProfile,
});

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  searchPlayer,
  getSecondProfile,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonContainer);
