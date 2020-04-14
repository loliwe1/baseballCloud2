import React from 'react';
import PropTypes from 'prop-types';

const ProfileSideBarTableItem = ({ icon, title, value }) => (
  <li className="profile-info__item">
    <div className="profile-info__item-name">
      <span className="profile-info__item-icon">
        <img src={icon} alt="icon" />
      </span>
      {title}
    </div>
    <div className="profile-info__item-value">
      {value}
    </div>
  </li>
);

ProfileSideBarTableItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProfileSideBarTableItem;
