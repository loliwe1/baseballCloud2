import React from 'react';
import PropTypes from 'prop-types';
import TopNav from './TopNav';
import { connect } from 'react-redux';
import {getNetwork, getLeaderBoard} from '../../store/routines/routines';
import { bindActionCreators } from 'redux';

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
        getNetwork();
    }
    
    getLeaderBoard = () => {
        const {getLeaderBoard} = this.props;
        getLeaderBoard()
    }

    render() {
      const {modalIsOpen} = this.state
      const {name} = this.props
      return (
        <TopNav
          getNetwork={this.getNetwork}
          getLeaderBoard={this.getLeaderBoard}
          openModal={this.openModal}
          modalIsOpen={modalIsOpen}
          name={name}
        />
        )
    }
}

TopNavContainer.propTypes = {
    network: PropTypes.objectOf(PropTypes.any).isRequired,
    profile: PropTypes.objectOf(PropTypes.any).isRequired,
    name: PropTypes.string,
    getNetwork: PropTypes.func.isRequired,
    getLeaderBoard: PropTypes.func.isRequired,
}

TopNavContainer.defaultProps = {
    name: null,
}

const mapStateToProps = (state) => ({
    network: state.network,
    profile: state.profile.profile,
    name: state.user.name,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getNetwork,
    getLeaderBoard,
},dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer) ;
