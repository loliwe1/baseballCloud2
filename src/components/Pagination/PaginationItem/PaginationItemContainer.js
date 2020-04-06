import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './PaginationItem';

class PoginationItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'network__pagination-link',
      activeButton: 'network__pagination-link network__pagination-link--active',
    };
  }

  render() {
    const {
      number,
      changeActiveButton,
      active,
      amountButtons,
      arrow,
      activeArrow,
    } = this.props;
    const { button, activeButton } = this.state;
    return (
      <PaginationItem
        number={number}
        changeActiveButton={changeActiveButton}
        active={active}
        button={button}
        activeButton={activeButton}
        arrow={arrow}
        activeArrow={activeArrow}
        amountButtons={amountButtons}
      />
    );
  }
}

PoginationItemContainer.propTypes = {
  number: PropTypes.number.isRequired,
  changeActiveButton: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  amountButtons: PropTypes.number.isRequired,
  arrow: PropTypes.string.isRequired,
  activeArrow: PropTypes.string.isRequired,
};

export default PoginationItemContainer;
