import React from 'react'

const LeaderBoardsSort = ({input, label, onChange, options}) => (
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
      {options.map((opt, i) => {
        return <option key={i} value={opt.value}>{opt.name}</option>
      })}
    </select>
  </div>
)

export default LeaderBoardsSort;