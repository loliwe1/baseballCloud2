import React from "react";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import '../../css/spinner.css';
 

const override = css`
  display: block;
  margin: 0 auto;
  
`;
 
class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <div className="sweet-loading">
        <PulseLoader
          css={override}
          size={15}
          color={"#109AE4"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Spinner;
