import React from 'react';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import BattingLogItem from '../BattingLogItem';
import FilterBattingLogInput from '../../Form/FilterBattingLogInput/FilterBattingLogInput';
import NewFilterSelect from '../../Form/NewFilterSelect';
import Pagination from '../../Pagination';
import NoInfo from '../../NoInfo/NoInfo';
import Spinner from '../../Spinner/Spinner';
import { BATTING_LOG } from '../../../utils/constants';

const BattingLog = ({
  battingLog,
  count,
  total,
  getOffset,
  filterName,
  filterPitchType,
  fetching,
}) => (
  <li className="profile-table__tab profile-table__tab--session">

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
            options={BATTING_LOG}
          />
        </div>
      )}
    />
    <div>
      <div
        style={{
          color: '#414f5a',
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 1.25,
        }}
      >
        Batting Log
      </div>
      <div className="profile-table__values-table">
        <div
          className="profile-table__values-row"
          style={{
            background: 'white',
            fontSize: '16px',
            color: '#667784',
            fontWeight: 300,
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
          }}
        >
          <div>Date</div>
          <div>Pitcher Name</div>
          <div>Pitcher Handedness</div>
          <div>Pitch Type</div>
          <div>Pitch Call</div>
        </div>
        { fetching ? (
          <div style={{ height: '300px' }}><Spinner /></div>
        ) : !fetching && battingLog && battingLog.length !== 0 ? (
          battingLog.map((v, i) => (
            <BattingLogItem
              key={i}
              date={v.date}
              pitcherName={v.pitcher_name}
              pitcherHandedness={v.pitcher_handedness}
              pitchType={v.pitch_type}
              pitchCall={v.pitch_call}
              exitVelocity={v.exit_velocity}
              launchAngle={v.launch_angle}
              direction={v.direction}
              distance={v.distance}
              hitSpinRate={v.hit_spin_rate}
              hangTime={v.hang_time}
              pitcherDatraksId={v.pitcher_datraks_id}
            />
          ))
        ) : (
          <NoInfo />
        ) }
      </div>
    </div>
    <Pagination count={count} total={total} getOffset={getOffset} />
  </li>
);

BattingLog.propTypes = {
  battingLog: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  getOffset: PropTypes.func.isRequired,
  filterName: PropTypes.func.isRequired,
  filterPitchType: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
};


export default BattingLog;
