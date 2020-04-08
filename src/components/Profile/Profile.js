import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';
import '../../css/profile.css';
import userpick from '../../img/userpic.png';
import Comparison from '../Comparison';
import Pitching from '../Pitching';
import Batting from '../Batting';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import ProfileSideBarFormContainer from '../ProfileSideBarForm/ProfileSideBarFormContainer';
import ProfileTabs from '../ProfileTabs';
import BattingLog from '../Batting/BattingLog';
import PitchingLog from '../Pitching/PitchingLog';

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
  favorite,
  changeFavorite,
  openBattingLog,
  openPitchingLog,
}) => {
  return (
    <div className="profile-container">

    {(!openedForm && first_name) ?
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
    />
    : <ProfileSideBarFormContainer userpick={userpick} closeForm={closeForm}/>
  }
    {first_name ?
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
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#eff1f3"
                    strokeWidth="1"
                    fillOpacity="0"
                  />

                  {( pitcher_summary && pitcher_summary.length !==0 && pitcher_summary[0].velocity) 
                    ? 
                    (
                      <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${pitcher_summary[0].velocity / 2}px, 100px`,
                        strokeDashoffset: `0px`,
                        transition: `strokeDashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s`,
                      }}
                      />
                    ) 
                    : 
                    (
                      <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${1}px, 100px`,
                        strokeDashoffset: `0px`,
                        transition: `strokeDashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s`,
                      }}
                      />
                    )
                  } 
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
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#eff1f3"
                    strokeWidth="1"
                    fillOpacity="0"
                  />

                {( pitcher_summary && pitcher_summary.length !==0 && pitcher_summary[0].spin_rate)
                  ? 
                  (
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${pitcher_summary[0].spin_rate * 2 / 100}px, 100px`,
                        strokeDashoffset: `0px`,
                        transition: `strokeDashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s`,
                      }}
                    />
                  )
                  :
                  (
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${1}px, 100px`,
                        strokeDashoffset: `0px`,
                        transition: `strokeDashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s`,
                      }}
                    />
                  )
                }
               
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
                  <path
                    className="rc-progress-line-trail"
                    d="M 0.5,0.5 L 99.5,0.5"
                    strokeLinecap="round"
                    stroke="#eff1f3"
                    strokeWidth="1"
                    fillOpacity="0"
                  />

                  {( pitcher_summary && pitcher_summary.length !==0 && pitcher_summary[0].pitch_type)
                  ? 
                  (
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${pitcher_summary[0].pitch_type * 2 }px, 100px`,
                        strokeDashoffset: `0px`,
                        transition: `strokeDashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s`,
                    }}
                  />
                  )
                  :
                  (
                    <path
                      className="rc-progress-line-path"
                      d="M 0.5,0.5 L 99.5,0.5"
                      strokeLinecap="round"
                      stroke="#ffd01a"
                      strokeWidth="1"
                      fillOpacity="0"
                      style={{
                        strokeDasharray: `${1}px, 100px`,
                        strokeDashoffset: `0px`,
                        transition: `strokeDashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s`,
                      }}
                    />
                  )
                }

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
          openPitchingLog={openPitchingLog}
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
                {activeTab === 'PitchingLog' && <PitchingLog/>}
        </ul>
      </section>
    </main>
 : 
 <div className='profile-create__wrap'>
   <div className='profile-create__container'>
  <span className="GlobalStyles__Icon-bvXWsR eKZFGv">
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="47"
      viewBox="0 0 52 47"
    >
      <path
        fill="#48BBFF"
        fillRule="nonzero"
        d="M50.426 21.183c-3.133-7.871-11.59-11.807-25.373-11.807h-6.495v-7.5c0-.509-.184-.948-.551-1.32A1.774 1.774 0 0 0 16.702 0c-.503 0-.938.186-1.305.557l-14.846 15c-.367.372-.551.811-.551 1.32 0 .507.184.946.55 1.318l14.847 15c.368.372.803.558 1.305.558.503 0 .938-.186 1.305-.557.367-.371.551-.81.551-1.319v-7.5h6.495c1.894 0 3.59.058 5.088.175 1.498.117 2.988.327 4.466.63 1.48.303 2.765.718 3.857 1.245a13.64 13.64 0 0 1 3.06 2.037c.947.83 1.72 1.816 2.32 2.96.599 1.142 1.068 2.494 1.406 4.057.338 1.562.508 3.33.508 5.302a50.24 50.24 0 0 1-.145 3.604c0 .117-.024.347-.073.689-.048.342-.072.6-.072.776 0 .292.082.537.246.732.164.195.392.293.682.293.309 0 .58-.166.811-.498.135-.176.26-.391.377-.645a66.163 66.163 0 0 0 .696-1.581c2.455-5.567 3.683-9.971 3.683-13.214 0-3.886-.513-7.139-1.537-9.756z">
      </path>
    </svg>
  </span>
  <div className='profile-create__title'>
    Your Account
  </div>
  <div>
    <div className='profile-create'>
    Changing your profile options lets you control how others see you and your profile. These settings include things like your name, personal info and school.
    </div>
  </div>
  </div>
</div>
  }
  </div>
  );
};

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  position: PropTypes.string,
  position2: PropTypes.string,
  age: PropTypes.number,
  weight: PropTypes.number,
  throws_hand: PropTypes.string,
  bats_hand: PropTypes.string,
  feet: PropTypes.number,
  inches: PropTypes.number,
  pitcher_summary: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  openComparison: PropTypes.func.isRequired,
  openBatting: PropTypes.func.isRequired,
  openPitching: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  pitchingSum: PropTypes.objectOf(PropTypes.any),
  openedForm: PropTypes.bool.isRequired,
  openForm: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  profId: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  changeFavorite: PropTypes.func.isRequired,
  openBattingLog: PropTypes.func.isRequired,
  openPitchingLog: PropTypes.func.isRequired,
}

Profile.defaultProps = {
  first_name: null,
  last_name: null,
  position: null,
  position2: null,
  age: null,
  weight: null,
  throws_hand: null,
  bats_hand: null,
  feet: null,
  inches: null,
  pitcher_summary: null,
  pitchingSum: null,
  favorite: null,
}

export default Profile;