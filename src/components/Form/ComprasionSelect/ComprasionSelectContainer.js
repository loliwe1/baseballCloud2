import React from 'react';
import PropTypes from 'prop-types';
import ComprasionSelect from './ComprasionSelect';

class ComprasionSelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectShowed: true,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  showSelect = () => {
    this.setState((prevState) => ({ selectShowed: !prevState.selectShowed }));
  }

  handleClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.setState({ selectShowed: false });
    }
  }

  setRef = (element) => {
    this.node = element;
  }

  onChange = (e) => {
    const { onChange } = this.props;
    onChange(e);
  }

  render() {
    const {
      input,
      options,
      defTitle,
    } = this.props;
    const { selectShowed, title } = this.state;
    return (
      <ComprasionSelect
        input={input}
        onChange={this.onChange}
        options={options}
        title={title}
        showSelect={this.showSelect}
        selectShowed={selectShowed}
        setRef={this.setRef}
        changeTitle={this.changeTitle}
        defTitle={defTitle}
      />
    );
  }
}

ComprasionSelectContainer.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  defTitle: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ComprasionSelectContainer.defaultProps = {
  defTitle: '',
};

export default ComprasionSelectContainer;
