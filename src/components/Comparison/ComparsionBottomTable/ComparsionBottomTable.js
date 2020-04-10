import React from 'react';
import PropTypes from 'prop-types';

const ComparsionBottomTable = ({
  topValues,
  spinRate,
  pitchVel,
  secondProfTopValues,
}) => (
  <div className="profile-table__values-table">
    <div className="profile-table__values-row">
      <div className="profile-table__values-col profile-table__values-col--name">Fastball</div>
      <div className="profile-table__values-col">
        {topValues && topValues.length !== 0 ?
          topValues.map((v) => (
            (v.pitch_type === 'Fastball' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Fastball' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>

      <div className="profile-table__values-col">
        {secondProfTopValues && secondProfTopValues.length !== 0 ?
          secondProfTopValues.map((v) => (
            (v.pitch_type === 'Fastball' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Fastball' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>
    </div>
    <div className="profile-table__values-row">
      <div className="profile-table__values-col profile-table__values-col--name">Curveball</div>
      <div className="profile-table__values-col">
        {topValues && topValues.length !== 0 ?
          topValues.map((v) => (
            (v.pitch_type === 'Curveball' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Curveball' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>
      <div className="profile-table__values-col">
        {secondProfTopValues && secondProfTopValues.length !== 0 ?
          secondProfTopValues.map((v) => (
            (v.pitch_type === 'Curveball' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Curveball' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>
    </div>
    <div className="profile-table__values-row">
      <div className="profile-table__values-col profile-table__values-col--name">Changeup</div>
      <div className="profile-table__values-col">
        {topValues && topValues.length !== 0 ?
          topValues.map((v) => (
            (v.pitch_type === 'Changeup' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Changeup' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>
      <div className="profile-table__values-col">
        {secondProfTopValues && secondProfTopValues.length !== 0 ?
          secondProfTopValues.map((v) => (
            (v.pitch_type === 'Changeup' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Changeup' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>
    </div>
    <div className="profile-table__values-row">
      <div className="profile-table__values-col profile-table__values-col--name">Slider</div>
      <div className="profile-table__values-col">
        {topValues && topValues.length !== 0 ?
          topValues.map((v) => (
            (v.pitch_type === 'Slider' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Slider' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>
      <div className="profile-table__values-col">
        {secondProfTopValues && secondProfTopValues.length !== 0 ?
          secondProfTopValues.map((v) => (
            (v.pitch_type === 'Slider' && spinRate) ? v.spin_rate :
              (v.pitch_type === 'Slider' && pitchVel) ? v.velocity : ''
          ))
          : '-'}
      </div>
    </div>
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
