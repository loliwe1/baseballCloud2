import React from 'react';
import PropTypes from 'prop-types';
import '../../../css/modal.css';

const NewFilterSelect = ({
  onChange,
  options,
  title,
  selectShowed,
  showSelect,
  setRef,
  changeTitle,
  defTitle,
}) => (
  <div className="network__filter" ref={setRef}>
    <div
      tabIndex={0}
      role="button"
      className="network_filter-dropdown"
      onClick={showSelect}
      style={{
        display: 'flex',
        alignItems: 'center',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      <div className="network__filter-value" style={{ position: 'relative', padding: 0 }}>
        <span className="network__dropdown-value">{defTitle ? `${defTitle}: ${title}` : title}</span>
      </div>
      <span
        className="profile-table__sorting-icon"
        style={{ marginTop: 0, transform: `${selectShowed ? 'rotate(180deg)' : 'rotate(0)'}` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
          <path
            fill="#48BBFF"
            fillRule="nonzero"
            d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z"
          />
        </svg>
      </span>
    </div>
    {selectShowed && (
      <select
        size={options.length}
        className="modalWrap"
        style={{ display: 'block', overflow: 'hidden' }}
        onChange={onChange}
      >
        {options.map((opt, i) => (
          <option
            key={i}
            value={opt.value}
            className="modalWrap-link"
            onClick={() => changeTitle(opt.name, i)}
          >
            {opt.name}
          </option>
        ))}
      </select>
    )}
  </div>
);


NewFilterSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  title: PropTypes.string.isRequired,
  selectShowed: PropTypes.bool.isRequired,
  showSelect: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
  defTitle: PropTypes.string,
};

NewFilterSelect.defaultProps = {
  defTitle: '',
};

export default NewFilterSelect;
