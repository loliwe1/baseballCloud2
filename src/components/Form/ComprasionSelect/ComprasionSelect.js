import React from 'react';
import '../../../css/modal.css'

const ComprasionSelect = ({
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
          {selectShowed &&
            <select
              size={options.length}
              className='modalWrap'
              style={{display: 'block', overflow: 'hidden', top: '-20px', left: '-20px'}}
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
                      onClick={showSelect}
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

export default ComprasionSelect;
