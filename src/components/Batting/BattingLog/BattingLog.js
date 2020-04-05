import React from 'react';
import '../../../css/style.css';
import '../../../css/modal.css'
import BattingLogItem from '../BattingLogItem';
import { Form, Field } from 'react-final-form';
import FilterBattingLogInput from '../../Form/FilterBattingLogInput/FilterBattingLogInput';
import NewFilterSelect from '../../Form/NewFilterSelect';
import Pagination from '../../Pagination';
import NoInfo from '../../NoInfo/NoInfo';
import Spinner from '../../Spinner/Spinner';

const BattingLog = ({
  battingLog,
  count,
  total,
  getOffset,
  filterName,
  filterPitchType,
  fetching
}) => (
  <li className="profile-table__tab profile-table__tab--session">

      <Form
        onSubmit={()=> console.log(1)}
        render = {({handleSubmit}) => (  
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px',}}> 
            <Field 
              name="table-search"
              component={FilterBattingLogInput}
              onChange={filterName}
            />
           <Field
             name='pitch-type'
             component={NewFilterSelect}
             onChange={filterPitchType}
             title='Pitch Type'
             options={[
              {value: '', name: 'None'},
              {value: 'Four Seam Fastball', name: 'Four Seam Fastball'},
              {value: 'Two Seam Fastball', name: 'Two Seam Fastball'},
              {value: 'Curveball', name: 'Curveball'},
              {value: 'Changeup', name: 'Changeup'},
              {value: 'Slider', name: 'Slider'},
             ]}
           />
          </div>
        )}
  />
    <div>
      <div
        style={{color: '#414f5a', fontSize: 18, fontWeight: 400, lineHeight: 1.25}}
      >
              Batting Log
            </div>
            <div className="profile-table__values-table">
            <div
              className='profile-table__values-row'
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
            {
            fetching 
            ? <div style={{height: '300px'}}><Spinner/></div>
            : !fetching && battingLog && battingLog.length !== 0
            ? battingLog.map((v,i) => (
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
                  hangTime = {v.hang_time}
                  pitcherDatraksId={v.pitcher_datraks_id}
                />
              ))
            : <NoInfo/>
            }
            </div>
            </div>
          <Pagination count={count} total={total} getOffset={getOffset}/>
  </li> 
);

export default BattingLog