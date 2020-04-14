import React from 'react';
import PropTypes from 'prop-types';

const ComprasionSelect = ({
  onChange,
  options,
  selectShowed,
  showSelect,
  setRef,

}) => (
  <div className="network__filter" ref={setRef}>
    {selectShowed && (
      <select
        size={options.length}
        className="modalWrap"
        style={{
          display: 'block',
          overflow: 'hidden',
          top: '-20px',
          left: '-20px',
        }}
        onChange={onChange}
      >
        {options.map((opt, i) => (
          <option
            key={i}
            value={opt.value}
            className="modalWrap-link"
            onClick={showSelect}
          >
            {opt.name}
          </option>
        ))}
      </select>
    )}
  </div>
);

ComprasionSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  selectShowed: PropTypes.bool.isRequired,
  showSelect: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,

};

export default ComprasionSelect;
