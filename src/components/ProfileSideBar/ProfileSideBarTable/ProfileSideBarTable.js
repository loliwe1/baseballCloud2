import React from 'react';
import PropTypes from 'prop-types';
import ageIcon from '../../../img/icons/age.svg';
import heightIcon from '../../../img/icons/height.svg';
import weightIcon from '../../../img/icons/weight.svg';
import throwsIcon from '../../../img/icons/throws.svg';
import batsIcon from '../../../img/icons/bats.svg';
import ProfileSideBarTableItem from '../ProfileSideBarTableItem/ProfileSideBarTableItem';

const ProfileSideBarTable = ({
  age,
  feet,
  inches,
  weight,
  throws_hand,
  bats_hand,
}) => (
  <ul className="profile-info__list">
    <ProfileSideBarTableItem
      title="Age"
      icon={ageIcon}
      value={`${age}`}
    />
    <ProfileSideBarTableItem
      title="Height"
      icon={heightIcon}
      value={`${feet} ft ${inches} in`}
    />
    <ProfileSideBarTableItem
      title="Weight"
      icon={weightIcon}
      value={`${weight}`}
    />
    <ProfileSideBarTableItem
      title="Throws"
      icon={throwsIcon}
      value={`${throws_hand}`}
    />
    <ProfileSideBarTableItem
      title="Bats"
      icon={batsIcon}
      value={`${bats_hand}`}
    />
  </ul>
);

ProfileSideBarTable.propTypes = {
  age: PropTypes.number.isRequired,
  feet: PropTypes.number.isRequired,
  inches: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  throws_hand: PropTypes.string.isRequired,
  bats_hand: PropTypes.string.isRequired,
};

export default ProfileSideBarTable;
