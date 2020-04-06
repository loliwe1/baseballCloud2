import React from 'react';
import PropTypes from 'prop-types';

const LeaderBoardsSort = ({
  input,
  label,
  onChange,
  options,
}) => (
  <div className="leaderboards__sort-value">
    <label className="leaderboards__dropdown-value">{label}</label>
    <select
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        input.onChange(e);
      }}
    >
      {options.map((opt, i) => <option key={i} value={opt.value}>{opt.name}</option>)}
    </select>
  </div>
);

LeaderBoardsSort.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default LeaderBoardsSort;
