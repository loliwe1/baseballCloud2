import React from 'react';
import NetworkFiltersForm from './NetworkFiltersForm';

class NetworkFiltersFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      input:{
        profiles_count: 10,
        offset: 0,
      },
    };
  }

  filterNetworkAge = async (v) => {
    const {filter} = this.props
    const {input} = this.state;
    input.age = + v.target.value;
    !input.age && delete input.age;
        
    filter(input);
  }

  filterNetworkSchool = async (v) => {
    const {filter} = this.props
    const {input} = this.state;
    input.school = v.target.value;
    !input.school && delete input.school;
    
    filter(input);
  }

  filterNetworkTeam = async (v) => {
    const {filter} = this.props
    const {input} = this.state;
    input.team = v.target.value;
    !input.team && delete input.team;

    filter(input);
  }

  filterNetworkPosition = async (v) => {
    const {filter} = this.props
    const {input} = this.state;
    input.position = v.target.value;
    !input.position && delete input.position;
        
    filter(input);
  }

  filterNetworkFavorite = async (v) => {
    const {filter} = this.props
    const {input} = this.state;
    input.favorite = + v.target.value;
    !input.favorite && delete input.favorite;
        
    filter(input);
  }
    
  filterNetworkCount = async (v) => {
    const {filter} = this.props
    const {input} = this.state;
    input.profiles_count = + v.target.value;
    !input.profiles_count && delete input.profiles_count;
        
    filter(input);
  }

  render() {
    return (
      <NetworkFiltersForm
        filterNetworkSchool={this.filterNetworkSchool}
        filterNetworkTeam={this.filterNetworkTeam}
        filterNetworkPosition={this.filterNetworkPosition}
        filterNetworkAge={this.filterNetworkAge}
        filterNetworkFavorite={this.filterNetworkFavorite}
        filterNetworkCount={this.filterNetworkCount}
        networkCount={this.networkCount}
      />
    );
  }
}


export default NetworkFiltersFormContainer;
