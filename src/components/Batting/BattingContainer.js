import React from 'react'
import Batting from './Batting'
import {connect} from 'react-redux';




class BattingContainer extends React.Component {


    render() {
        const {top_values, average_values} = this.props.battingSumm;
        return (
            <Batting topValues={top_values} avgValues={average_values}/>
        )
    }
}

const mapStateToProps = state => ({
    battingSumm: state.battingSummary,
})

export default connect(mapStateToProps)(BattingContainer);