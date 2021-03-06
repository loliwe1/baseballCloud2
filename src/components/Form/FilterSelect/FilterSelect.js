import React from 'react';
import PropTypes from 'prop-types';

const FilterSelect = ({
  input,
  onChange,
  label,
  divClassName,
  labelClassName,
  selectClassName,
  options,
  divDropClassName,
  divValClassName,
}) => (
  <div className={divClassName}>
    <div className={divDropClassName}>
      <div className={divValClassName}>
        <label className={labelClassName}>{label}</label>
        <select
          className={selectClassName}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
            input.onChange(e);
          }}
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.value} className="main-nav__dropdown-link">{opt.name}</option>
          ))}
        </select>
      </div>
      <span className="network__filter-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
          <path
            fill="#48BBFF"
            fillRule="nonzero"
            d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z"
          />
        </svg>
      </span>
      <div className="network__dropdown hide" />
    </div>
  </div>
);

FilterSelect.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  divClassName: PropTypes.string.isRequired,
  divDropClassName: PropTypes.string.isRequired,
  divValClassName: PropTypes.string.isRequired,
  labelClassName: PropTypes.string.isRequired,
  selectClassName: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default FilterSelect;
