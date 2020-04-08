import React from 'react';
import PropTypes from 'prop-types';

const DefaultInput = ({
  input,
  divClassName,
  inputClassName,
  placeholder,
  iClassName,
  onChange,
}) => {
  const { type } = input;
  return (
    <div className={divClassName}>
      <i className={iClassName} aria-hidden="true" />
      <input
        type={type}
        className={inputClassName}
        placeholder={placeholder}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
          input.onChange(e);
        }}
      />
    </div>
  );
};

DefaultInput.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  divClassName: PropTypes.string.isRequired,
  inputClassName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  iClassName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

DefaultInput.defaultProps = {
  onChange: () => {},
};

export default DefaultInput;
