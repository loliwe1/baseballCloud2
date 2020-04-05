import React from 'react'
import PoginationItem from './PaginationItem';
import '../../css/style.css'

const Pagination = ({
  active,
  total,
  count,
  amountButtons,
  changeActiveButton,
  arrow,
  activeArrow,
  goToNextButton,
  goToPrevButton
}) => (
  <React.Fragment>
    {total > count && amountButtons &&
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
    amountButtons.map((v, i)=> (
      <PoginationItem
        key={i}
        number={i+1}
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
  }
  </React.Fragment>
)

export default Pagination;
