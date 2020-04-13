import React from 'react';
import PropTypes from 'prop-types';

const PaginationArrow = ({
  goToButton,
  active,
  arrow,
  number,
}) => (
  <li className="network__pagination-item">
    <a
      href="#"
      role="button"
      onClick={goToButton}
      className={`network__pagination-link ${active === number && 'network__pagination-link--disabled'}`}
    >
      {arrow}
    </a>
  </li>
);

PaginationArrow.propTypes = {
  goToButton: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  arrow: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default PaginationArrow;
