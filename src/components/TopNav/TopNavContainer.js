import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopNav from './TopNav';
import { getNetwork, getLeaderBoard } from '../../store/routines/routines';


class TopNavContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal = () => {
    this.setState((prevState) => ({ modalIsOpen: !prevState.modalIsOpen }));
  }

  getNetwork = () => {
    const { getNetwork } = this.props;
    getNetwork();
  }

  getLeaderBoard = () => {
    const { getLeaderBoard } = this.props;
    getLeaderBoard();
  }

  render() {
    const { modalIsOpen } = this.state;
    const { name, user } = this.props;
    return (
      <TopNav
        getNetwork={this.getNetwork}
        getLeaderBoard={this.getLeaderBoard}
        openModal={this.openModal}
        modalIsOpen={modalIsOpen}
        name={name}
        user={user}
      />
    );
  }
}

TopNavContainer.propTypes = {
  name: PropTypes.string,
  getNetwork: PropTypes.func.isRequired,
  getLeaderBoard: PropTypes.func.isRequired,
  user: PropTypes.string,
};

TopNavContainer.defaultProps = {
  name: null,
  user: null,
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  user: state.user.profId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getNetwork,
  getLeaderBoard,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer);
