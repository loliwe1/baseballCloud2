import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';
import BattingItem from './BattingItem/BattingItem';
import NoInfo from '../NoInfo/NoInfo';

const Batting = ({ topValues, avgValues }) => (
  <li className="profile-table__tab profile-table__tab--session">
    <div>
      <div
        style={{
          color: '#414f5a',
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.25,
        }}
      >
        Top Pitching Values
      </div>
      <div className="profile-table__values-table">
        <div
          className="profile-table__values-row"
          style={{
            background: 'white',
            fontSize: '16px',
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
        {topValues && topValues.length !== 0 ? (
          topValues.map((v, i) => (
            <BattingItem
              key={i}
              pitchType={v.pitch_type}
              distance={v.distance}
              launchAngle={v.launch_angle}
              exitVelocity={v.exit_velocity}
            />
          ))
        ) : (
          <NoInfo />
        )}
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
          className="profile-table__values-row"
          style={{
            background: 'white',
            fontSize: '16px',
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
        {avgValues && avgValues.length !== 0 ? (
          avgValues.map((v, i) => (
            <BattingItem
              key={i}
              pitchType={v.pitch_type}
              distance={v.distance}
              launchAngle={v.launch_angle}
              exitVelocity={v.exit_velocity}
            />
          ))
        ) : (
          <NoInfo />
        )}
      </div>
    </div>
  </li>
);


Batting.propTypes = {
  topValues: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  avgValues: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

Batting.defaultProps = {
  topValues: [],
  avgValues: [],
};

export default Batting;
