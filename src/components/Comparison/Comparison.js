import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/modal.css';
import userpick from '../../assets/img/userpic.png';
import Spinner from '../Spinner/Spinner';
import ComparisonForm from './ComparisonForm/ComparisonForm';
import ComparsionTopTable from './ComparsionTopTable/ComparsionTopTable';
import ComprasionSortButton from './ComprasionSortButton/ComprasionSortButton';
import ComparsionBottomTable from './ComparsionBottomTable/ComparsionBottomTable';


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
          <img
            src={userpick}
            width="40"
            height="40"
            alt="userpic"
            className="profile-table__current-img"
          />
          <a href="#" className="profile-table__current-name">
            {first_name}
            &nbsp;
            {last_name}
          </a>
        </div>
        <div className="profile-table__select-player" style={{ position: 'relative' }}>
          {fetching && (
            <div style={{
              marginRight: '10px',
              position: 'absolute',
              top: '10px',
              left: '-60px',
            }}
            >
              <Spinner style={{ minHeight: '0' }} />
            </div>
          )}
          <img
            src={userpick}
            width="40"
            height="40"
            alt="userpic"
            className="profile-table__select-img"
          />
          <ComparisonForm
            searchPlayer={searchPlayer}
            profileNames={profileNames}
            chooseProfile={chooseProfile}
            secondProfile={secondProfile}
          />
        </div>
      </div>

      <ComparsionTopTable
        age={age}
        feet={feet}
        inches={inches}
        weight={weight}
        secondProfile={secondProfile}
      />

      <div className="profile-table__values">
        <div
          className="profile-table__sorting"
          style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}
        >
          <ComprasionSortButton
            spinRate={spinRate}
            openTopValues={openTopValues}
            topValuesOpen={topValuesOpen}
          />
          {topValuesOpen && (
            <div
              className="modalWrap"
              style={{ margin: '7px 0px 0px 52px' }}
            >
              <button type="button" onClick={showPitchVel} className="modalWrap-link">Pitch Velocity</button>
              <button type="button" onClick={showSpinRate} className="modalWrap-link">Spin Rate</button>
            </div>
          )}
        </div>
        <ComparsionBottomTable
          pitchVel={pitchVel}
          topValues={topValues}
          secondProfTopValues={secondProfTopValues}
          spinRate={spinRate}
        />
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
  secondProfile: PropTypes.objectOf(PropTypes.any),
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
  secondProfile: null,
};

export default Comparison;
