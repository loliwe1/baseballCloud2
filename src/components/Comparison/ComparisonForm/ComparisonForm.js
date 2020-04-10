import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import ComparisonSearch from '../../Form/ComparisonSearch/ComparisonSearch';
import ComprasionSelect from '../../Form/ComprasionSelect';

const ComparisonForm = ({
  searchPlayer,
  secondProfile,
  profileNames,
  chooseProfile,
}) => (
  <Form
    onSubmit={() => {}}
    render={() => (
      <div>
        <Field
          name="selected-player"
          component={ComparisonSearch}
          onChange={searchPlayer}
          defaultValue={secondProfile.first_name ? `${secondProfile.first_name} ${secondProfile.last_name}` : ''}
        />
        <div>
          {profileNames && profileNames.length !== 0 &&
          (
            <Field
              name="prof"
              component={ComprasionSelect}
              onChange={chooseProfile}
              options={profileNames.map((v) => ({ value: v.id, name: `${v.first_name} ${v.last_name}` }))}
            />
          )}
        </div>
      </div>
    )}
  />
);

ComparisonForm.propTypes = {
  searchPlayer: PropTypes.func.isRequired,
  profileNames: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  chooseProfile: PropTypes.func.isRequired,
  secondProfile: PropTypes.objectOf(PropTypes.any),
};

ComparisonForm.defaultProps = {
  secondProfile: null,
};

export default ComparisonForm;
