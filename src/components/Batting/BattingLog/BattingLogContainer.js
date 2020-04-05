import React from 'react';
import BattingLog from './BattingLog';
import {battingLog} from '../../../graphQl/graphql';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import {getBattingLogPromiseCreator as getBattingLog} from '../../../store/routines/routines';


class BattingLogContainer extends React.Component {
    state= {
        input: {
            profile_id: this.props.profile.profile_id,
            count: 10, 
            offset: 0,

        },
        fetching: true,
    }

    componentDidMount(){
        this.setState({fetching:false})
    }

    filter = async (input) => {
        this.setState({fetching: true})
        this.setState({input})
        const {getBattingLog} = this.props;
        const log = battingLog(input);

        try {
            await getBattingLog(log);
        }catch(e) {
            console.log(e);
        }
        finally {
          this.setState({fetching: false})
        }
      }

    
    filterOffset = (offset) => {
      const {input} = this.state
      const {id} = this.props.profile;

      input.offset = offset;
      input.profile_id = id;

      this.filter(input)
    }

    filterName = (e) => {
        const {input} = this.state;
        const {id} = this.props.profile;

        input.profile_id = id;
        input.pitcher_name = e.target.value
        !e.target.value && delete input.pitcher_name

        this.setState({input})
        this.filter(input)
    }

    filterPitchType = (e) => {
        const {input} = this.state;
        const {id} = this.props.profile;

        input.profile_id = id;
        input.pitch_type = e.target.value

        this.setState({input})
        this.filter(input)
    }


    render() {
        const {battingLog, total} = this.props;
        const {count} = this.state.input;
        const {fetching} = this.state;
        return (
            <BattingLog
              battingLog={battingLog}
              total={total}
              count={count}
              getOffset={this.filterOffset}
              filterName={this.filterName}
              filterPitchType={this.filterPitchType}
              fetching={fetching}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    battingLog: state.battingLog.batting_log,
    total: state.battingLog.total_count,
    profile: state.profile.profile,
})

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
    getBattingLog,
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BattingLogContainer);