import React from 'react';
import PitchingLogItem from './PitchingLogItem';

class PitchingLogItemContainer extends React.Component {
    state={active: false}

    changeActive= () => {
        this.setState({active: !this.state.active})
    }

    render() {
        const {active} = this.state;
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
              verticalBreak={verticalBreak}
              horizontalBreak={horizontalBreak}
              heightAtPlate={heightAtPlate}
              batterName={batterName}
              batterHandedness={batterHandedness}
              changeActive={this.changeActive}
            />
        )
    }
}

export default PitchingLogItemContainer;