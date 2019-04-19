import React, { Component } from 'react'

class Thumbs extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            clicks:0,
            show:true
        };
    }
    
    /* handleClick = () => {
        this.props.onClickFunction(this.props.incrementValue)
    }

    render() {

        return (
            <button onCLick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        )
    }
}

const Result = props => {
    return (
        <div>
            {props.counter}
        </div>
    )
} */

export default Thumbs