import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';
import { Form, Field } from 'react-final-form';
import LeaderBoardsBatt from './LeaderBoardsBatt/LeaderBoardsBatt';
import LeaderBoardsPitch from './LeaderBoardsPitch/LeaderBoardsPitch';
import LeaderBoardsTabs from './LeaderBoardsTabs';
import LeaderBoardsFilters from './LeaderBoardsFilters';
import NewFilterSelect from '../Form/NewFilterSelect';

const LeaderBoards = ({
  leaderBoard,
  openPitch,
  pitching,
  openBatting,
  filterVelocity,
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
      <LeaderBoardsFilters filter={filter} />
    </header>
    <div className="leaderboards__table">
      <div className="leaderboards__table-sort">
        <LeaderBoardsTabs openBatting={openBatting} openPitch={openPitch} />
        <Form
          onSubmit={() => console.log(1)}
          render={() => (
            <div className="leaderboards__sort">
              {!pitching ?
                (
                  <Field
                    name="batting"
                    component={NewFilterSelect}
                    onChange={filterVelocity}
                    title={title}
                    options={
                  [
                    { value: 'exit_velocity', name: 'Exit Velocity' },
                    { value: 'carry_distance', name: 'Carry Distance' },
                  ]
                }
                  />
                )
                :
                (
                  <Field
                    name="pitching"
                    component={NewFilterSelect}
                    onChange={filterVelocity}
                    title={title}
                    options={
                  [
                    { value: 'pitch_velocity', name: 'Pitch Velocity' },
                    { value: 'spin_rate', name: 'Spin Rate' },
                  ]
                }
                  />
                )}
            </div>
          )}
        />
      </div>
      {!pitching
        ?
        (
          <LeaderBoardsBatt
            leaderBoard={leaderBoard}
            fetching={fetching}
            filter={filter}
            input={input}
          />
        )
        :
        (
          <LeaderBoardsPitch
            leaderBoard={leaderBoard}
            fetching={fetching}
            filter={filter}
            input={input}
          />
        )}
    </div>
  </main>
);


LeaderBoards.propTypes = {
  leaderBoard: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  openPitch: PropTypes.func.isRequired,
  pitching: PropTypes.bool.isRequired,
  openBatting: PropTypes.func.isRequired,
  filterVelocity: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  filter: PropTypes.func.isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
};

export default LeaderBoards;
