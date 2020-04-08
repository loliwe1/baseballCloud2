import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      arrow: 'network__pagination-link',
      activeArrow: 'network__pagination-link network__pagination-link--disabled',
    };
  }


  changeActiveButton = async (number) => {
    await this.setState({active: number})
    const {getOffset, count} = this.props
    const {active} = this.state

    getOffset(count*(active - 1))
  }

  goToNextButton = () => {
    const {count, total, getOffset} = this.props;
    const {active} = this.state;
    if(count * active >= total) return;

    this.setState({active: this.state.active += 1})
    getOffset(count*(active))
  }
    
  goToPrevButton = () => {
    const {count, getOffset} = this.props;
    const {active} = this.state;
    
    if(this.state.active === 1) return;

    const newActive = active - 1;

    getOffset(count*(newActive))
    this.setState({active: newActive})
    
  }

  render() {
    const { count, total } = this.props;
    const { active, arrow, activeArrow } = this.state;
    const amountButtons = new Array(Math.ceil((total / count))).fill(1);
    return (
      <Pagination
        active={active}
        total={total}
        count={count}
        amountButtons={amountButtons}
        changeActiveButton={this.changeActiveButton}
        arrow={arrow}
        activeArrow={activeArrow}
        goToNextButton={this.goToNextButton}
        goToPrevButton={this.goToPrevButton}
      />
    );
  }
}

PaginationContainer.propTypes = {
    getOffset: PropTypes.func.isRequired,
    count: PropTypes.number,
    total: PropTypes.number,
}

PaginationContainer.defaultProps = {
  count: null,
  total: null,
}

export default PaginationContainer;
