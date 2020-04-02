import React from 'react';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import { persisSignInPromiseCreator as persisSignIn } from  '../../store/routines/routines';

class AuthGuard extends React.Component {
    state = {fetching: true}

    async componentDidMount() {
        const { persisSignIn } = this.props;
        try {
            await persisSignIn();
        }catch(e) {
            console.log(e);
        } finally {
            this.setState({ fetching: false });
        }
    }

    render() {
        const {fetching} = this.state;
        const {children} = this.props;
        return (
            <React.Fragment>
            {fetching ? (<div>FETCHING DATA...</div>): children}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
    persisSignIn,
}, dispatch);

export default connect(null, mapDispatchToProps)(AuthGuard);