import React from 'react'
import '../../../css/style.css';
import {Form, Field} from 'react-final-form';
import FilterInput from '../../Form/FilterInput/FilterInput';
import FilterSelect from '../../Form/FilterSelect/FilterSelect';

const LeaderBoardsFilters = ({
    filterDate,
    filterPosition,
    filterFavorite,
    filterAge,
    filterSchool,
    filterTeam,
}) => (

    <Form
      onSubmit={()=> console.log(1)}
      render = {({handleSubmit}) => (
    <div className="leaderboards__filter-list">
    <Field
      name='favorite'
      component={FilterSelect}
      onChange={filterDate}
      label='Date'
      divClassName='leaderboards__filter'
      divDropClassName='leaderboards__filter-dropdown'
      divValClassName='leaderboards__filter-value'
      labelClassName='leaderboards__dropdown-value'
      options = {
        [ 
          {value: '', name: 'All'},
          {value: 'last_week', name: 'Last Week'},
          {value: 'last_month', name: 'Last Month'},
        ]}
    />

    <Field 
      name = 'school'
      component={FilterInput}
      type='text'
      placeholder="School"
      onChange={filterSchool}
      divClassName="leaderboards__filter"
      inputClassName="leaderboards__filter-input leaderboards__filter-input--school"
      spanClassName='leaderboards__filter-icon'
    />

    <Field 
      name = 'team'
      component={FilterInput}
      type='text'
      placeholder="Team"
      onChange={filterTeam}
      divClassName="leaderboards__filter"
      inputClassName="leaderboards__filter-input leaderboards__filter-input--team"
      spanClassName='leaderboards__filter-icon'
    />

    <Field
      name='position'
      component={FilterSelect}
      onChange={filterPosition}
      label='Position:'
      divClassName='leaderboards__filter'
      divDropClassName='leaderboards__filter-dropdown'
      divValClassName='leaderboards__filter-value'
      labelClassName='leaderboards__dropdown-value'
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
      onChange={filterAge}
      divClassName="leaderboards__filter"
      inputClassName="leaderboards__filter-input leaderboards__filter-input--age"
      spanClassName='leaderboards__filter-icon'
    />

    <Field
      name='favorite'
      component={FilterSelect}
      onChange={filterFavorite}
      label='All:'
      divClassName='leaderboards__filter'
      divDropClassName='leaderboards__filter-dropdown'
      divValClassName='leaderboards__filter-value'
      labelClassName='leaderboards__dropdown-value'
      selectClassName='network__dropdown-value'
      options = {
        [ 
          {value: '', name: 'All'},
          {value: '1', name: 'Favorite'},
        ]
      }
    />

  </div>
)}
/>
)

export default LeaderBoardsFilters;

