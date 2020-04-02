import React from 'react';
import '../../css/style.css';
import userpick from '../../img/userpic.png';
import Comparison from '../Comparison';
import Pitching from '../Pitching/Pitching';
import Batting from '../Batting';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import ProfileSideBarFormContainer from '../ProfileSideBarForm/ProfileSideBarFormContainer';
import ProfileTabs from '../ProfileTabs';
import BattingLog from '../Batting/BattingLog';

const Profile = ({
  id,
  first_name,
  last_name,
  position,
  position2,
  age,
  weight,
  throws_hand,
  bats_hand,
  feet,
  inches,
  school,
  teams,
  recent_events,
  pitcher_summary,
  openComparison,
  openBatting,
  openPitching,
  activeTab,
  pitchingSum,
  openedForm,
  openForm,
  closeForm,
  profId,
  activeName,
  favorite,
  changeFavorite,
  openBattingLog,

}) => {
  return (
    <div className="profile-container">

    {(!openedForm && activeName) &&
      <ProfileSideBar 
      userpick={userpick}
      first_name={first_name}
      last_name={last_name}
      position={position}
      position2={position2}
      age={age}
      feet={feet}
      inches={inches}
      weight={weight}
      throws_hand={throws_hand}
      bats_hand={bats_hand}
      openForm={openForm}
      profId={profId}
      id={id}
      favorite={favorite}
      changeFavorite={changeFavorite}
    />}
    {
      (!activeName || openedForm) &&
    <ProfileSideBarFormContainer userpick={userpick} closeForm={closeForm}/> 
    }
    {first_name &&
    <main className="profile-main">
      <section className="profile-rates">
        <div className="profile-rates__values-block">
          <h2 className="profile-rates__title">
            Top Pitching Values
          </h2>

          <div className="profile-rates__scores-layout">
            <div className="profile-rates__scores">
              <div className="profile-rates__scores-info">
                <div className="profile-rates__scores-name">
                  Fastball Velocity
                </div>
                <div className="profile-rates__scores-value">
                  {( pitcher_summary && pitcher_summary.length !==0 && pitcher_summary[0].velocity) 
                    ? pitcher_summary[0].velocity 
                    : 
                    'N/A'
                  }
                </div>
              </div>
              <div className="profile-rates__progressbar">
                <svg className="rc-progress-line " viewBox="0 0 100 1" preserveAspectRatio="none">
                  <path className="rc-progress-line-trail" d="M 0.5,0.5
                L 99.5,0.5" strokeLinecap="round" stroke="#eff1f3" strokeWidth="1" fillOpacity="0"></path>
                  <path className="rc-progress-line-path" d="M 0.5,0.5
                L 99.5,0.5" strokeLinecap="round" stroke="#ffd01a" strokeWidth="1" fillOpacity="0"
                    >
                  </path>
                </svg>
              </div>
            </div>

            <div className="profile-rates__scores">
              <div className="profile-rates__scores-info">
                <div className="profile-rates__scores-name">
                  Spin Rate
                </div>
                <div className="profile-rates__scores-value">
                {( pitcher_summary && pitcher_summary.length !==0 && pitcher_summary[0].spin_rate)
                  ? pitcher_summary[0].spin_rate
                  :
                    'N/A'
                }
                </div>
              </div>
              <div className="profile-rates__progressbar">
                <svg className="rc-progress-line " viewBox="0 0 100 1" preserveAspectRatio="none">
                  <path className="rc-progress-line-trail" d="M 0.5,0.5
                L 99.5,0.5" strokeLinecap="round" stroke="#eff1f3" strokeWidth="1" fillOpacity="0"></path>
                  <path className="rc-progress-line-path" d="M 0.5,0.5
                L 99.5,0.5" strokeLinecap="round" stroke="#ffd01a" strokeWidth="1" fillOpacity="0"
                   >
                  </path>
                </svg>
              </div>
            </div>

            <div className="profile-rates__scores">
              <div className="profile-rates__scores-info">
                <div className="profile-rates__scores-name">
                  Pitch Movement
                </div>
                <div className="profile-rates__scores-value">
                {( pitcher_summary && pitcher_summary.length !==0 && pitcher_summary[0].pitch_type)
                  ? 
                    pitcher_summary[0].pitch_type
                  :
                    'N/A'
                }
                </div>
              </div>
              <div className="profile-rates__progressbar">
                <svg className="rc-progress-line " viewBox="0 0 100 1" preserveAspectRatio="none">
                  <path className="rc-progress-line-trail" d="M 0.5,0.5
                L 99.5,0.5" strokeLinecap="round" stroke="#eff1f3" strokeWidth="1" fillOpacity="0"></path>
                  <path className="rc-progress-line-path" d="M 0.5,0.5
                L 99.5,0.5" strokeLinecap="round" stroke="#ffd01a" strokeWidth="1" fillOpacity="0"
                    >
                  </path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-rates__reports-block">
          <h2 className="profile-rates__title">
            Recent Session Reports
          </h2>
          <div className="profile-rates__message">
            No data currently linked to this profile
          </div>
        </div>
      </section>

      <section className="profile-table">
        <ProfileTabs 
          openPitching={openPitching}
          openBatting={openBatting}
          openComparison={openComparison}
          openBattingLog={openBattingLog}
        />
        <ul className="profile-table__tab-wrap">
                {activeTab === 'Pitching' && <Pitching pitchingSum={pitchingSum}/>}
                {activeTab === 'Batting' && <Batting/>}
                {activeTab === 'Comparison' && 
                 <Comparison 
                   first_name={first_name}
                   last_name={last_name}
                   userpick={userpick}
                   age={age}
                   feet={feet}
                   inches={inches}
                   weight={weight}
                 />
                }
                {activeTab === 'BattingLog' && <BattingLog/>}
        </ul>
      </section>
    </main>
  }
  </div>
  );
};


export default Profile;