import React from 'react';
import '../../css/style.css';
import PlayerContainer from '../Player';
import NetworkTabs from '../NetworkTabs';
import NetworkFiltersForm from '../NetworkFiltersForm';
import { Form, Field } from 'react-final-form';
import FilterInputSearchName from '../Form/FilterInputSearchName/FilterInputSearchName';
import NoInfo from '../NoInfo/NoInfo';
import Spinner from '../Spinner/Spinner';
import Pagination from '../Pagination'

const Network = ({
  network,
  getNetwork,
  getSecondNetwork,
  filterNetworkName,
  fetching,
  count,
  filter,
  input,
  fetchDataFinish,
  fetchDataStart,
  getOffset,

}) => (
    <main className="network">
      <header className="network__header">
        <h1 className="network__title">
          Network
        </h1>

        <NetworkFiltersForm
          filter={filter}
          fetchDataStart={fetchDataStart}
          fetchDataFinish={fetchDataFinish}
        />
      </header>

    <Form
     onSubmit={()=> console.log(1)}
     render = {({handleSubmit}) => (  
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
        ? 
          <Spinner/>
        : (network.profiles && network.profiles.length === 0)
        ?
         <NoInfo/>
        : 
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
              ))
            }

          </div>
        }
        </div>
        {network.total_count &&

          <Pagination 
            getOffset={getOffset}
            total={network.total_count}
            count={count}
          />
        }
      </div>
    </main>
);

export default Network;
