import React from 'react';
import '../../css/style.css';
import BattingItem from './BattingItem/BattingItem';

const Batting = ({topValues, avgValues}) => (
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
              {topValues && topValues.length !== 0 
              ? topValues.map((v, i) => (
                <BattingItem
                  key={i}
                  pitchType={v.pitch_type}
                  distance={v.distance}
                  launchAngle={v.launch_angle}
                  exitVelocity={v.exit_velocity}
                />
              ))
              : <div style={{textAlign: 'center', fontSize: '20px'}}>There's no info yet!</div>
            }
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
                {avgValues && avgValues.length !== 0 
                ? avgValues.map((v, i) => (
                  <BattingItem
                    key={i}
                    pitchType={v.pitch_type}
                    distance={v.distance}
                    launchAngle={v.launch_angle}
                    exitVelocity={v.exit_velocity}
                  />
                ))
                : <div style={{textAlign: 'center', fontSize: '20px'}}>There's no info yet!</div>
              }
            </div>
            </div>

  </li> 
)

export default Batting;