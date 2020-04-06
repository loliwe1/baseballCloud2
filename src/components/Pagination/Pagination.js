import React from 'react';
import PropTypes from 'prop-types';
import PoginationItem from './PaginationItem';
import '../../css/style.css';

const Pagination = ({
  active,
  total,
  count,
  amountButtons,
  changeActiveButton,
  arrow,
  activeArrow,
  goToNextButton,
  goToPrevButton,
}) => (
  <>
    {total > count && amountButtons &&
    (
    <ul className="network__table-pagination">
      <li className="network__pagination-item">
        <a
          href="#"
          role="button"
          onClick={goToPrevButton}
          className={active===1 ? activeArrow : arrow}
        >
          «
      </a>
      </li>
      { (amountButtons && amountButtons.length !== 0) &&
      amountButtons.map((v, i) => (
        <PoginationItem
          key={i}
          number={i}
          changeActiveButton={changeActiveButton}
          active={active}
        />
      ))}
      <li className="network__pagination-item">
        <a
          href="#"
          role="button"
          className={active === amountButtons.length ? activeArrow: arrow}
          onClick={goToNextButton}
        >
          »
        </a>
      </li>
    </ul>
    )}
  </>
);

Pagination.propTypes = {
  active: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  amountButtons: PropTypes.number.isRequired,
  changeActiveButton: PropTypes.func.isRequired,
  arrow: PropTypes.string.isRequired,
  activeArrow: PropTypes.string.isRequired,
  goToNextButton: PropTypes.func.isRequired,
  goToPrevButton: PropTypes.func.isRequired,
};


export default Pagination;
