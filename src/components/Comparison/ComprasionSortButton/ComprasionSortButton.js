import React from 'react';
import PropTypes from 'prop-types';

const ComprasionSortButton = ({ spinRate, openTopValues, topValuesOpen }) => (
  <button
    type="button"
    className="profile-table__sorting-btn"
    onClick={openTopValues}
    style={{ width: '270px' }}
  >
    Top Pitching Values -&nbsp;
    <span className="js-value">
      {!spinRate ? 'Velocity' : 'Spin Rate'}
    </span>
    <span
      className="profile-table__sorting-icon"
      style={{ transform: `${topValuesOpen ? 'rotate(180deg)' : 'rotate(0)'}` }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
        <path
          fill="#48BBFF"
          fillRule="nonzero"
          d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z"
        />
      </svg>
    </span>

  </button>
);

ComprasionSortButton.propTypes = {
  spinRate: PropTypes.bool.isRequired,
  openTopValues: PropTypes.func.isRequired,
  topValuesOpen: PropTypes.bool.isRequired,
};

export default ComprasionSortButton;
