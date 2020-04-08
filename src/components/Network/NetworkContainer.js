import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import Network from './Network';
import {
  getNetworkPromiseCreator as getNetwork,
  getSecondNetworkPromiseCreator as getSecondNetwork,
  filterNetworkPromiseCreator as filterNetwork,
} from '../../store/routines/routines';
import {network, secondNetwork, filtrNetwork} from '../../graphQl/graphql';


class NetworkContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      input: {
        profiles_count: 10,
        offset: 0,
      },
    };
  }


    componentDidMount() {
      const {input} = this.state;
      this.filter(input);
    }

    getNetwork = () => {
      const {getNetwork} = this.props;
      getNetwork();
    }

    getSecondNetwork = () => {
      const {getSecondNetwork} = this.props;
      getSecondNetwork();
    }

    filterOffset = (offset) => {
      const {input} = this.state;
      input.offset = offset;

      this.filter(input)
    }

    filter = async (input) => {
      this.setState({fetching: true})
      this.setState({input})
      const {filterNetwork} = this.props;

      try {
        await filterNetwork(input);
      }catch(e) {
        console.log(e);
        }
      finally {
        this.setState({fetching: false})
      }
    }
    
    filterNetworkName = async (v) => {
      const {input} = this.state;
      input.player_name = v.target.value;
      !input.player_name && delete input.player_name;
          
      this.filter(input);

    }

  render() {
    const { network } = this.props;
    const { fetching } = this.state;
    const { input } = this.state;
    const { profiles_count } = input;
    return (
      <Network
        network={network}
        count={profiles_count}
        getNetwork={this.getNetwork}
        getSecondNetwork={this.getSecondNetwork}
        fetching={fetching}
        filter={this.filter}
        input={input}
        fetchDataStart={this.fetchDataStart}
        fetchDataFinish={this.fetchDataFinish}
        filterNetworkName={this.filterNetworkName}
        getOffset={this.filterOffset}
      />
    );
  }
}

NetworkContainer.propTypes = {
  network: PropTypes.objectOf(PropTypes.any).isRequired,  
}

const mapStateToProps = (state) => ({
  network: state.network,

});

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  getNetwork,
  getSecondNetwork,
  filterNetwork,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NetworkContainer);
