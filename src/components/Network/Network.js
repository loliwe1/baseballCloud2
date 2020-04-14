import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import PlayerContainer from '../Player';
import NetworkFiltersForm from '../NetworkFiltersForm';
import FilterInputSearchName from '../Form/FilterInputSearchName/FilterInputSearchName';
import NoInfo from '../NoInfo/NoInfo';
import Spinner from '../Spinner/Spinner';
import Pagination from '../Pagination';

const Network = ({
  network,
  filterNetworkName,
  fetching,
  count,
  filter,
  input,
  getOffset,

}) => (
  <main className="network">
    <header className="network__header">
      <h1 className="network__title">
        Network
      </h1>
      <NetworkFiltersForm
        filter={filter}
      />
    </header>

    <Form
      onSubmit={() => {}}
      render={() => (
        <Field
          name="table-search"
          component={FilterInputSearchName}
          onChange={filterNetworkName}
          networkCount={network.total_count}
        />
      )}
    />

    <div className="network__table">
      <div className="network__table-layout">
        <div className="network__table-header">
          <div className="network__table-col network__table-col--name">
            Player Name
          </div>
          <div className="network__table-col network__table-col--sessions">
            Sessions
          </div>
          <div className="network__table-col network__table-col--school">
            School
          </div>
          <div className="network__table-col network__table-col--team">
            Teams
          </div>
          <div className="network__table-col network__table-col--age">
            Age
          </div>
          <div className="network__table-col network__table-col--favorite">
            Favorite
          </div>
        </div>
        {fetching
          ? (
            <div style={{
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            >
              <Spinner />
            </div>
          ) : (network.profiles && network.profiles.length === 0) ? (
            <NoInfo />
          ) : (
            <div className="network__table-content">
              {network &&
                  network.profiles.map((player) => (
                    <PlayerContainer
                      key={player.id}
                      id={player.id}
                      first_name={player.first_name}
                      last_name={player.last_name}
                      school={player.school}
                      teams={player.teams}
                      age={player.age}
                      favorite={player.favorite}
                      events={player.events}
                      filter={filter}
                      input={input}
                    />
                  ))}
            </div>
          )}
      </div>
      {network.total_count && (
        <Pagination
          getOffset={getOffset}
          total={network.total_count}
          count={count}
        />
      )}
    </div>
  </main>
);

Network.propTypes = {
  network: PropTypes.objectOf(PropTypes.any).isRequired,
  filterNetworkName: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  filter: PropTypes.func.isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  getOffset: PropTypes.func.isRequired,
};


export default Network;
