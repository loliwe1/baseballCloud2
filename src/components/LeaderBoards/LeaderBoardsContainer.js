import React from 'react';
import LeaderBoards from './LeaderBoards';
import { connect } from 'react-redux';
import {filtLeadBoardsBatt, filtLeadBoardsPitch} from '../../graphQl/graphql';
import {
    getLeaderBoard,
    getLeaderBoardPitch,
    filterLeaderBoardsBattingPromiseCreator as filterLeaderBoardsBatting,
    filterLeaderBoardsPitchingPromiseCreator as filterLeaderBoardsPitching
} from '../../store/routines/routines';
import { bindActionCreators } from 'redux';
import { bindPromiseCreators } from 'redux-saga-routines';

class LeaderBoardsContainer extends React.Component {
    state = {
        pitching: false,
        fetching: true,
        input: {
            type: 'exit_velocity'
        },
        title: 'Exit Velocity',
    }

    componentDidMount = async () => {
        const {input} = this.state;
        await this.filter(input);
        
        this.setState({fetching: false})
    }

    openPitch = async () => {
      if(this.state.pitching) return;

      const {input} = this.state;
      input.type = 'pitch_velocity';
      await this.setState({
        pitching: true,
        input,
        title: 'Pitch Velocity',
      });

      this.filter(input);
        
    }
    openBatting = async() => {
      if(! this.state.pitching) return;

      const {input} = this.state;
      input.type = 'exit_velocity';

      await this.setState({
          pitching: false, 
          input,
          title: 'Exit Velocity'
        });

      this.filter(input);

    }

    filter = async (input) => {
        this.setState({fetching:true})
        this.setState({input})

        let filterLeaderBoards;
        let leadBoard;

        if (this.state.pitching) {


          filterLeaderBoards = this.props.filterLeaderBoardsPitching;
          leadBoard = filtLeadBoardsPitch(input);

        } else {
            filterLeaderBoards = this.props.filterLeaderBoardsBatting;
            leadBoard = filtLeadBoardsBatt(input);
          }

        try {
            await filterLeaderBoards(leadBoard);
        }catch(e) {
            console.log(e);
        }
        finally {
            this.setState({fetching:false})
        }
    }

    filterVelocity = async (v) => {
        const {input} = this.state;
        console.log(this.props)
        input.type = v.target.value;

        this.filter(input);
    }

 

    render() {
        const {leaderBoard } = this.props;
        const {pitching, fetching, input, title} = this.state;
        console.log(title)
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

const mapStateToProps = (state) => ({
    leaderBoard: state.leaderBoard
});

function mapDispatchToProps(dispatch){
    return {
        ...bindPromiseCreators({
            filterLeaderBoardsBatting,
            filterLeaderBoardsPitching,
        },dispatch),
        ...bindActionCreators({
            getLeaderBoard,
            getLeaderBoardPitch,
        },dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardsContainer);
