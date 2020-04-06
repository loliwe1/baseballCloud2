import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/style.css';

const BattingItem = ({
  pitchType,
  distance,
  launchAngle,
  exitVelocity,
}) => (
  <div
    className="profile-table__values-row"
    style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}
  >
    <div className="profile-table__values-col profile-table__values-col--name">{pitchType}</div>
    <div className="profile-table__values-col">{distance}</div>
    <div className="profile-table__values-col">{launchAngle}</div>
    <div className="profile-table__values-col">{exitVelocity}</div>
  </div>
);

BattingItem.propTypes = {
  pitchType: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  launchAngle: PropTypes.number.isRequired,
  exitVelocity: PropTypes.number.isRequired,
};

export default BattingItem;
