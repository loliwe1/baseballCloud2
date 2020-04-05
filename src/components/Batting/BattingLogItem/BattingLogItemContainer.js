import React from 'react'
import BattingLogItem from './BattingLogItem'

class BattingLogItemContainer extends React.Component {
    state={active: false}

    changeActive= () => {
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

export default BattingLogItemContainer;