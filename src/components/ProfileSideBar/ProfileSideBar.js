import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';
import userpick from '../../img/userpic.png';
import FavoriteButton from './FavoriteButton/FavoriteButton';
import NonFavoriteButton from './FavoriteButton/NonFavouriteButton';
import ProfileChangeButton from './ProfileChangeButton/ProfileChangeButton';
import ProfileSideBarTable from './ProfileSideBarTable/ProfileSideBarTable';
import ProfileInfoPersonal from './ProfileInfoPersonal/ProfileInfoPersonal';

const ProfileSideBar = ({
  first_name,
  last_name,
  position,
  position2,
  age,
  feet,
  inches,
  weight,
  throws_hand,
  bats_hand,
  openForm,
  profId,
  id,
  favorite,
  changeFavorite,
}) => (
  <aside className="profile-aside">
    <div className="profile-info">
      {profId === id ? (
        <ProfileChangeButton openForm={openForm} />
      ) : favorite ? (
        <FavoriteButton changeFavorite={changeFavorite} />
      ) : (
        <NonFavoriteButton changeFavorite={changeFavorite} />
      ) }
      <div className="profile-info__userpic">
        <img src={userpick} alt="userpic" width="100" height="100" className="profile-info__userpic-img" />
      </div>
      <ProfileInfoPersonal
        first_name={first_name}
        last_name={last_name}
        position={position}
        position2={position2}
      />
    </div>
    <ProfileSideBarTable
      age={age}
      feet={feet}
      inches={inches}
      weight={weight}
      throws_hand={throws_hand}
      bats_hand={bats_hand}
    />
  </aside>
);

ProfileSideBar.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  position2: PropTypes.string,
  age: PropTypes.number.isRequired,
  feet: PropTypes.number.isRequired,
  inches: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  throws_hand: PropTypes.string.isRequired,
  bats_hand: PropTypes.string.isRequired,
  openForm: PropTypes.func.isRequired,
  profId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  changeFavorite: PropTypes.func.isRequired,
};

ProfileSideBar.defaultProps = {
  position2: null,
  favorite: false,
};

export default ProfileSideBar;
