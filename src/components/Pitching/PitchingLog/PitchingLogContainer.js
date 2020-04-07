import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import PitchingLog from './PitchingLog';
import { getPitchingLogPromiseCreator as getPitchingLog } from '../../../store/routines/routines';


class PitchingLogContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        profile_id: this.props.profile.profile_id,
        count: 10,
        offset: 0,
      },
      fetching: true,
    };
  }
   

  componentDidMount(){
    this.setState({fetching:false})
  }

  filter = async (input) => {
    this.setState({fetching: true})
    this.setState({input})
    const {getPitchingLog} = this.props;

    try {
      await getPitchingLog(input);
    } catch (e) {
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
    input.batter_name = e.target.value
    !e.target.value && delete input.batter_name

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
    const { pitchingLog, total } = this.props;
    const { count } = this.state.input;
    const { fetching } = this.state;
    return (
      <PitchingLog
        pitchingLog={pitchingLog}
        total={total}
        count={count}
        getOffset={this.filterOffset}
        filterName={this.filterName}
        filterPitchType={this.filterPitchType}
        fetching={fetching}
      />
    );
  }
}

PitchingLogContainer.propTypes = {
    profile: PropTypes.objectOf(PropTypes.any).isRequired,
    total: PropTypes.number.isRequired,
    pitchingLog: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
    getPitchingLog: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  pitchingLog: state.pitchingLog.pitching_log,
  total: state.pitchingLog.total_count,
  profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  getPitchingLog,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PitchingLogContainer);
