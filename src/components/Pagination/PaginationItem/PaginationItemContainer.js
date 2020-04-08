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
    } = this.props;
    const { button, activeButton } = this.state;
    return (
      <PaginationItem
        number={number}
        changeActiveButton={changeActiveButton}
        active={active}
        button={button}
        activeButton={activeButton}
      />
    );
  }
}

PoginationItemContainer.propTypes = {
  number: PropTypes.number.isRequired,
  changeActiveButton: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

export default PoginationItemContainer;
