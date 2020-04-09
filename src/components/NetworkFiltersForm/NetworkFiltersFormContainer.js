import React from 'react';
import PropTypes from 'prop-types';
import NetworkFiltersForm from './NetworkFiltersForm';

class NetworkFiltersFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        profiles_count: 10,
        offset: 0,
      },
    };
  }

  filterNetworkAge = async (v) => {
    const { filter } = this.props;
    const { input } = this.state;
    input.age = +v.target.value;

    if (!input.age) {
      delete input.age;
    }

    filter(input);
  }

  filterNetworkSchool = async (v) => {
    const { filter } = this.props;
    const { input } = this.state;
    input.school = v.target.value;

    if (!input.school) {
      delete input.school;
    }

    filter(input);
  }

  filterNetworkTeam = async (v) => {
    const { filter } = this.props;
    const { input } = this.state;
    input.team = v.target.value;

    if (!input.team) {
      delete input.team;
    }

    filter(input);
  }

  filterNetworkPosition = async (v) => {
    const { filter } = this.props;
    const { input } = this.state;
    input.position = v.target.value;

    if (!input.position) {
      delete input.position;
    }

    filter(input);
  }

  filterNetworkFavorite = async (v) => {
    const { filter } = this.props;
    const { input } = this.state;
    input.favorite = +v.target.value;

    if (!input.favorite) {
      delete input.favorite;
    }

    filter(input);
  }

  filterNetworkCount = async (v) => {
    const { filter } = this.props;
    const { input } = this.state;
    input.profiles_count = +v.target.value;

    if (!input.profiles_count) {
      delete input.profiles_count;
    }

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

NetworkFiltersFormContainer.propTypes = {
  filter: PropTypes.func.isRequired,
};


export default NetworkFiltersFormContainer;
