import React from 'react';
import PropTypes from 'prop-types';
import ComparsionBottomTableItem from '../ComparsionBottomTableItem/ComparsionBottomTableItem';

const ComparsionBottomTable = ({
  topValues,
  spinRate,
  pitchVel,
  secondProfTopValues,
}) => (
  <div className="profile-table__values-table">

    <ComparsionBottomTableItem
      topValues={topValues}
      spinRate={spinRate}
      pitchVel={pitchVel}
      secondProfTopValues={secondProfTopValues}
      type="Fastball"
    />
    <ComparsionBottomTableItem
      topValues={topValues}
      spinRate={spinRate}
      pitchVel={pitchVel}
      secondProfTopValues={secondProfTopValues}
      type="Curveball"
    />
    <ComparsionBottomTableItem
      topValues={topValues}
      spinRate={spinRate}
      pitchVel={pitchVel}
      secondProfTopValues={secondProfTopValues}
      type="Changeup"
    />
    <ComparsionBottomTableItem
      topValues={topValues}
      spinRate={spinRate}
      pitchVel={pitchVel}
      secondProfTopValues={secondProfTopValues}
      type="Slider"
    />
  </div>
);

ComparsionBottomTable.propTypes = {
  topValues: PropTypes.string,
  spinRate: PropTypes.bool.isRequired,
  pitchVel: PropTypes.bool.isRequired,
  secondProfTopValues: PropTypes.PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

ComparsionBottomTable.defaultProps = {
  topValues: '',
  secondProfTopValues: null,
};

export default ComparsionBottomTable;
