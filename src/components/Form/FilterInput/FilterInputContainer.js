import React from 'react';
import PropTypes from 'prop-types';
import FilterInput from './FilterInput';

class FilterInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
  }

  focusInput = () => {
    this.setState({ focused: true });
  }

  blurInput = () => {
    this.setState({ focused: false });
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
      placeholder,
      inputType,
    } = this.props;
    const { focused } = this.state;
    return (
      <FilterInput
        input={input}
        onChange={this.onChange}
        placeholder={placeholder}
        focusInput={this.focusInput}
        focused={focused}
        blurInput={this.blurInput}
        inputType={inputType}
      />
    );
  }
}

FilterInputContainer.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputType: PropTypes.string.isRequired,
};


export default FilterInputContainer;
