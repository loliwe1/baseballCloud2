import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FilterInput from '../../Form/FilterInput';
import NewFilterSelect from '../../Form/NewFilterSelect';
import { POSITION, DATE, FAVORITE } from '../../../utils/constants';

const LeaderBoardsFilters = ({
  filterDate,
  filterPosition,
  filterFavorite,
  filterAge,
  filterSchool,
  filterTeam,
}) => (

  <Form
    onSubmit={() => {}}
    render={() => (
      <div className="leaderboards__filter-list">

        <Field
          name="date"
          component={NewFilterSelect}
          onChange={filterDate}
          title="Date"
          options={DATE}
        />

        <Field
          name="school"
          component={FilterInput}
          type="text"
          placeholder="School"
          onChange={filterSchool}
          inputType="school"
        />

        <Field
          name="team"
          component={FilterInput}
          type="text"
          placeholder="Team"
          onChange={filterTeam}
          inputType="team"
        />

        <Field
          name="position"
          component={NewFilterSelect}
          onChange={filterPosition}
          title="Position"
          options={POSITION}
        />

        <Field
          name="age"
          component={FilterInput}
          type="number"
          placeholder="Age"
          onChange={filterAge}
          inputType="age"
        />

        <Field
          name="favorite"
          component={NewFilterSelect}
          onChange={filterFavorite}
          title="All"
          options={FAVORITE}
        />

      </div>
    )}
  />
);

LeaderBoardsFilters.propTypes = {
  filterDate: PropTypes.func.isRequired,
  filterPosition: PropTypes.func.isRequired,
  filterFavorite: PropTypes.func.isRequired,
  filterAge: PropTypes.func.isRequired,
  filterSchool: PropTypes.func.isRequired,
  filterTeam: PropTypes.func.isRequired,
};

export default LeaderBoardsFilters;
