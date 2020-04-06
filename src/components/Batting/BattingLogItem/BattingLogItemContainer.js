import React from 'react';
import PropTypes from 'prop-types';
import BattingLogItem from './BattingLogItem';

class BattingLogItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={active: false}
    }

    changeActive = () => {
        this.setState({active: !this.state.active})
    }

    render() {
        const {active} = this.state;
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
            pitcherDatraksId,
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
              hangTime = {hangTime}
              pitcherDatraksId={pitcherDatraksId}
            />
        )
    }
}

BattingLogItemContainer.propTypes = {
    active: PropTypes.bool.isRequired,
    changeActive: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired,
    pitcherName: PropTypes.string.isRequired,
    pitcherHandedness: PropTypes.string.isRequired,
    pitchType: PropTypes.string.isRequired,
    pitchCall: PropTypes.string.isRequired,
    exitVelocity: PropTypes.number.isRequired,
    launchAngle: PropTypes.number.isRequired,
    direction: PropTypes.string.isRequired,
    distance: PropTypes.number.isRequired,
    hitSpinRate: PropTypes.number.isRequired,
    hangTime: PropTypes.number.isRequired,
  };

export default BattingLogItemContainer;