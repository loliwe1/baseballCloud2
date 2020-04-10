import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import '../../css/style.css';
import FilterInput from '../Form/FilterInput';
import NewFilterSelect from '../Form/NewFilterSelect';
import { position, favorite, networkShow } from '../../ussets/options';

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
          options={position}
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
          options={favorite}
        />

        <Field
          name="show"
          component={NewFilterSelect}
          onChange={filterNetworkCount}
          title="10"
          defTitle="Show"
          options={networkShow}
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
