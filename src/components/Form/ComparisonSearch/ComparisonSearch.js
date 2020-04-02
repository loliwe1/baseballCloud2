import React from 'react'

const ComparisonSearch = ({input, onChange}) => (
    <div className="profile-table__search-wrap">
    <input
      {...input}
      type="search"
      id="player-search"
      placeholder="Enter player name"
      className="profile-table__search"
      onChange ={(e)=> {
          if(onChange){
              onChange(e)
          }
          input.onChange(e)
      }}
    />
    <span className="profile-table__search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <path fill="#48BBFF" fillRule="nonzero"
          d="M15.64 13.537l-3.826-3.828c.577-.947.91-2.06.91-3.25 0-3.461-3-6.459-6.46-6.459A6.263 6.263 0 0 0 0 6.265c0 3.46 2.999 6.458 6.458 6.458a6.227 6.227 0 0 0 3.154-.854l3.847 3.85a.965.965 0 0 0 1.363 0l.955-.956c.376-.376.24-.85-.136-1.226zM1.929 6.265a4.337 4.337 0 0 1 4.336-4.338c2.396 0 4.531 2.134 4.531 4.531a4.338 4.338 0 0 1-4.337 4.338c-2.396 0-4.53-2.136-4.53-4.531z">
        </path>
      </svg>
    </span>
  </div>
)

export default ComparisonSearch;