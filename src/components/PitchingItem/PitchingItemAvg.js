import React from 'react';
import PropTypes from 'prop-types';

const PitchingItemAvg = ({ pitch_type, velocity, spin_rate }) => (
  <div className="profile-table__values-row">
    <div className="profile-table__values-col profile-table__values-col--name">{pitch_type}</div>
    <div className="profile-table__values-col">{velocity}</div>
    <div className="profile-table__values-col">{spin_rate}</div>
  </div>
);

PitchingItemAvg.propTypes = {
  pitch_type: PropTypes.string.isRequired,
  velocity: PropTypes.number.isRequired,
  spin_rate: PropTypes.number.isRequired,
};

export default PitchingItemAvg;
