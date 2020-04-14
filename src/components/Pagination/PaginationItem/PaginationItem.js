import React from 'react';
import PropTypes from 'prop-types';

const PoginationItem = ({
  number,
  active,
  changeActiveButton,
}) => (
  <li className="network__pagination-item">
    <a
      role="button"
      href="#"
      className={`network__pagination-link ${active === number && 'network__pagination-link--active'}`}
      onClick={() => changeActiveButton(number)}
    >
      {number}
    </a>
  </li>
);

PoginationItem.propTypes = {
  number: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  changeActiveButton: PropTypes.func.isRequired,
};

export default PoginationItem;
