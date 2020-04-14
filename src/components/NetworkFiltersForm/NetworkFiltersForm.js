import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FilterInput from '../Form/FilterInput';
import NewFilterSelect from '../Form/NewFilterSelect';
import { POSITION, FAVORITE, SHOW } from '../../utils/constants';

const NetworkFiltersForm = ({
  filterNetworkSchool,
  filterNetworkTeam,
  filterNetworkPosition,
  filterNetworkAge,
  filterNetworkFavorite,
  filterNetworkCount,
}) => (
  <Form
    onSubmit={() => {}}
    render={() => (
      <div className="network__filters">
        <Field
          name="school"
          component={FilterInput}
          type="text"
          placeholder="School"
          onChange={filterNetworkSchool}
          inputType="school"
        />

        <Field
          name="team"
          component={FilterInput}
          type="text"
          placeholder="Team"
          onChange={filterNetworkTeam}
          inputType="team"
        />

        <Field
          name="position"
          component={NewFilterSelect}
          onChange={filterNetworkPosition}
          title="Position"
          options={POSITION}
        />

        <Field
          name="age"
          component={FilterInput}
          type="number"
          placeholder="Age"
          onChange={filterNetworkAge}
          inputType="age"
        />

        <Field
          name="favorite"
          component={NewFilterSelect}
          onChange={filterNetworkFavorite}
          title="All"
          defTitle=""
          options={FAVORITE}
        />

        <Field
          name="show"
          component={NewFilterSelect}
          onChange={filterNetworkCount}
          title="10"
          defTitle="Show"
          options={SHOW}
        />

      </div>
    )}
  />
);
NetworkFiltersForm.propTypes = {
  filterNetworkSchool: PropTypes.func.isRequired,
  filterNetworkTeam: PropTypes.func.isRequired,
  filterNetworkPosition: PropTypes.func.isRequired,
  filterNetworkAge: PropTypes.func.isRequired,
  filterNetworkFavorite: PropTypes.func.isRequired,
  filterNetworkCount: PropTypes.func.isRequired,
};

export default NetworkFiltersForm;
