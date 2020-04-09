import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';

const NetworkTabs = ({
  getNetwork,
  getSecondNetwork,
  button,
  activeButton,
  activeTab,
  arrow,
  activeArrow,
}) => (
  <ul className="network__table-pagination">
    <li className="network__pagination-item">
      <a href="#" role="button" className={activeTab === 1 ? activeArrow : arrow}>«</a>
    </li>
    <li className="network__pagination-item">
      <a
        href="#"
        role="button"
        className={activeTab === 1 ? activeButton : button}
        onClick={getNetwork}
      >
        1
      </a>
    </li>
    <li className="network__pagination-item">
      <a
        href="#"
        role="button"
        className={activeTab === 2 ? activeButton : button}
        onClick={getSecondNetwork}
      >
        2
      </a>
    </li>
    <li className="network__pagination-item">
      <a href="#" role="button" className={activeTab === 2 ? activeArrow : arrow}>»</a>
    </li>
  </ul>
);

NetworkTabs.propTypes = {
  getNetwork: PropTypes.func.isRequired,
  getSecondNetwork: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired,
  activeButton: PropTypes.string.isRequired,
  activeTab: PropTypes.number.isRequired,
  arrow: PropTypes.string.isRequired,
  activeArrow: PropTypes.string.isRequired,
};


export default NetworkTabs;
