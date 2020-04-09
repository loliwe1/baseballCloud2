import React from 'react';
import PropTypes from 'prop-types';
import LeaderBoardsFilters from './LeaderBoardsFilters';


class LeaderBoardsFiltersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        type: 'exit_velocity',
      },
    };
  }

  filterDate = async (v) => {
    const { input } = this.state;
    const { filter } = this.props;
    input.date = v.target.value;

    if (!input.date) {
      delete input.date;
    }

    filter(input);
  }

  filterPosition = async (v) => {
    const { input } = this.state;
    const { filter } = this.props;
    input.position = v.target.value;

    if (!input.position) {
      delete input.position;
    }

    filter(input);
  }

  filterFavorite = async (v) => {
    const { input } = this.state;
    const { filter } = this.props;
    input.favorite = +v.target.value;

    if (!input.favorite) {
      delete input.favorite;
    }

    filter(input);
  }


  filterAge = async (v) => {
    const { input } = this.state;
    const { filter } = this.props;
    input.age = +v.target.value;

    if (!input.age) {
      delete input.age;
    }

    filter(input);
  }

  filterSchool = async (v) => {
    const { input } = this.state;
    const { filter } = this.props;
    input.school = v.target.value;

    if (!input.school) {
      delete input.school;
    }

    filter(input);
  }

  filterTeam = async (v) => {
    const { input } = this.state;
    const { filter } = this.props;
    input.team = v.target.value;

    if (!input.team) {
      delete input.team;
    }

    filter(input);
  }

  render() {
    return (
      <LeaderBoardsFilters
        filterDate={this.filterDate}
        filterPosition={this.filterPosition}
        filterFavorite={this.filterFavorite}
        filterAge={this.filterAge}
        filterSchool={this.filterSchool}
        filterTeam={this.filterTeam}
      />
    );
  }
}

LeaderBoardsFiltersContainer.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default LeaderBoardsFiltersContainer;
