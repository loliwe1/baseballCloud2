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
} from '../../validations';


const ProfileSideBarForm = ({
  saveSettings,
  closeForm,
  schools,
  teams,
  facilities,
  first_name,
  last_name,
  age,
  weight,
  feet,
  inches,
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
            >
              {({ input, meta }) => (
                <div>
                  <input
                    className="userNameForm"
                    {...input}
                    type="text"
                    placeholder="firstname*"
                  />
                  {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="last_name"
              defaultValue={last_name}
              validate={requiredLastName}
            >
              {({ input, meta }) => (
                <div>
                  <input
                    className="userNameForm"
                    {...input}
                    type="text"
                    placeholder="lastname*"
                  />
                  {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className="profileSelectWrap">
            <div>
              <Field
                className="profileSelect"
                name="position"
                component="select"
                  // validate={required}
                defaultValue="catcher"
              >
                <option value="catcher">Catcher</option>
                <option value="first_base">First Base</option>
                <option value="second_base">Second Base</option>
                <option value="shortstop">Shortstop</option>
                <option value="third_base">Third Base</option>
                <option value="outfield">Outfield</option>
                <option value="pitcher">pitcher</option>
              </Field>
            </div>
            <div>
              <Field
                className="profileSelect"
                name="position2"
                component="select"
                  // validate={required}
                defaultValue="catcher"
              >
                <option value="-">-</option>
                <option value="catcher">Catcher</option>
                <option value="first_base">First Base</option>
                <option value="second_base">Second Base</option>
                <option value="shortstop">Shortstop</option>
                <option value="third_base">Third Base</option>
                <option value="outfield">Outfield</option>
                <option value="pitcher">pitcher</option>
              </Field>
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
              >
                {({ input, meta }) => (
                  <div>
                    <input
                      className="profileInput"
                      {...input}
                      type="text"
                      placeholder="age*"
                    />
                    {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <div className="profileFormWrap">
                <Field
                  name="feet"
                  placeholder="feet"
                  defaultValue={feet}
                  validate={composeValidators(requiredFeet, minFeet, maxFeet, mustBeNumber)}
                >
                  {({ input, meta }) => (
                    <div>
                      <input
                        className="userNameForm"
                        {...input}
                        type="text"
                        placeholder="feet*"
                      />
                      {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                    </div>
                  )}
                </Field>

                <Field
                  className="userNameForm"
                  name="inches"
                  defaultValue={inches}
                  validate={composeValidators(validInches, mustBeNumber)}
                >
                  {({ input, meta }) => (
                    <div>
                      <input
                        className="userNameForm"
                        {...input}
                        type="text"
                        placeholder="inches*"
                      />
                      {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <Field
                name="weight"
                defaultValue={weight}
                validate={composeValidators(minWeight, maxWeight)}
              >
                {({ input, meta }) => (
                  <div>
                    <input
                      className="profileInput"
                      {...input}
                      type="text"
                      placeholder="weight*"
                    />
                    {meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className="profileFormWrap">
              <Field
                className="userNameForm height"
                name="throws_hand"
                component="select"
                validate={requiredThrows}
                defaultValue="l"
              >
                <option value="l">L</option>
                <option value="r">R</option>
              </Field>
              <Field
                className="userNameForm height"
                name="bats_hand"
                component="select"
                validate={requiredBats}
                defaultValue="l"
              >
                <option value="l">L</option>
                <option value="r">R</option>
              </Field>
            </div>
          </div>
          <div className="personalInfo">
            School
            <hr />
          </div>
          <div>
            <Field className="profileSelect" name="school" component="select">
              { schools &&
                      schools.map((school, i) => (
                        <option selected key={i} value={school.id}>{school.name}</option>
                      ))}
            </Field>
            <Field
              className="profileSelect"
              name="school_year"
              component="select"
              // validate={required}
              defaultValue="sophomore"
            >
              <option value="sophomore">Sophomore</option>
              <option value="freshman">Freshman</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="none">None</option>
            </Field>
            <Field
              className="profileSelect"
              name="teams"
              component="select"
              type="select"
              multiple
            >
              { teams &&
                teams.map((team, i) => (
                  <option selected key={i} value={team.id}>{team.name}</option>
                ))}
            </Field>
          </div>
          <div>
            <div className="personalInfo">
              Facility
              <hr />
            </div>
            <Field
              className="profileSelect"
              name="facilities"
              component="select"
              type="select"
              multiple
            >
              { facilities &&
                  facilities.map((facilit, i) => (
                    <option key={i} value={facilit.id}>{facilit.u_name}</option>
                  ))}
            </Field>
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
            defaultValue="test123"
            // validate={required}
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
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  feet: PropTypes.number.isRequired,
  inches: PropTypes.number.isRequired,
};


export default ProfileSideBarForm;
