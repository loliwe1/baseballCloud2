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
                name="position"
                validate={required}
                defaultValue={position}
              >
                {({ input, meta }) => (
                  <div>
                    <select {...input} defaultValue="catcher" className="profileSelect">
                      <option value="-">-</option>
                      <option value="catcher">Catcher</option>
                      <option value="first_base">First Base</option>
                      <option value="second_base">Second Base</option>
                      <option value="shortstop">Shortstop</option>
                      <option value="third_base">Third Base</option>
                      <option value="outfield">Outfield</option>
                      <option value="pitcher">pitcher</option>
                    </select>
                    <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="position2"
                validate={required}
                defaultValue={position2}
              >
                {({ input, meta }) => (
                  <div>
                    <select {...input} defaultValue="catcher" className="profileSelect">
                      <option value="-">-</option>
                      <option value="catcher">Catcher</option>
                      <option value="first_base">First Base</option>
                      <option value="second_base">Second Base</option>
                      <option value="shortstop">Shortstop</option>
                      <option value="third_base">Third Base</option>
                      <option value="outfield">Outfield</option>
                      <option value="pitcher">pitcher</option>
                    </select>
                    <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                  </div>
                )}
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
                name="throws_hand"
                validate={requiredThrows}
                defaultValue={throws_hand}
              >
                {({ input, meta }) => (
                  <div>
                    <select {...input} className="userNameForm height">
                      <option value="l">L</option>
                      <option value="r">R</option>
                    </select>
                    <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                  </div>
                )}
              </Field>
              <Field
                name="bats_hand"
                validate={requiredBats}
                defaultValue={bats_hand}
              >
                {({ input, meta }) => (
                  <div>
                    <select {...input} defaultValue="l" className="userNameForm height">
                      <option value="l">L</option>
                      <option value="r">R</option>
                    </select>
                    <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                  </div>
                )}
              </Field>
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
            >
              {({ input, meta }) => (
                <div>
                  <select {...input} className="profileSelect">
                    { schools &&
                      schools.map((school, i) => (
                        <option key={i} value={school.id}>{school.name}</option>
                      ))}
                  </select>
                  <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                </div>
              )}
            </Field>
            <Field
              name="school_year"
              validate={required}
              defaultValue="sophomore"
            >

              {({ input, meta }) => (
                <div>
                  <select {...input} className="profileSelect">
                    <option value="sophomore">Sophomore</option>
                    <option value="freshman">Freshman</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    <option value="none">None</option>
                  </select>
                  <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                </div>
              )}
            </Field>
            <Field
              name="teams"
              validate={required}
              type="select"
            >
              {({ input, meta }) => (
                <div>
                  <select multiple {...input} className="profileSelect">
                    { teams &&
                      teams.map((team, i) => (
                        <option key={i} value={team.id}>{team.name}</option>
                      ))}
                  </select>
                  <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                </div>
              )}
            </Field>
          </div>
          <div>
            <div className="personalInfo">
              Facility
              <hr />
            </div>
            <Field
              name="facilities"
              multiple
              validate={required}
              type="select"
            >

              {({ input, meta }) => (
                <div>
                  <select multiple {...input} className="profileSelect">
                    { facilities &&
                        facilities.map((facilit, i) => (
                          <option key={i} value={facilit.id}>{facilit.u_name}</option>
                        ))}
                  </select>
                  <div>{meta.error && meta.touched && <span style={{ color: 'red' }}>{meta.error}</span>}</div>
                </div>
              )}

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
