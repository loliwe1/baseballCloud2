import React from 'react';
import PropTypes from 'prop-types';
import ProfileTopValuesItem from './ProfileTopValuesItem';

const ProfileTopValues = ({ pitcher_summary, title, active }) => (
  <div className="profile-rates__values-block">
    <h2 className="profile-rates__title">
      {title}
    </h2>
    {active ? (
      <div className="profile-rates__scores-layout">
        <ProfileTopValuesItem
          pitcher_summary={pitcher_summary}
          name="Fastball Velocity"
          value="velocity"
          coefficient={2}
        />
        <ProfileTopValuesItem
          pitcher_summary={pitcher_summary}
          name="Spin Rate"
          value="spin_rate"
          coefficient={50}
        />
        <ProfileTopValuesItem
          pitcher_summary={pitcher_summary}
          name="Pitch Movement"
          value="pitch_type"
          coefficient={0.5}
        />
      </div>
    ) : (
      <div className="profile-rates__message">
        No data currently linked to this profile
      </div>
    )}

  </div>
);

ProfileTopValues.propTypes = {
  pitcher_summary: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

ProfileTopValues.defaultProps = {
  pitcher_summary: null,
  active: false,
};

export default ProfileTopValues;
