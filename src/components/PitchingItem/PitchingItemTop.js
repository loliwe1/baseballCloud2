import React from 'react';
import PropTypes from 'prop-types';

const PitchingItemTop = ({ velocity, spin_rate, pitch_type }) => (
  <div className="profile-table__values-row">
    <div className="profile-table__values-col profile-table__values-col--name">{pitch_type}</div>
    <div className="profile-table__values-col">{velocity}</div>
    <div className="profile-table__values-col">{spin_rate}</div>
  </div>
);

PitchingItemTop.propTypes = {
  pitch_type: PropTypes.string.isRequired,
  velocity: PropTypes.number.isRequired,
  spin_rate: PropTypes.number.isRequired,
};

export default PitchingItemTop;
