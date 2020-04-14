import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/profile.css';
import userpick from '../../assets/img/userpic.png';
import Comparison from '../Comparison';
import Pitching from '../Pitching';
import Batting from '../Batting';
import ProfileSideBar from '../ProfileSideBar/ProfileSideBar';
import ProfileSideBarFormContainer from '../ProfileSideBarForm/ProfileSideBarFormContainer';
import ProfileTabs from '../ProfileTabs';
import BattingLog from '../Batting/BattingLog';
import PitchingLog from '../Pitching/PitchingLog';
import ProfileCreate from './components/ProfileCreate';
import ProfileTopValues from './components/ProfileTopValues';

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
}) => (
  <div className="profile-container">
    {(!openedForm && first_name) ? (
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
    ) : (
      <ProfileSideBarFormContainer userpick={userpick} closeForm={closeForm} />
    )}
    {first_name ? (
      <main className="profile-main">
        <section className="profile-rates">
          <ProfileTopValues pitcher_summary={pitcher_summary} title="Top Pitching Values" active />
          <ProfileTopValues pitcher_summary={pitcher_summary} title="Recent Session Reports" />
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
            {activeTab === 'Pitching' && <Pitching pitchingSum={pitchingSum} />}
            {activeTab === 'Batting' && <Batting />}
            {activeTab === 'Comparison' && (
              <Comparison
                first_name={first_name}
                last_name={last_name}
                userpick={userpick}
                age={age}
                feet={feet}
                inches={inches}
                weight={weight}
              />
            )}
            {activeTab === 'BattingLog' && <BattingLog />}
            {activeTab === 'PitchingLog' && <PitchingLog />}
          </ul>
        </section>
      </main>
    ) : (
      <ProfileCreate />
    )}
  </div>
);


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
};

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
};

export default Profile;
