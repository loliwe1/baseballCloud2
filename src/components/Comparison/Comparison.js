import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';
import '../../css/modal.css';
import userpick from '../../img/userpic.png';
import { Form, Field } from 'react-final-form';
import ComparisonSearch from '../Form/ComparisonSearch/ComparisonSearch';
import ComprasionSelect from '../Form/ComprasionSelect';
import Spinner from '../Spinner/Spinner';


const Comparison = ({
  first_name,
  last_name,
  age,
  feet,
  inches,
  weight,
  searchPlayer,
  profileNames,
  chooseProfile,
  secondProfile,
  topValuesOpen,
  openTopValues,
  showPitchVel,
  showSpinRate,
  spinRate,
  pitchVel,
  topValues,
  secondProfTopValues,
  fetching,
}) => (
    <li className="profile-table__tab profile-table__tab--comparison">
    <div className="profile-table__players-table">
  <div className="profile-table__names">
  <div className="profile-table__current-player">
  <img src={userpick} width="40" height="40" alt="userpic"
    className="profile-table__current-img"/>
  <a href="#" className="profile-table__current-name">{first_name} {last_name}</a>
</div>
<div className="profile-table__select-player" style={{position: 'relative'}}>
  {fetching &&
      <div style={{marginRight: '10px', position: 'absolute', top: '10px', left: '-60px'}}>
        <Spinner style={{minHeight: '0'}}/> 
      </div>
  }
  <img src={userpick} width="40" height="40" alt="userpic"
    className="profile-table__select-img"/>
    <Form
      onSubmit={()=> console.log(1)}
      render = {() => (
          <div>
            <Field
              name='selected-player'
              component={ComparisonSearch}
              onChange={searchPlayer}
              defaultValue={secondProfile['first_name'] ? `${secondProfile.first_name} ${secondProfile.last_name}` : ''}
            />
            <div>
            {profileNames && profileNames.length !== 0 && 
            <Field
              name='prof'
              component={ComprasionSelect}
              onChange={chooseProfile}
              options = {profileNames.map((v)=> ({value: v.id, name: `${v.first_name} ${v.last_name}`}))}
            />
          }
          </div>
          </div>
        )}
    />
</div>
</div>

<div className="profile-table__info-table">
<div className="profile-table__info-row">
  <div className="profile-table__info-col">Age: {age}</div>
      <div
        className="profile-table__info-col"
      >
        Age: { secondProfile.age || '-' }
      </div>
</div>
<div className="profile-table__info-row">
  <div className="profile-table__info-col">Height: {feet} ft {inches} in</div>
  <div
    className="profile-table__info-col"
  >
    Height: {secondProfile['feet'] ? `${secondProfile.feet} ft ${secondProfile.inches} in` : '-' }</div>
</div>
<div className="profile-table__info-row">
  <div className="profile-table__info-col">Weight: {weight} lbs</div>
      <div
        className="profile-table__info-col"
      >
        Weight: {secondProfile['weight'] ? `${secondProfile.weight} lbs` : '-'}
      </div>
</div>
</div>
<div className="profile-table__values">
<div className="profile-table__sorting" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
  <button
    className="profile-table__sorting-btn" 
    onClick={openTopValues}
    style={{width: '250px'}}
  >
    Top Pitching Values - <span className="js-value">{!spinRate ? 'Velocity' : 'Spin Rate'}</span>
    {!topValuesOpen ? 
    <span className="profile-table__sorting-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
      <path fill="#48BBFF" fillRule="nonzero"
        d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
      </path>
    </svg>
  </span>
  :
  <span className="profile-table__sorting-icon" style={{transform: 'rotate(180deg)'}}>
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
     <path fill="#48BBFF" fillRule="nonzero"
       d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
     </path>
   </svg>
  </span>
}
  </button>
  {topValuesOpen &&
<div
  className='modalWrap'
  style={{margin: '7px 0px 0px 52px'}}
  >
    <button onClick={showPitchVel} className='modalWrap-link'>Pitch Velocity</button>
    <button onClick={showSpinRate} className='modalWrap-link'>Spin Rate</button>
  </div>
}
</div>

<div className="profile-table__values-table">
  <div className="profile-table__values-row">
    <div className="profile-table__values-col profile-table__values-col--name">Fastball</div>
    <div className="profile-table__values-col">
    {topValues && topValues.length !==0 ? 
    topValues.map((v, i) => (
        (v.pitch_type === 'Fastball' && spinRate) ? v.spin_rate :
         (v.pitch_type === 'Fastball' && pitchVel) ? v.velocity : ''
    ) )
   : '-'}
    </div>
  
    <div className="profile-table__values-col">
      {secondProfTopValues && secondProfTopValues.length !==0 ? 
      secondProfTopValues.map((v) => (
          (v.pitch_type === 'Fastball' && spinRate) ? v.spin_rate :
          (v.pitch_type === 'Fastball' && pitchVel) ? v.velocity : ''
      ) )
    : '-'}
    </div>
  </div>
  <div className="profile-table__values-row">
    <div className="profile-table__values-col profile-table__values-col--name">Curveball</div>
    <div className="profile-table__values-col">
    {topValues && topValues.length !==0 ? 
    topValues.map((v, i) => (
        (v.pitch_type === 'Curveball' && spinRate) ? v.spin_rate :
         (v.pitch_type === 'Curveball' && pitchVel) ? v.velocity : ''
    ) )
   : '-'}
    </div>
    <div className="profile-table__values-col">
      {secondProfTopValues && secondProfTopValues.length !==0 ? 
      secondProfTopValues.map((v) => (
          (v.pitch_type === 'Curveball' && spinRate) ? v.spin_rate :
          (v.pitch_type === 'Curveball' && pitchVel) ? v.velocity : ''
      ) )
    : '-'}
    </div>
  </div>
  <div className="profile-table__values-row">
    <div className="profile-table__values-col profile-table__values-col--name">Changeup</div>
    <div className="profile-table__values-col">
    {topValues && topValues.length !==0 ? 
    topValues.map((v, i) => (
        (v.pitch_type === 'Changeup' && spinRate) ? v.spin_rate :
         (v.pitch_type === 'Changeup' && pitchVel) ? v.velocity : ''
    ) )
   : '-'}
    </div>
    <div className="profile-table__values-col">
      {secondProfTopValues && secondProfTopValues.length !==0 ? 
      secondProfTopValues.map((v) => (
          (v.pitch_type === 'Changeup' && spinRate) ? v.spin_rate :
          (v.pitch_type === 'Changeup' && pitchVel) ? v.velocity : ''
      ) )
    : '-'}
    </div>
  </div>
  <div className="profile-table__values-row">
    <div className="profile-table__values-col profile-table__values-col--name">Slider</div>
    <div className="profile-table__values-col">
    {topValues && topValues.length !==0 ? 
    topValues.map((v, i) => (
        (v.pitch_type === 'Slider' && spinRate) ? v.spin_rate :
         (v.pitch_type === 'Slider' && pitchVel) ? v.velocity : ''
    ) )
   : '-'}
    </div>
    <div className="profile-table__values-col">
      {secondProfTopValues && secondProfTopValues.length !==0 ? 
      secondProfTopValues.map((v) => (
          (v.pitch_type === 'Slider' && spinRate) ? v.spin_rate :
          (v.pitch_type === 'Slider' && pitchVel) ? v.velocity : ''
      ) )
    : '-'}
    </div>
  </div>
</div>
</div>
</div>
</li>
);

Comparison.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  feet: PropTypes.number.isRequired,
  inches: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  searchPlayer: PropTypes.func.isRequired,
  profileNames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  chooseProfile: PropTypes.func.isRequired,
  secondProfile: PropTypes.object.isRequired,
  topValuesOpen: PropTypes.bool.isRequired,
  openTopValues: PropTypes.func.isRequired,
  showPitchVel: PropTypes.func.isRequired,
  showSpinRate: PropTypes.func.isRequired,
  spinRate: PropTypes.bool.isRequired,
  pitchVel: PropTypes.bool.isRequired,
  topValues: PropTypes.string,
  secondProfTopValues: PropTypes.PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  fetching: PropTypes.bool.isRequired,
};

Comparison.defaultProps = {
  topValues: '',
  secondProfTopValues: null,
}

export default Comparison;