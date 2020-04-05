import React from 'react';
import Pitching from './Pitching';

class PitchingContainer extends React.Component{
    render() {
            const {pitchingSum} = this.props
        return(
            <Pitching pitchingSum={pitchingSum}/>
        )
    }
}

export default PitchingContainer;