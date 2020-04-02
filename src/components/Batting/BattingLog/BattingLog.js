import React from 'react';
import '../../../css/style.css';

const BattingLog = () => (
    <li className="profile-table__tab profile-table__tab--session">
    <div>
      <div
        style={{color: '#414f5a', fontSize: 18, fontWeight: 400, lineHeight: 1.25}}
      >
              Top Pitching Values
            </div>
            <div className="profile-table__values-table">
            <div
              className='profile-table__values-row'
              style={{
                background: 'white',
                fontSize: 14,
                color: '#667784',
                fontWeight: 300,
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
              }}
            >
              <div>Pitch Type</div>
              <div>Distance</div>
              <div>Launch Angle</div>
              <div>Exit Velocity</div>
            </div>
      
            </div>
            </div>
           <div>
            <div
              style={{
                color: '#414f5a',
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.25,
              }}
            >
              Average Pitching Values
            </div>
            <div className="profile-table__values-table">
              <div
                className='profile-table__values-row'
                style={{
                  background: 'white',
                  fontSize: 14,
                  color: '#667784',
                  fontWeight: 300,
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                }}
              >
                <div>Pitch Type</div>
                <div>Distance</div>
                <div>Launch Angle</div>
                <div>Exit Velocity</div>
              </div>
                
            </div>
            </div>

  </li> 
);

export default BattingLog