import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/style.css';

const PitchingLogItem = ({
  date,
  pitchType,
  pitchCall,
  velocity,
  spinRate,
  spinAxis,
  tilt,
  releaseHeight,
  releaseSide,
  extension,
  verticalBreak,
  horizontalBreak,
  heightAtPlate,
  batterName,
  changeActive,
  active,
}) => (
  <div>
    {!active
      ?
      (
        <div
          onClick={changeActive}
          role="button"
          tabIndex={0}
          className="profile-table__values-row"
          style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', cursor: 'pointer' }}
        >
          <div className="profile-table__values-col profile-table__values-col--name">{date || '-'}</div>
          <div className="profile-table__values-col">{batterName || '-'}</div>
          <div className="profile-table__values-col">{pitchType || '-'}</div>
          <div className="profile-table__values-col">{pitchCall || '-'}</div>
          <div className="profile-table__values-col">{velocity || '-'}</div>
          <div className="profile-table__values-col">{spinRate || '-'}</div>
          <div className="profile-table__values-col">{spinAxis || '-'}</div>
        </div>
      )
      :
      (
        <div style={{
          boxShadow: '0 0 6px 1px rgba(72,187,255,0.63)',
          borderRadius: '4px',
          marginBottom: '5px',
        }}
        >
          <div
            role="button"
            tabIndex={0}
            onClick={changeActive}
            className="profile-table__values-row"
            style={{
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
              cursor: 'pointer',
              backgroundColor: '#ecf8ff',
            }}
          >
            <div className="profile-table__values-col profile-table__values-col--name">{date || '-'}</div>
            <div className="profile-table__values-col">{batterName || '-'}</div>
            <div className="profile-table__values-col">{pitchType || '-'}</div>
            <div className="profile-table__values-col">{pitchCall || '-'}</div>
            <div className="profile-table__values-col">{velocity || '-'}</div>
            <div className="profile-table__values-col">{spinRate || '-'}</div>
            <div className="profile-table__values-col">{spinAxis || '-'}</div>
          </div>
          <div style={{ height: '132px', padding: '16px' }}>
            <div className="profile-table__values-table">
              <div
                className="profile-table__values-row"
                style={{
                  background: 'white',
                  fontSize: '16px',
                  color: '#667784',
                  fontWeight: 300,
                  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                }}
              >
                <div>Vertical Break</div>
                <div>Horizontal Break</div>
                <div>Height at Plate</div>
                <div>Release Height</div>
                <div>Extension</div>
                <div>Release Side</div>
                <div>Tilt</div>
              </div>

              <div
                className="profile-table__values-row"
                style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', cursor: 'pointer' }}
              >
                <div className="profile-table__values-col profile-table__values-col--name">{verticalBreak || '-'}</div>
                <div className="profile-table__values-col">{horizontalBreak || '-'}</div>
                <div className="profile-table__values-col">{heightAtPlate || '-'}</div>
                <div className="profile-table__values-col">{releaseHeight || '-'}</div>
                <div className="profile-table__values-col">{extension || '-'}</div>
                <div className="profile-table__values-col">{releaseSide || '-'}</div>
                <div className="profile-table__values-col">{tilt || '-'}</div>
              </div>
            </div>
          </div>
        </div>
      )}
  </div>

);

PitchingLogItem.propTypes = {
  date: PropTypes.string.isRequired,
  pitchType: PropTypes.string.isRequired,
  pitchCall: PropTypes.string,
  velocity: PropTypes.number.isRequired,
  spinRate: PropTypes.number.isRequired,
  spinAxis: PropTypes.number,
  tilt: PropTypes.number,
  releaseHeight: PropTypes.number.isRequired,
  releaseSide: PropTypes.number.isRequired,
  extension: PropTypes.string.isRequired,
  verticalBreak: PropTypes.number,
  horizontalBreak: PropTypes.number,
  heightAtPlate: PropTypes.number,
  batterName: PropTypes.string.isRequired,
  changeActive: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

PitchingLogItem.defaultProps = {
  pitchCall: '',
  spinAxis: null,
  verticalBreak: null,
  horizontalBreak: null,
  tilt: null,
  heightAtPlate: null,
};


export default PitchingLogItem;
