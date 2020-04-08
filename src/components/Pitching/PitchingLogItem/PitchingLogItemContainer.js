import React from 'react';
import PropTypes from 'prop-types';
import PitchingLogItem from './PitchingLogItem';

class PitchingLogItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }


  changeActive = () => {
    this.setState({active: !this.state.active})
  }

  render() {
    const { active } = this.state;
    const {
      date,
      pitchType,
      pitchCall,
      velocity,
      spinRate,
      spinAxis,
      tilt,
      releaseHeight,
      releaseSide,
      extension,
      verticalBreak,
      horizontalBreak,
      heightAtPlate,
      batterName,
      batterHandedness,
    } = this.props;
    return (
      <PitchingLogItem
        active={active}
        date={date}
        pitchType={pitchType}
        pitchCall={pitchCall}
        velocity={velocity}
        spinRate={spinRate}
        spinAxis={spinAxis}
        tilt={tilt}
        releaseHeight={releaseHeight}
        releaseSide={releaseSide}
        extension={extension}
        heightAtPlate={heightAtPlate}
        batterName={batterName}
        batterHandedness={batterHandedness}
        changeActive={this.changeActive}
        verticalBreak={verticalBreak}
        horizontalBreak={horizontalBreak}
      />
    );
  }
}

PitchingLogItemContainer.propTypes = {
  date: PropTypes.string.isRequired,
  pitchType: PropTypes.string.isRequired,
  pitchCall: PropTypes.string,
  velocity: PropTypes.number.isRequired,
  spinRate: PropTypes.number.isRequired,
  spinAxis: PropTypes.number,
  tilt: PropTypes.number.isRequired,
  releaseHeight: PropTypes.number.isRequired,
  releaseSide: PropTypes.number.isRequired,
  extension: PropTypes.string.isRequired,
  verticalBreak: PropTypes.number,
  horizontalBreak: PropTypes.number,
  heightAtPlate: PropTypes.number.isRequired,
  batterName: PropTypes.string.isRequired,
};

PitchingLogItemContainer.defaultProps = {
  pitchCall: '',
  spinAxis: null,
  verticalBreak: null,
  horizontalBreak: null,
}

export default PitchingLogItemContainer;
