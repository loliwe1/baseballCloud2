import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import FilterBattingLogInput from '../../../Form/FilterBattingLogInput/FilterBattingLogInput';
import NewFilterSelect from '../../../Form/NewFilterSelect';
import { PITCHING } from '../../../../utils/constants';

const PitchingLogForm = ({ filterName, filterPitchType }) => (
  <Form
    onSubmit={() => {}}
    render={() => (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
        <Field
          name="table-search"
          component={FilterBattingLogInput}
          onChange={filterName}
        />
        <Field
          name="pitch-type"
          component={NewFilterSelect}
          onChange={filterPitchType}
          title="Pitch Type"
          options={PITCHING}
        />
      </div>
    )}
  />
);

PitchingLogForm.propTypes = {
  filterName: PropTypes.func.isRequired,
  filterPitchType: PropTypes.func.isRequired,
};

export default PitchingLogForm;
