import React from 'react';
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
      href='#'
      className={active === number ? activeButton: button}
      onClick={()=> changeActiveButton(number)}
    >
      {number}
    </a>
  </li>
)

export default PoginationItem;