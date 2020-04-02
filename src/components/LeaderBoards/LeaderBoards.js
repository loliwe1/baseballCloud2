import React from 'react';
import '../../css/style.css';
import LeaderBoardsBatt from './LeaderBoardsBatt/LeaderBoardsBatt';
import LeaderBoardsPitch from './LeaderBoardsPitch/LeaderBoardsPitch';
import LeaderBoardsTabs from './LeaderBoardsTabs/';
import LeaderBoardsFilters from './LeaderBoardsFilters';
import {Form, Field} from 'react-final-form';
import LeaderBoardsSort from '../Form/LeaderboardsSort/LeaderBoardsSort';

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
            <div className="leaderboards__sort-dropdown">
            {!pitching ? 
              <Field
                name = 'batting'
                component={LeaderBoardsSort}
                onChange={filterVelocity}
                label='Exit Velocity'
                options = {
                  [ 
                    {value: 'exit_velocity', name: 'Exit Velocity'},
                    {value: 'carry_distance', name: 'Carry Distance'},
                  ]
                }
              />
            :
              <Field
                name = 'pitching'
                component={LeaderBoardsSort}
                onChange={filterVelocity}
                label='Pitch Velocity'
                options = {
                [ 
                  {value: 'pitch_velocity', name: 'Pitch Velocity'},
                  {value: 'spin_rate', name: 'Spin Rate'},
                ]
                }
              />
            }
              <span className="leaderboards__sort-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
                  <path fill="#48BBFF" fillRule="nonzero"
                    d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
                  </path>
                </svg>
              </span>
              <div className="leaderboards__dropdown hide">

              </div>
            </div>
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
