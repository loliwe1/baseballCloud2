import React from 'react';
import PropTypes from 'prop-types';
import PoginationItem from './PaginationItem';
import '../../css/style.css';
import PaginationArrow from './PaginationArrow/PaginationArrow';

const Pagination = ({
  active,
  total,
  count,
  amountButtons,
  changeActiveButton,
  goToNextButton,
  goToPrevButton,
}) => (
  <>
    {(total > count && amountButtons.length > 0) && (
    <ul className="network__table-pagination">
      <PaginationArrow
        goToButton={goToPrevButton}
        arrow="«"
        active={active}
        number={1}
      />
      { (amountButtons && amountButtons.length !== 0) && (
        amountButtons.map((v, i) => (
          <PoginationItem
            key={i}
            number={i + 1}
            changeActiveButton={changeActiveButton}
            active={active}
          />
        ))
      )}
      <PaginationArrow
        goToButton={goToNextButton}
        arrow="»"
        active={active}
        number={amountButtons.length}
      />
    </ul>
    )}
  </>
);

Pagination.propTypes = {
  active: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  amountButtons: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeActiveButton: PropTypes.func.isRequired,
  goToNextButton: PropTypes.func.isRequired,
  goToPrevButton: PropTypes.func.isRequired,
};
export default Pagination;
