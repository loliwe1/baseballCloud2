import React from 'react';
import PropTypes from 'prop-types';
import { ICONS } from '../../../assets/info';

const DefaultInput = ({
  input,
  placeholder,
  onChange,
  iconType,
  meta,
}) => {
  const { type } = input;

  return (
    <>
      <div className="modal-signUp__input-wrap input-wrap">
        <i className={ICONS[iconType]} aria-hidden="true" />
        <input
          {...input}
          type={type}
          className="modal-signIn__input modal-input"
          placeholder={placeholder}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
            input.onChange(e);
          }}
        />
      </div>
      { meta.submitFailed && (
        <span
          style={{
            color: '#F05F62',
            paddingBottom: '12px',
            fontSize: '16px',
            display: 'block',
          }}
        >
          {meta.error}
        </span>
      )}
    </>
  );
};

DefaultInput.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  iconType: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

DefaultInput.defaultProps = {
  onChange: () => {},
};

export default DefaultInput;
