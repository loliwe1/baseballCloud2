import React from 'react';
import PropTypes from 'prop-types';
import BattingLogItem from './BattingLogItem';

class BattingLogItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

    changeActive = () => {
      this.setState((prevState) => ({ active: !prevState.active }));
    }

    render() {
      const { active } = this.state;
      const {
        date,
        pitcherName,
        pitcherHandedness,
        pitchType,
        pitchCall,
        exitVelocity,
        launchAngle,
        direction,
        distance,
        hitSpinRate,
        hangTime,
      } = this.props;
      return (
        <BattingLogItem
          active={active}
          changeActive={this.changeActive}
          date={date}
          pitcherName={pitcherName}
          pitcherHandedness={pitcherHandedness}
          pitchType={pitchType}
          pitchCall={pitchCall}
          exitVelocity={exitVelocity}
          launchAngle={launchAngle}
          direction={direction}
          distance={distance}
          hitSpinRate={hitSpinRate}
          hangTime={hangTime}
        />
      );
    }
}

BattingLogItemContainer.propTypes = {
  date: PropTypes.string.isRequired,
  pitcherName: PropTypes.string.isRequired,
  pitcherHandedness: PropTypes.string.isRequired,
  pitchType: PropTypes.string,
  pitchCall: PropTypes.string,
  exitVelocity: PropTypes.number,
  launchAngle: PropTypes.number,
  direction: PropTypes.number,
  distance: PropTypes.string,
  hitSpinRate: PropTypes.number,
  hangTime: PropTypes.string,
};

BattingLogItemContainer.defaultProps = {
  exitVelocity: null,
  launchAngle: null,
  direction: null,
  distance: '',
  hitSpinRate: null,
  hangTime: '',
  pitchType: '',
  pitchCall: null,
};

export default BattingLogItemContainer;
