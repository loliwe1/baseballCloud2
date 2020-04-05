import React from 'react';
import Pagination from './Pagination';

class PaginationContainer extends React.Component {
    state = {
        active: 1,
        total: this.props.total,
        count: this.props.count,
        arrow: 'network__pagination-link',
        activeArrow: 'network__pagination-link network__pagination-link--disabled',
    }

    changeActiveButton = async (number) => {
        await this.setState({active: number})
        const {getOffset} = this.props
        const {count, active} = this.state

        getOffset(count*(active - 1))
    }

    goToNextButton = () => {
        if(this.state.count * this.state.active >= this.state.total) return;

        this.setState({active: this.state.active += 1})

        const {getOffset} = this.props
        const {count, active} = this.state
        getOffset(count*(active - 1))
    }
    
    goToPrevButton = () => {
        if(this.state.active === 1) return;
        this.setState({active: this.state.active -= 1})

        const {getOffset} = this.props
        const {count, active} = this.state
        getOffset(count*(active - 1))
    }

    render() {
   
       const {active, total, count, arrow, activeArrow} = this.state;
       const amountButtons =  new Array(Math.ceil((total/count))).fill(1);
        return (
            <Pagination 
              active={active}
              total={total}
              count={count}
              amountButtons={amountButtons}
              changeActiveButton={this.changeActiveButton}
              arrow={arrow}
              activeArrow={activeArrow}
              goToNextButton={this.goToNextButton}
              goToPrevButton={this.goToPrevButton}
            />
        )
    }
}

export default PaginationContainer;