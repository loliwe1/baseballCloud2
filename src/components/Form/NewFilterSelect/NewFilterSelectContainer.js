import React from 'react';
import NewFilterSelect from './NewFilterSelect';
import PropTypes from 'prop-types';

class NewFilterSelectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selectShowed: false,
            title: this.props.title,
        }
    }
   
    changeTitle = (name, i) => {
        const {title} = this.props;
        if(i === 0) name = title;
        this.setState({
            title: name,
            selectShowed: !this.state.selectShowed,
          })
    }

    showSelect = () => {
        this.setState({
          selectShowed: !this.state.selectShowed,
        })
    }

    handleClick = (e) => {
        if(!this.node.contains(e.target)) {
            this.setState({selectShowed: false})
        }
    }

    setRef = (element) => {
        this.node = element
    }
    onChange = (e) => {
        const {onChange} = this.props;
        onChange(e)
    }


    componentDidMount(){
        document.addEventListener('click', this.handleClick);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
    }

    render() {
        const {
            input,
            options,
            defTitle,
        } = this.props
        const {selectShowed , title} = this.state;
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
        )
    }
}

NewFilterSelect.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  defTitle: PropTypes.string.isRequired,
};

export default NewFilterSelectContainer;