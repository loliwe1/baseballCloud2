import React from 'react';
import PropTypes from 'prop-types';
import NewFilterSelect from './NewFilterSelect';


class NewFilterSelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectShowed: false,
      title: '',
    };
  }

  componentDidMount() {
    const { title } = this.props;
    this.setState({ title });
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  changeTitle = (name, i) => {
    const { title } = this.props;

    if (i === 0) {
      this.setState({
        title,
      });
    } else {
      this.setState({
        title: name,
      });
    }
    this.setState((prevState) => ({ selectShowed: !prevState.selectShowed }));
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
    const { onChange, input } = this.props;
    if (onChange) {
      onChange(e);
    }
    input.onChange(e);
  }


  render() {
    const {
      input,
      options,
      defTitle,
    } = this.props;
    const { selectShowed, title } = this.state;
    return (
      <NewFilterSelect
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

NewFilterSelectContainer.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  defTitle: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

NewFilterSelectContainer.defaultProps = {
  defTitle: '',
};

export default NewFilterSelectContainer;
