import React, {Component} from 'react';

class Button extends Component {

    clearArea() {
        console.log('button was clicked');
        // location.reload();
        this.setState({input: ''});
    }
    render() {
        const {className, title,} = this.props
        return(
            <div className = 'button-wrapper' >
                <button onClick = {() =>{ this.clearArea();}} className = 'button'>{title} </button>
            </div>
        )
    }
}

export default Button;