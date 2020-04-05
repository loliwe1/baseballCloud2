import React from 'react';
import '../../css/style.css';
import LeaderBoardsBatt from './LeaderBoardsBatt/LeaderBoardsBatt';
import LeaderBoardsPitch from './LeaderBoardsPitch/LeaderBoardsPitch';
import LeaderBoardsTabs from './LeaderBoardsTabs/';
import LeaderBoardsFilters from './LeaderBoardsFilters';
import {Form, Field} from 'react-final-form';
import NewFilterSelect from '../Form/NewFilterSelect';

const LeaderBoards = ({
  leaderBoard,
  openPitch,
  pitching,
  openBatting,
  filterVelocity,
  velRef,
  fetching,
  filter,
  input,
  title,

}) => (
    <main className="leaderboards">
      <header className="leaderboards__header">
        <h1 className="leaderboards__title">
          Leaderboards
        </h1>
    <LeaderBoardsFilters filter={filter}/>

      </header>

      <div className="leaderboards__table">
        <div className="leaderboards__table-sort">
          <LeaderBoardsTabs openBatting={openBatting} openPitch={openPitch}/>

          <Form
            onSubmit={()=> console.log(1)}
            render = {({handleSubmit}) => (
          <div className="leaderboards__sort">
            
            {!pitching ?
                <Field
                  name='batting'
                  component={NewFilterSelect}
                  onChange={filterVelocity}
                  title={title}
                  options = {
                  [
                    {value: 'exit_velocity', name: 'Exit Velocity'},
                    {value: 'carry_distance', name: 'Carry Distance'},
                  ]}
                />
              :
                <Field
                  name='pitching'
                  component={NewFilterSelect}
                  onChange={filterVelocity}
                  title={title}
                  options = {
                  [
                    {value: 'pitch_velocity', name: 'Pitch Velocity'},
                    {value: 'spin_rate', name: 'Spin Rate'},
                  ]}
                />
            }
          </div>
          )}
          />
        </div>

        {!pitching 
          ? <LeaderBoardsBatt leaderBoard={leaderBoard} fetching={fetching} filter={filter} input={input}/>
          : <LeaderBoardsPitch leaderBoard={leaderBoard} fetching={fetching} filter={filter} input={input}/>
        }
          
      </div>
    </main>
);

export default LeaderBoards;
