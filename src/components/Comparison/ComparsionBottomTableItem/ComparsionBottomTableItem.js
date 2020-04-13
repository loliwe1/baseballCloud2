import React from 'react';
import PropTypes from 'prop-types';

const ComparsionBottomTableItem = ({
  type,
  spinRate,
  pitchVel,
  topValues,
  secondProfTopValues,
}) => (
  <div className="profile-table__values-row">
    <div className="profile-table__values-col profile-table__values-col--name">{type}</div>
    <div className="profile-table__values-col">
      {topValues && topValues.length !== 0 ?
        topValues.map((v) => (
          (v.pitch_type === type && spinRate) ? v.spin_rate :
            (v.pitch_type === type && pitchVel) ? v.velocity : ''
        ))
        : '-'}
    </div>
    <div className="profile-table__values-col">
      {secondProfTopValues && secondProfTopValues.length !== 0 ?
        secondProfTopValues.map((v) => (
          (v.pitch_type === type && spinRate) ? v.spin_rate :
            (v.pitch_type === type && pitchVel) ? v.velocity : ''
        ))
        : '-'}
    </div>
  </div>
);

ComparsionBottomTableItem.propTypes = {
  topValues: PropTypes.string,
  spinRate: PropTypes.bool.isRequired,
  pitchVel: PropTypes.bool.isRequired,
  secondProfTopValues: PropTypes.PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  type: PropTypes.string.isRequired,
};

ComparsionBottomTableItem.defaultProps = {
  topValues: '',
  secondProfTopValues: null,
};

export default ComparsionBottomTableItem;
