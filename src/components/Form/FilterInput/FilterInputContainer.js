import React from 'react';
import PropTypes from 'prop-types';
import FilterInput from './FilterInput';

class FilterInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
  }

  focusInput() {
    this.setState({ focused: true });
  }

  blurInput() {
    this.setState({ focused: false });
  }

  render() {
    const {
      input,
      placeholder,
      onChange,
      divClassName,
      inputClassName,
      spanClassName,
    } = this.props;
    const { focused } = this.state;
    return (
      <FilterInput
        input={input}
        onChange={onChange}
        placeholder={placeholder}
        divClassName={divClassName}
        inputClassName={inputClassName}
        spanClassName={spanClassName}
        focusInput={this.focusInput}
        focused={focused}
        blurInput={this.blurInput}
      />
    );
  }
}

FilterInputContainer.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  divClassName: PropTypes.string.isRequired,
  inputClassName: PropTypes.string.isRequired,
  spanClassName: PropTypes.string.isRequired,
};


export default FilterInputContainer;
