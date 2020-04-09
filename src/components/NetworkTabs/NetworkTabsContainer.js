import React from 'react';
import PropTypes from 'prop-types';
import NetworkTabs from './NetworkTabs';

class NetworkTabsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'network__pagination-link',
      activeButton: 'network__pagination-link network__pagination-link--active',
      activeTab: 1,
      arrow: 'network__pagination-link',
      activeArrow: 'network__pagination-link network__pagination-link--disabled',
    };
  }


  getNetwork = () => {
    const { getNetwork, network } = this.props;
    this.setState({ activeTab: 1 });
    getNetwork(network);
  }

  getSecondNetwork = () => {
    const { getSecondNetwork } = this.props;
    this.setState({ activeTab: 2 });
    getSecondNetwork();
  }

  render() {
    const {
      button,
      activeButton,
      activeTab,
      arrow,
      activeArrow,
    } = this.state;
    return (
      <NetworkTabs
        getNetwork={this.getNetwork}
        getSecondNetwork={this.getSecondNetwork}
        button={button}
        activeButton={activeButton}
        activeTab={activeTab}
        arrow={arrow}
        activeArrow={activeArrow}
      />
    );
  }
}

NetworkTabsContainer.propTypes = {
  getNetwork: PropTypes.func.isRequired,
  getSecondNetwork: PropTypes.func.isRequired,
  network: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default NetworkTabsContainer;
