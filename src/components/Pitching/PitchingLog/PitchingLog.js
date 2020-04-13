import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/style.css';
import '../../../css/modal.css';

import Pagination from '../../Pagination';
import NoInfo from '../../NoInfo/NoInfo';
import Spinner from '../../Spinner/Spinner';
import PitchingLogItem from '../PitchingLogItem';
import PitchingLogForm from './components/PitchingLogForm';


const PitchingLog = ({
  filterName,
  filterPitchType,
  pitchingLog,
  total,
  count,
  getOffset,
  fetching,
}) => (
  <li className="profile-table__tab profile-table__tab--session">

    <PitchingLogForm filterName={filterName} filterPitchType={filterPitchType} />

    <div>
      <div
        style={{
          color: '#414f5a', fontSize: 18, fontWeight: 400, lineHeight: 1.25,
        }}
      >
        Pitching Log
      </div>
      <div className="profile-table__values-table">
        <div
          className="profile-table__values-row"
          style={{
            background: 'white',
            fontSize: '16px',
            color: '#667784',
            fontWeight: 300,
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
          }}
        >
          <div>Date</div>
          <div>Batter Name</div>
          <div>Pitch Type</div>
          <div>Pitch Call</div>
          <div>Velocity</div>
          <div>Spin Rate</div>
          <div>Spin Axis</div>
        </div>
        {
          fetching ? (
            <div style={{ height: '300px' }}>
              <Spinner />
            </div>
          ) : (!fetching && pitchingLog && pitchingLog.length !== 0) ? (
            pitchingLog.map((v, i) => (
              <PitchingLogItem
                key={i}
                date={v.date}
                pitchType={v.pitch_type}
                pitchCall={v.pitch_call}
                velocity={v.velocity}
                spinRate={v.spin_rate}
                spinAxis={v.spin_axis}
                tilt={v.tilt}
                releaseHeight={v.release_height}
                releaseSide={v.release_side}
                extension={v.extension}
                verticalBreak={v.vertical_break}
                horizontalBreak={v.horizontal_break}
                heightAtPlate={v.height_at_plate}
                batterName={v.batter_name}
                batterHandedness={v.batter_handedness}
              />
            ))
          ) : <NoInfo />
            }
      </div>
    </div>
    <Pagination count={count} total={total} getOffset={getOffset} />
  </li>
);

PitchingLog.propTypes = {
  filterName: PropTypes.func.isRequired,
  filterPitchType: PropTypes.func.isRequired,
  pitchingLog: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  getOffset: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
};


export default PitchingLog;
