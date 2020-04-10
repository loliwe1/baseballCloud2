import React from 'react';
import PropTypes from 'prop-types';
import SignUpTabsItem from './SignUpTabsItem';

class SignUpTabsItemContainer extends React.Component {
  changeActiveTab = () => {
    const { active, changeActiveTab } = this.props;

    changeActiveTab(active);
  }

  render() {
    const { name, active, role } = this.props;
    const activeTabe = role === active ? 'modal-btn-checked' : '';
    return (
      <SignUpTabsItem
        changeActiveTab={this.changeActiveTab}
        name={name}
        actvie={active}
        activeTabe={activeTabe}
      />
    );
  }
}

SignUpTabsItemContainer.propTypes = {
  active: PropTypes.string.isRequired,
  changeActiveTab: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default SignUpTabsItemContainer;
