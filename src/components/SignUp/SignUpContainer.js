import React from 'react';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {signUp} from '../../store/routines/routines';

class SignUpContainer extends React.Component {
    signUp = (v) => {
       const {signUp} = this.props;
       const role = 'player';
        console.log(v, signUp)
        signUp({...v, role})
    }

    render() {
        return (
            <SignUp signUp={this.signUp}/>
            );
    }
}

const mapDispathToProps = (dispatch) => bindActionCreators({
    signUp,
}, dispatch)

export default connect(null, mapDispathToProps)(SignUpContainer);