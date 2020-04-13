import React from 'react';
import PropTypes from 'prop-types';

const ProfileSideBarSelect = ({
  input,
  meta,
  options,
  small,
}) => (
  <div>
    <select {...input} className={!small ? 'profileSelect' : 'profileInput--small height'}>
      {options.map((v, i) => (
        <option key={i} value={v.value}>{v.name}</option>
      ))}
    </select>
    <div>{ meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }</div>
  </div>
);

ProfileSideBarSelect.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  small: PropTypes.bool,
};

ProfileSideBarSelect.defaultProps = {
  small: false,
};

export default ProfileSideBarSelect;
