import React from 'react';
import PaginationItem from './PaginationItem';

class PoginationItemContainer extends React.Component {
    state = {
        button: 'network__pagination-link',
        activeButton: 'network__pagination-link network__pagination-link--active',
    }
    render() {
        const {number, changeActiveButton, active, amountButtons, arrow, activeArrow} = this.props;
        const {button, activeButton} = this.state;
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
        )
    }
}

export default PoginationItemContainer;