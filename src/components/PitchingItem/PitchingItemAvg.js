import React from 'react';
import '../../css/style.css';

const PitchingItemAvg = ({pitch_type, velocity, spin_rate}) =>(
 <div className="profile-table__values-row">
  <div className="profile-table__values-col profile-table__values-col--name">{pitch_type}</div>
  <div className="profile-table__values-col">{velocity}</div>
  <div className="profile-table__values-col">{spin_rate}</div>
 </div>
);


export default PitchingItemAvg;