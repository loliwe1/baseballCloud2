import React from 'react';
import NetworkTabs from './NetworkTabs';

class NetworkTabsContainer extends React.Component {

    state = {
        button: 'network__pagination-link',
        activeButton: 'network__pagination-link network__pagination-link--active',
        activeTab: 1,
        arrow: 'network__pagination-link',
        activeArrow: 'network__pagination-link network__pagination-link--disabled',
        
    }

    getNetwork = () => {
        const {getNetwork, network} = this.props;
        this.setState({activeTab: 1});
        getNetwork(network);
    }

    getSecondNetwork = () => {
        const {getSecondNetwork} = this.props;
        this.setState({activeTab: 2});
        getSecondNetwork();
    }

    render() {
        const {network} = this.props;
        const {button, activeButton, activeTab, arrow, activeArrow} = this.state;
        return (
            <NetworkTabs
              getNetwork={this.getNetwork}
              getSecondNetwork={this.getSecondNetwork}
              network={network}
              button={button}
              activeButton={activeButton}
              activeTab={activeTab}
              arrow={arrow}
              activeArrow={activeArrow}
            />
        );
    }
}

export default NetworkTabsContainer;