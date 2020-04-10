import React from 'react';
import PropTypes from 'prop-types';

const ProfileSideBarInput = ({
  input,
  meta,
  inputType,
  placeholder,
}) => (
  <div>
    <input
      className={`profileInput${inputType ? `--${inputType}` : ''}`}
      {...input}
      type="text"
      placeholder={placeholder}
    />
    { meta.submitFailed && <span style={{ color: 'red' }}>{meta.error}</span> }
  </div>
);

ProfileSideBarInput.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

ProfileSideBarInput.defaultProps = {
  inputType: '',
};

export default ProfileSideBarInput;
