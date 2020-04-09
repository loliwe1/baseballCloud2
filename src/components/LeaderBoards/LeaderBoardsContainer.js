import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import PropTypes from 'prop-types';
import LeaderBoards from './LeaderBoards';
import {
  getLeaderBoard,
  getLeaderBoardPitch,
  filterLeaderBoardsBattingPromiseCreator as filterLeaderBoardsBatting,
  filterLeaderBoardsPitchingPromiseCreator as filterLeaderBoardsPitching,
} from '../../store/routines/routines';

class LeaderBoardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pitching: false,
      fetching: true,
      input: {
        type: 'exit_velocity',
      },
      title: 'Exit Velocity',
    };
  }

  componentDidMount = async () => {
    const { input } = this.state;
    await this.filter(input);

    this.setState({ fetching: false });
  }

  openPitch = async () => {
    const { pitching } = this.state;
    if (pitching) return;

    const { input } = this.state;
    input.type = 'pitch_velocity';
    await this.setState({
      pitching: true,
      input,
      title: 'Pitch Velocity',
    });

    this.filter(input);
  }

  openBatting = async () => {
    const { pitching } = this.state;
    if (!pitching) return;

    const { input } = this.state;
    input.type = 'exit_velocity';

    await this.setState({
      pitching: false,
      input,
      title: 'Exit Velocity',
    });

    this.filter(input);
  }

  filter = async (input) => {
    this.setState({ fetching: true });
    this.setState({ input });
    const {
      filterLeaderBoardsPitching,
      filterLeaderBoardsBatting,
    } = this.props;
    const { pitching } = this.state;

    try {
      if (pitching) {
        await filterLeaderBoardsPitching(input);
      } else {
        await filterLeaderBoardsBatting(input);
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ fetching: false });
    }
  }

  filterVelocity = async (v) => {
    const { input } = this.state;
    input.type = v.target.value;

    this.filter(input);
  }

  render() {
    const { leaderBoard } = this.props;
    const {
      pitching,
      fetching,
      input,
      title,
    } = this.state;
    return (
      <LeaderBoards
        leaderBoard={leaderBoard}
        openBatting={this.openBatting}
        openPitch={this.openPitch}
        pitching={pitching}
        fetching={fetching}
        filter={this.filter}
        input={input}
        filterVelocity={this.filterVelocity}
        title={title}
      />
    );
  }
}

LeaderBoardsContainer.propTypes = {
  leaderBoard: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  filterLeaderBoardsBatting: PropTypes.func.isRequired,
  filterLeaderBoardsPitching: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  leaderBoard: state.leaderBoard,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindPromiseCreators({
      filterLeaderBoardsBatting,
      filterLeaderBoardsPitching,
    }, dispatch),
    ...bindActionCreators({
      getLeaderBoard,
      getLeaderBoardPitch,
    }, dispatch),
  };
}

LeaderBoardsContainer.propTypes = {
  leaderBoard: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardsContainer);
