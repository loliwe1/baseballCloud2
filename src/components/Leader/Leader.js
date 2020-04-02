import React from 'react';
import '../../css/style.css';
import {Link} from 'react-router-dom';

const Leader = ({
  batter_name,
  age,
  school,
  teams,
  exit_velocity,
  launch_angle,
  distance,
  favorite,
  id,
  pitcher,
  getProfile,
  changeFavorite,
  number,
}) => (

  <div className="leaderboards__table-row">
    <div className="leaderboards__table-col leaderboards__table-col--rank">
      {number}
    </div>
    {/* <div className="leaderboards__table-col leaderboards__table-col--batter">
      {batter_name}
    </div> */}
    <Link 
      onClick={getProfile}
      className="leaderboards__table-col leaderboards__table-col--batter" 
      to={{ pathname: `profile/${id}`, state: id }}
    >
        {batter_name}
    </Link>
    <div className="leaderboards__table-col leaderboards__table-col--age">
      {age}
    </div>
    <div className="leaderboards__table-col leaderboards__table-col--school">
      {school.name}
    </div>
    <div className="leaderboards__table-col leaderboards__table-col--teams">
      {teams[0].name}
    </div>
    <div className="leaderboards__table-col leaderboards__table-col--velocity">
      {exit_velocity}
    </div>
    <div className="leaderboards__table-col leaderboards__table-col--angle">
      {launch_angle || '-'}
    </div>
    <div className="leaderboards__table-col leaderboards__table-col--distance">
      {distance}
    </div>
    <div className="leaderboards__table-col leaderboards__table-col--favorite">
      <button href="#" className="leaderboards__table-like" onClick={changeFavorite}>
        {!favorite 
          ? 
            <i className="leaderboards__blue-icon fa fa-heart-o" aria-hidden="true"></i>
          :
            <i className="leaderboards__blue-icon fa fa-heart" aria-hidden="true"></i>
        }
      </button>
    </div>
  </div>
);

export default Leader;