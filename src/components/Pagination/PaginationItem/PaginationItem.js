import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/style.css';

const PoginationItem = ({
  number,
  active,
  button,
  activeButton,
  changeActiveButton,
}) => (
  <li className="network__pagination-item">
    <a
      role="button"
      href="#"
      className={active === number ? activeButton : button}
      onClick={() => changeActiveButton(number)}
    >
      {number}
    </a>
  </li>
);

PoginationItem.propTypes = {
  number: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  button: PropTypes.string.isRequired,
  activeButton: PropTypes.string.isRequired,
  changeActiveButton: PropTypes.func.isRequired,
};

export default PoginationItem;
