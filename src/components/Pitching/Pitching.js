import React from 'react';
import '../../css/style.css';
import PitchingItemTop from '../PitchingItem/PitchingItemTop';
import PitchingItemAvg from '../PitchingItem/PitchingItemAvg';

const Pitching = ({pitchingSum}) => {
    const {top_values, average_values} = pitchingSum;
    return (
      <li className="profile-table__tab profile-table__tab--pitching">
        {(pitchingSum && top_values.length === 0) ? `There's no info yet` :
          ( <div>
            <div
              style={{color: '#414f5a', fontSize: 18, fontWeight: 400, lineHeight: 1.25}}
            >
              Top Pitching Values
            </div>
            <div className="profile-table__values-table">
            <div
              className='profile-table__values-row'
              style={{background: 'white', fontSize: 14, color: '#667784', fontWeight: 300}}>
              <div>Pitch Type</div>
              <div>Velocity</div>
              <div>Spin Rate</div>
            </div>
              {top_values.map((v,i) => (
                <PitchingItemTop
                  key={i}
                  velocity={v.velocity}
                  spin_rate={v.spin_rate}
                  pitch_type={v.pitch_type}
                />
              ))}
            </div>
            </div>
          )
         }
         {(average_values && average_values.length !== 0) &&
          ( <div>
            <div
              style={{color: '#414f5a', fontSize: 18, fontWeight: 400, lineHeight: 1.25}}
            >
              Average Pitching Values
            </div>
            <div className="profile-table__values-table">
              <div
                className='profile-table__values-row'
                style={{background: 'white', fontSize: 14, color: '#667784', fontWeight: 300}}>
                <div>Pitch Type</div>
                <div>Velocity</div>
                <div>Spin Rate</div>
              </div>
              {average_values.map((avg,i) => (
                <PitchingItemAvg
                  key={i}
                  velocity={avg.velocity}
                  spin_rate={avg.spin_rate}
                  pitch_type={avg.pitch_type}
                />
              ))}
            </div>
            </div>
          )
         }
      </li>
    );
};

export default Pitching;
