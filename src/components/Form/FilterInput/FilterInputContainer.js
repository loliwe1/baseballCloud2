import React from 'react';
import FilterInput from './FilterInput';

class FilterInputContainer extends React.Component {
    state = {
        focused: false,
    }

    focusInput= () => {
        this.setState({focused: true})
        console.log(this.state.focused)
    }

    blurInput = () => {
        this.setState({focused: false})
    }

    render() {
        const { 
            input,
            placeholder,
            onChange,
            divClassName,
            inputClassName,
            spanClassName,
        } = this.props
        const {focused} = this.state;
        return(
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
        )
    }
}

export default FilterInputContainer;