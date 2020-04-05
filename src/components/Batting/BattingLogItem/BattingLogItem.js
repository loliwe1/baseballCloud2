import React from 'react';
import '../../../css/style.css';

const BattingLogItem = ({
  active,
  changeActive,
  date,
  pitcherName,
  pitcherHandedness,
  pitchType,
  pitchCall,
  exitVelocity,
  launchAngle,
  direction,
  distance,
  hitSpinRate,
  hangTime,
  pitcherDatraksId,
}) => (
  <div>
    {!active 
    ?
      <div 
          onClick={changeActive}
          className="profile-table__values-row"
          style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', cursor: 'pointer'}}
        >
        <div className="profile-table__values-col profile-table__values-col--name">{date}</div>
        <div className="profile-table__values-col">{pitcherName}</div>
        <div className="profile-table__values-col">{pitcherHandedness}</div>
        <div className="profile-table__values-col">{pitchType}</div>
        <div className="profile-table__values-col">{pitchCall}</div>
      </div>

    : 
      <div style={{
          boxShadow: '0 0 6px 1px rgba(72,187,255,0.63)',
          borderRadius: '4px',
          marginBottom: '5px'
        }}
      >
        <div 
            onClick={changeActive}
            className="profile-table__values-row"
            style={{
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
              cursor: 'pointer',
              backgroundColor: '#ecf8ff',
            }}
          >
        <div className="profile-table__values-col profile-table__values-col--name">{date}</div>
        <div className="profile-table__values-col">{pitcherName}</div>
        <div className="profile-table__values-col">{pitcherHandedness}</div>
        <div className="profile-table__values-col">{pitchType}</div>
        <div className="profile-table__values-col">{pitchCall}</div>
        </div>
          <div style={{height: '132px', padding: '16px'}}>
            
          <div className="profile-table__values-table">
          <div
              className='profile-table__values-row'
              style={{
                background: 'white',
                fontSize: '16px',
                color: '#667784',
                fontWeight: 300,
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
              }}
            >
              <div>Exit Velocity</div>
              <div>Launch Angle</div>
              <div>Direction</div>
              <div>Hit Spin Rate</div>
              <div>Distance</div>
              <div>Hang Time</div>
            </div>

            <div 
          className="profile-table__values-row"
          style={{gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', cursor: 'pointer'}}
        >
        <div className="profile-table__values-col profile-table__values-col--name">{exitVelocity || '-'}</div>
        <div className="profile-table__values-col">{launchAngle || '-'}</div>
        <div className="profile-table__values-col">{direction || '-'}</div>
        <div className="profile-table__values-col">{hitSpinRate || '-'}</div>
        <div className="profile-table__values-col">{distance || '-'}</div>
        <div className="profile-table__values-col">{hangTime || '-'}</div>
      </div>
            </div>
          </div>
      </div>
    }
  </div>

);

export default BattingLogItem;
