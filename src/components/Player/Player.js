import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../css/style.css';

const Player = ({
  id,
  first_name,
  last_name,
  school,
  teams,
  age,
  favorite,
  getProfile,
  session,
  changeFavorite,
}) => (
  <div className="network__table-row">
    <div className="network__table-col network__table-col--name">
      <Link
        onClick={getProfile}
        className="network__table-link"
        to={{
          pathname: `profile/${id}`,
          state: id,
        }}
      >
        {first_name} {last_name}
      </Link>
    </div>
    <div className="network__table-col network__table-col--sessions">
      {session !== 0 ? session : '-'}
    </div>
    <div className="network__table-col network__table-col--school">
      {school ? school.name : '-'}
    </div>
    <div className="network__table-col network__table-col--team">
      {teams.length !== 0 ? teams[0].name : '-'}
    </div>
    <div className="network__table-col network__table-col--age">
      {age}
    </div>
    <div className="network__table-col network__table-col--favorite">
      <button type="button" className="network__table-like" onClick={changeFavorite}>
        {!favorite
          ?
            <i className="network__blue-icon fa fa-heart-o" aria-hidden="true" />
          :
            <i className="network__blue-icon fa fa-heart" aria-hidden="true" />}
      </button>
    </div>
  </div>
);

Player.propTypes = {
  id: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  school: PropTypes.objectOf(PropTypes.any).isRequired,
  teams: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  age: PropTypes.number.isRequired,
  favorite: PropTypes.bool.isRequired,
  getProfile: PropTypes.func.isRequired,
  session: PropTypes.number.isRequired,
  changeFavorite: PropTypes.func.isRequired,
};

export default Player;
