import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navigation from './navigation/navigation';
import './assets/css/style.css';
import './assets/css/modal.css';



function App({ user }) {
  return (
    <div className="main">
      <Navigation user={user} />
    </div>
  );
}

App.propTypes = {
  user: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  user: state.user.profId,
});


export default connect(mapStateToProps)(App);
