import React, { PureComponent } from 'react';

class Main extends PureComponent {
    state = {
        userInput: ''
    };

    componentDidMount = () => {
        console.log('did mount');
    }
    handleInput = (event) => {
        this.setState({ userInput: event.target.value });
    }
    handleClick = () => {
        this.inputElement.focus();
    }
    render = () => {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleInput}
                    ref={(input) => { this.inputElement = input; }}
                />
                <button onClick={this.handleClick}>click me </button>
            </div>
        );
    }
}

export default Main;
