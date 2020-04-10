import React from 'react';
import PropTypes from 'prop-types';

const ComparsionTopTable = ({
  age,
  secondProfile,
  feet,
  inches,
  weight,
}) => (
  <div className="profile-table__info-table">
    <div className="profile-table__info-row">
      <div className="profile-table__info-col">
        Age:
        &nbsp;
        {age}
      </div>
      <div className="profile-table__info-col">
        Age:
        &nbsp;
        { secondProfile.age || '-' }
      </div>
    </div>
    <div className="profile-table__info-row">
      <div className="profile-table__info-col">
        Height:
        &nbsp;
        {feet}
        &nbsp;
        ft
        &nbsp;
        {inches}
        &nbsp;
        in
      </div>
      <div className="profile-table__info-col">
        Height:
        &nbsp;
        {secondProfile.feet ? `${secondProfile.feet} ft ${secondProfile.inches} in` : '-' }
      </div>
    </div>
    <div className="profile-table__info-row">
      <div className="profile-table__info-col">
        Weight:
        &nbsp;
        {weight}
        &nbsp;lbs
      </div>
      <div className="profile-table__info-col">
        Weight:
        {secondProfile.weight ? `${secondProfile.weight} lbs` : '-'}
      </div>
    </div>
  </div>
);

ComparsionTopTable.propTypes = {
  age: PropTypes.number.isRequired,
  feet: PropTypes.number.isRequired,
  inches: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  secondProfile: PropTypes.objectOf(PropTypes.any),
};

ComparsionTopTable.defaultProps = {
  secondProfile: null,
};


export default ComparsionTopTable;
