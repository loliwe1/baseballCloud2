import React from 'react';

const DefaultInput = ({
    input,
    divClassName,
    inputClassName,
    placeholder,
    iClassName,
    onChange
}) => {
    const { type } = input;
    return(
  <div className={divClassName}>
    <i className={iClassName} aria-hidden="true"></i>
    <input
        type = {type}
        className = {inputClassName}
        placeholder = {placeholder}
        onChange={(e) => {
            if (onChange) {
                onChange(e);
            }
            input.onChange(e);
        }}
    />
  </div>
)};

export default DefaultInput;