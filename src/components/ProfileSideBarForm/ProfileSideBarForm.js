import React from 'react';
import PropTypes from 'prop-types';
import '../../css/style.css';
import '../../css/profileForm.css';
import { Form, Field } from 'react-final-form';
import userpick from '../../img/userpic.png';
import {
  requiredFirstName,
  requiredLastName,
  maxAge,
  requiredFeet,
  minFeet,
  maxFeet,
  composeValidators,
  mustBeNumber,
  validInches,
  maxWeight,
  minWeight,
  requiredThrows,
  requiredBats,
  requiredAge,
  required,
  requiredInches,
} from '../../assets/validations';
import {
  PROFILE_POSITION,
  PROFILE_SCHOOLS,
  HAND,
  FACILITIES,
} from '../../assets/options';
import ProfileSideBarInput from '../Form/ProfileSideBarInput/ProfileSideBarInput';
import { numberField } from '../../assets/utils';
import ProfileSideBarSelect from '../Form/ProfileSideBarSelect/ProfileSideBarSelect';

const ProfileSideBarForm = ({
  saveSettings,
  closeForm,
  schools,
  teams,
  first_name,
  last_name,
  age,
  weight,
  feet,
  inches,
  throws_hand,
  bats_hand,
  position,
  position2,
}) => (
  <aside className="profile-aside">
    <div className="profile-info__userpic">
      <img src={userpick} alt="userpic" width="100" height="100" className="profile-info__userpic-img" />
    </div>
    <Form
      onSubmit={saveSettings}
      render={({
        handleSubmit, submitError,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="profileFormWrap">
            <Field
              name="first_name"
              validate={requiredFirstName}
              defaultValue={first_name}
              component={ProfileSideBarInput}
              inputType="small"
              placeholder="firstname*"
            />
            <Field
              name="last_name"
              defaultValue={last_name}
              validate={requiredLastName}
              component={ProfileSideBarInput}
              placeholder="lastname*"
              inputType="small"
            />
          </div>
          <div className="profileSelectWrap">
            <div>
              <Field
                name="position"
                validate={required}
                defaultValue={position}
                component={ProfileSideBarSelect}
                options={PROFILE_POSITION}
              />
            </div>
            <div>
              <Field
                name="position2"
                validate={required}
                defaultValue={position2}
                component={ProfileSideBarSelect}
                options={PROFILE_POSITION}
              />
            </div>
          </div>

          <div className="personalInfo">
            Personal info
            <hr />
          </div>

          <div>
            <div>
              <Field
                name="age"
                defaultValue={age}
                validate={composeValidators(maxAge, requiredAge)}
                component={ProfileSideBarInput}
                placeholder="age*"
                {...numberField}
              />
              <div className="profileFormWrap">
                <Field
                  name="feet"
                  placeholder="feet*"
                  defaultValue={feet}
                  validate={composeValidators(requiredFeet, minFeet, maxFeet, mustBeNumber)}
                  component={ProfileSideBarInput}
                  inputType="small"
                  {...numberField}
                />
                <Field
                  name="inches"
                  defaultValue={inches}
                  validate={composeValidators(requiredInches, validInches, mustBeNumber)}
                  component={ProfileSideBarInput}
                  inputType="small"
                  placeholder="inches*"
                  {...numberField}
                />
              </div>
              <Field
                name="weight"
                defaultValue={weight}
                validate={composeValidators(minWeight, maxWeight)}
                component={ProfileSideBarInput}
                placeholder="weight*"
                {...numberField}
              />
            </div>
            <div className="profileFormWrap">
              <Field
                name="throws_hand"
                validate={requiredThrows}
                defaultValue={throws_hand}
                component={ProfileSideBarSelect}
                options={HAND}
                small
              />
              <Field
                name="bats_hand"
                validate={requiredBats}
                defaultValue={bats_hand}
                component={ProfileSideBarSelect}
                options={HAND}
                small
              />
            </div>
          </div>
          <div className="personalInfo">
            School
            <hr />
          </div>
          <div>
            <Field
              name="school"
              validate={required}
              component={ProfileSideBarSelect}
              options={schools}
            />
            <Field
              name="school_year"
              validate={required}
              defaultValue="sophomore"
              component={ProfileSideBarSelect}
              options={PROFILE_SCHOOLS}
            />
            <Field
              name="teams"
              validate={required}
              type="select"
              component={ProfileSideBarSelect}
              options={teams}
            />
          </div>
          <div>
            <div className="personalInfo">
              Facility
              <hr />
            </div>
            <Field
              name="facilities"
              validate={required}
              type="select"
              component={ProfileSideBarSelect}
              defaultValue="32"
              options={FACILITIES}
            />
          </div>
          <div className="personalInfo">
            About
            <hr />
          </div>
          <Field
            className="profileTextArea"
            name="biography"
            component="textarea"
            placeholder="biography"
            defaultValue="Describe yourself in a few words"
          />
          {submitError && <div>{submitError}</div>}
          <div className="profileFormWrap">
            <button className="profileButton close" type="button" onClick={closeForm}>Cancel</button>
            <button
              className="profileButton save"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      )}
    />
  </aside>
);

ProfileSideBarForm.propTypes = {
  saveSettings: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  schools: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  teams: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  facilities: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  age: PropTypes.number,
  weight: PropTypes.number,
  feet: PropTypes.number,
  inches: PropTypes.number,
  throws_hand: PropTypes.string,
  bats_hand: PropTypes.string,
  position: PropTypes.string,
  position2: PropTypes.string,
};


ProfileSideBarForm.defaultProps = {
  age: null,
  weight: null,
  feet: null,
  inches: null,
  first_name: null,
  last_name: null,
  throws_hand: null,
  bats_hand: null,
  position: null,
  position2: null,

};

export default ProfileSideBarForm;
