import React from 'react';
import TopNav from './TopNav';
import { connect } from 'react-redux';
import {getNetwork, getLeaderBoard} from '../../store/routines/routines';
import { bindActionCreators } from 'redux';
import {network, leaderBoard} from '../../graphQl/graphql';

class TopNavContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {modalIsOpen: false}
    }

    openModal = () => {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
    }

    getNetwork = () => {
        const {getNetwork} = this.props;
        getNetwork(network);
    }
    
    getLeaderBoard = () => {
        const {getLeaderBoard} = this.props;
        getLeaderBoard(leaderBoard)
    }

    render() {
      const {modalIsOpen} = this.state
      const {last_name, first_name} = this.props
      return (
        <TopNav
          getNetwork={this.getNetwork}
          getLeaderBoard={this.getLeaderBoard}
          openModal={this.openModal}
          modalIsOpen={modalIsOpen}
          firstName={first_name}
          lastName={last_name}
        />
        )
    }
}

const mapStateToProps = (state) => ({
    network: state.network,
    profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNetwork,
    getLeaderBoard,
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer) ;
