import React from 'react';
import '../../../css/modal.css'

const NewFilterSelect = ({
    input,
    onChange,
    options,
    title,
    selectShowed,
    showSelect,
    setRef,
    changeTitle,
    defTitle,
}) => {

    return (
        <div className='network__filter' ref={setRef}>
        <div className='network__filter-dropdown' onClick={showSelect}>
          <div className='network__filter-value' style={{position: 'relative', padding: 0}}>
            <span className='network__dropdown-value'>{defTitle? `${defTitle}: ${title}` : title}</span>  
          </div>
  {!selectShowed ? 
      <span className="profile-table__sorting-icon" style={{ marginTop: 0}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
        <path fill="#48BBFF" fillRule="nonzero"
          d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
        </path>
      </svg>
    </span>
    :
    <span className="profile-table__sorting-icon" style={{transform: 'rotate(180deg)', marginTop: 0}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9">
      <path fill="#48BBFF" fillRule="nonzero"
        d="M13.469.432a1.081 1.081 0 0 1 1.565 0 1.165 1.165 0 0 1 0 1.615L8.78 8.43a1.083 1.083 0 0 1-1.567 0L.962 2.047a1.168 1.168 0 0 1 0-1.615 1.081 1.081 0 0 1 1.564 0L8 5.667 13.469.432z">
      </path>
    </svg>
    </span>
  }
        </div>
        {selectShowed &&
            <select
              size={options.length}
              className='modalWrap'
              style={{display: 'block', overflow: 'hidden'}}
              onChange={(e) => {
                if (onChange) {
                  onChange(e);
                }
                  input.onChange(e);
                }}
              >
                {options.map((opt, i) => {
                  return (
                    <option
                      key={i}
                      value={opt.value}
                      className='modalWrap-link'
                      onClick={ () => changeTitle(opt.name, i)}
                      >
                        {opt.name}
                    </option>
                  );
                })}
            </select>
           }
      </div>
    );
};

export default NewFilterSelect;
