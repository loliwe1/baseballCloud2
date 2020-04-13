import React from 'react';
import PropTypes from 'prop-types';

const ProfileInfoPersonal = ({
  first_name,
  last_name,
  position,
  position2,
}) => (
  <div className="profile-info__personal">
    <div className="profile-info__name">
      {first_name}
      &nbsp;
      {last_name}
    </div>
    <div className="profile-info__position">
      {position}
    </div>
    <div className="profile-info__position">
      {position2 || position}
    </div>
  </div>
);

ProfileInfoPersonal.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  position2: PropTypes.string,
};

ProfileInfoPersonal.defaultProps = {
  position2: null,
};

export default ProfileInfoPersonal;
