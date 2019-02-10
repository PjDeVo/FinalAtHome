import React, {Component} from 'react';

class Button extends Component {
    render() {
        const {className, title, onSubmit} = this.props
        return(
            <div className = 'button-wrapper' >
                <button className = 'button'>{title} </button>
            </div>
        )
    }
}

export default Button;