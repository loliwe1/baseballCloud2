import React from 'react';
import { Form, Field } from 'react-final-form'; 
import '../../css/style.css';
import FilterInput from '../Form/FilterInput/FilterInput';
import FilterSelect from '../Form/FilterSelect/FilterSelect';

const NetworkFiltersForm = ({
    filterNetworkSchool, 
    filterNetworkTeam,
    filterNetworkPosition,
    filterNetworkAge,
    filterNetworkFavorite,
    filterNetworkCount,
}) => (
    <Form
     onSubmit={()=> console.log(1)}
     render = {({handleSubmit}) => (
    <div className="network__filters">
    <Field 
      name = 'school'
      component={FilterInput}
      type='text'
      placeholder="School"
      onChange={filterNetworkSchool}
      divClassName="network__filter"
      inputClassName="network__filter-input network__filter-input--school"
      spanClassName='network__filter-icon'
    />

    <Field 
      name = 'team'
      component={FilterInput}
      type='text'
      placeholder="Team"
      onChange={filterNetworkTeam}
      divClassName="network__filter"
      inputClassName="network__filter-input network__filter-input--team"
      spanClassName='network__filter-icon'
    />

    <Field
      name='position'
      component={FilterSelect}
      onChange={filterNetworkPosition}
      label='Position:'
      divClassName='network__filter'
      divDropClassName='network__filter-dropdown'
      divValClassName='network__filter-value'
      labelClassName='network__dropdown-value'
      selectClassName='network__dropdown-value'
      options = {
        [ 
          {value: '', name: 'All'},
          {value: 'catcher', name: 'Catcher'},
          {value: 'first_base', name: 'First Base'},
          {value: 'second_base', name: 'Second Base'},
          {value: 'shortstop', name: 'Shortstop'},
          {value: 'third_base', name: 'Third Base'},
          {value: 'outfield', name: 'Outfield'},
          {value: 'pitcher', name: 'Pitcher'},
        ]}
    />

    <Field 
      name = 'age'
      component={FilterInput}
      type='number'
      placeholder="Age"
      onChange={filterNetworkAge}
      divClassName="network__filter"
      inputClassName="network__filter-input network__filter-input--age"
      spanClassName='network__filter-icon'
    />

    
    <Field
      name='favorite'
      component={FilterSelect}
      onChange={filterNetworkFavorite}
      label='All:'
      divClassName='network__filter'
      divDropClassName='network__filter-dropdown'
      divValClassName='network__filter-value'
      labelClassName='network__dropdown-value'
      selectClassName='network__dropdown-value'
      options = {
        [ 
          {value: '', name: 'All'},
          {value: '1', name: 'Favorite'},
        ]}
    />

    <Field
      name='profiles_count'
      component={FilterSelect}
      onChange={filterNetworkCount}
      label='Show:'
      divClassName='network__filter'
      divDropClassName='network__filter-dropdown'
      divValClassName='network__filter-value'
      labelClassName='network__dropdown-value'
      selectClassName='network__dropdown-value'
      options = {
        [ 
          {value: '10', name: 10},
          {value: '15', name: 15},
          {value: '25', name: 25},
        ]}
    />

  </div>
  )}
  />
);

export default NetworkFiltersForm;