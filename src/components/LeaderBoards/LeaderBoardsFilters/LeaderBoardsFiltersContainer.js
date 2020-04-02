import React from 'react'
import LeaderBoardsFilters from './LeaderBoardsFilters';


class LeaderBoardsFiltersContainer extends React.Component{
    state = {
        pitching: false,
        fetching: false,
        input: {
            type: 'exit_velocity'
        }
    }

    filterDate = async (v) => {
        const {input} = this.state;
        const {filter} = this.props;
        input.date = v.target.value;
        !input.date && delete input.date;

        filter(input);
    }

    filterPosition = async (v) => {
        const {input} = this.state;
        const {filter} = this.props;
        input.position = v.target.value;
        !input.position && delete input.position;

        filter(input);
    }

    filterFavorite = async (v) => {
        const {input} = this.state;
        const {filter} = this.props;
        input.favorite = + v.target.value;
        !input.favorite && delete input.favorite;

        filter(input);
    }


    filterAge = async (v) => {
        const {input} = this.state;
        const {filter} = this.props;
        input.age = + v.target.value;
        !input.age && delete input.age;

        filter(input);
    }

    filterSchool = async (v) => {
        const {input} = this.state;
        const {filter} = this.props;
        input.school = v.target.value;
        !input.school && delete input.school;

        filter(input);
    }

    filterTeam = async (v) => {
        const {input} = this.state;
        const {filter} = this.props;
        input.team = v.target.value;
        !input.team && delete input.team;

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
        )
    }
}

export default LeaderBoardsFiltersContainer;