import React from 'react';
import {Link} from "react-router-dom";

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
  changeFavorite
}) => {

  return (
    <div className="network__table-row">
    <div className="network__table-col network__table-col--name">
      <Link onClick={getProfile} className="network__table-link"  to={{
            pathname: `profile/${id}`,
            state: id
          }}>
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
      <button className="network__table-like" onClick={changeFavorite}>
      {!favorite 
        ?
          <i className="network__blue-icon fa fa-heart-o" aria-hidden="true"></i>
        : 
          <i className="network__blue-icon fa fa-heart" aria-hidden="true"></i>
      }
      </button>
    </div>
    
  </div>
  );
  
};

export default Player;