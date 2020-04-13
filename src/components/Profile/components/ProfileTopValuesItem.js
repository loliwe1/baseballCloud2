import React from 'react';
import PropTypes from 'prop-types';

const ProfileTopValuesItem = ({
  pitcher_summary,
  value,
  coefficient,
  name,
}) => (
  <div className="profile-rates__scores">
    <div className="profile-rates__scores-info">
      <div className="profile-rates__scores-name">
        { name }
      </div>
      <div className="profile-rates__scores-value">
        { (pitcher_summary && pitcher_summary.length !== 0 && pitcher_summary[0][value]) ? (
          pitcher_summary[0][value]
        ) : (
          'N/A'
        )}
      </div>
    </div>
    <div className="profile-rates__progressbar">
      <svg className="rc-progress-line " viewBox="0 0 100 1" preserveAspectRatio="none">
        <path
          className="rc-progress-line-trail"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          stroke="#eff1f3"
          strokeWidth="1"
          fillOpacity="0"
        />
        <path
          className="rc-progress-line-path"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          stroke="#ffd01a"
          strokeWidth="1"
          fillOpacity="0"
          style={{
            strokeDasharray:
              `${(pitcher_summary && pitcher_summary.length !== 0 && pitcher_summary[0][value]) ? (
                `${pitcher_summary[0][value] / coefficient}px, 100px`
              ) : (
                `${1}px, 100px`
              )}`,
            strokeDashoffset: '0px',
            transition: 'strokeDashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s',
          }}
        />
      </svg>
    </div>
  </div>
);

ProfileTopValuesItem.propTypes = {
  pitcher_summary: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  coefficient: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ProfileTopValuesItem.defaultProps = {
  pitcher_summary: null,
};

export default ProfileTopValuesItem;
