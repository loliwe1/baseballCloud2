import React from 'react';
import { css } from '@emotion/core';
import PulseLoader from 'react-spinners/PulseLoader';
import '../../assets/css/spinner.css';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = () => (
  <div className="sweet-loading">
    <PulseLoader
      css={override}
      size={15}
      color="#109AE4"
      loading
    />
  </div>
);

export default Spinner;
