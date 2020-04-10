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
} from '../../assets/validations';
import { PROFILE_POSITION, PROFILE_SCHOOLS } from '../../assets/options';
import ProfileSideBarInput from '../Form/ProfileSideBarInput/ProfileSideBarInput';

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
              >
                {({ input, meta }) => (
                  <div>
                    <select {...input} defaultValue="catcher" className="profileSelect">
                      {PROFILE_POSITION.map((v, i) => (
                        <option key={i} value={v.value}>{v.name}</option>
                      ))}
                    </select>
                    <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
                      {PROFILE_POSITION.map((v, i) => (
                        <option key={i} value={v.value}>{v.name}</option>
                      ))}
                    </select>
                    <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
                component={ProfileSideBarInput}
                placeholder="age*"
              />
              <div className="profileFormWrap">
                <Field
                  name="feet"
                  placeholder="feet*"
                  defaultValue={feet}
                  validate={composeValidators(requiredFeet, minFeet, maxFeet, mustBeNumber)}
                  component={ProfileSideBarInput}
                  inputType="small"
                />
                <Field
                  name="inches*"
                  defaultValue={inches}
                  validate={composeValidators(validInches, mustBeNumber)}
                  component={ProfileSideBarInput}
                  inputType="small"
                  placeholder="inches*"
                />
              </div>
              <Field
                name="weight"
                defaultValue={weight}
                validate={composeValidators(minWeight, maxWeight)}
                component={ProfileSideBarInput}
                placeholder="weight*"
              />
            </div>
            <div className="profileFormWrap">
              <Field
                name="throws_hand"
                validate={requiredThrows}
                defaultValue={throws_hand}
              >
                {({ input, meta }) => (
                  <div>
                    <select {...input} className="profileInput--small height">
                      <option value="l">L</option>
                      <option value="r">R</option>
                    </select>
                    <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
                    <select {...input} defaultValue="l" className="profileInput--small height">
                      <option value="l">L</option>
                      <option value="r">R</option>
                    </select>
                    <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
                  <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
                    {PROFILE_SCHOOLS.map((v, i) => (
                      <option key={i} value={v.value}>{v.name}</option>
                    ))}
                  </select>
                  <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
                  <select {...input} multiple value={[]} className="profileSelect">
                    { teams &&
                      teams.map((team, i) => (
                        <option key={i} value={team.id}>{team.name}</option>
                      ))}
                  </select>
                  <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
              validate={required}
              type="select"
            >

              {({ input, meta }) => (
                <div>
                  <select {...input} multiple value={[]} className="profileSelect">
                    { facilities &&
                        facilities.map((facilit, i) => (
                          <option key={i} value={facilit.id}>{facilit.u_name}</option>
                        ))}
                  </select>
                  <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
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
